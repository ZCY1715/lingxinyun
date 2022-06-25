<template>
  <section id="all">
    <section v-if="isShower">
      <el-upload
        class="upload-demo"
        drag
        action="#"
        :auto-upload="config"
        accept=".cnt,.bdf,.edf,.gdf,.fif,.txt"
        :http-request="textSend"
        :file-list="fileList"
        :multiple="false"
        :show-file-list="false"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击选择</em></div>
        <div class="el-upload__tip" >
          一次只能上传一个文件,只能选择cnt/bdf/edf/gdf/fif文件，且不超过400M
        </div>
      </el-upload>
    </section>

    <section>
      <div v-if="isShowing">
        <el-button
          size="mini"
          type="success"
          icon="el-icon-check"
          circle
        ></el-button>
        <label>上传成功！</label>
      </div>

      <el-card shadow="hover" v-if="isShowing" class="box-card">
        <div v-for="item in cardinfo" :key="item.id">
          <span
            >{{ item.name }} <em>{{ item.data + item.unit }}</em></span
          >
        </div>
      </el-card>
      <!-- 文件列表空的提示 -->
      <el-empty v-if="isShow" description="还没有录入文件"></el-empty>
    </section>
    <!-- 进度球的提示 包含了加载进度 -->
    <section id="process" v-if="loading">
      <el-progress
        type="circle"
        :percentage="percentage"
        :status="status"
      ></el-progress>
      <span>文件正在处理中，请不要关闭窗口</span>
    </section>

    <!-- 当存在文件时 文件列表的显示 逻辑是绑定了showfile -->
    <section
      id="fileTable"
      v-loading="showfile"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      v-if="showfile"
    >
      <el-table :data="fileList" style="width: 100%">
        <el-table-column prop="date" label="上传日期"> </el-table-column>
        <el-table-column prop="name" label="文件名"> </el-table-column>
        <el-table-column prop="path" label="文件路径"> </el-table-column>
        <el-table-column 
          ><template >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </section>
  </section>
</template>

<script>
const SIZE = 9 * 1024 * 1024; //设置文件切片大小 10M

export default {
  name: "DataEntry",
  data() {
    return {
      myReg: "eeg/txt/exe",
      cardinfo: [
        { name: "采集时间:", id: 0, unit: "" ,data:""},
        { name: "通道数:", id: 1, unit: "个" ,data:""},
        { name: "采样频率:", id: 2, unit: "HZ",data:"" },
        { name: "最低频率:", id: 3, unit: "HZ" ,data:""},
        { name: "最高频率:", id: 4, unit: "HZ" ,data:""},
      ],
      isShowing: false,
      isShower: true,
      list: [1, 2, 3, 4, 5],
      config: true,
      data: [], //当前正在处理的文件
      container: {
        file: "",
      },
      eegId: "",
      chunked: 0, //已经处理的chunk 清空
      showfile: false,
    };
  },
  computed: {
    fileList() {
      return this.$store.state.fileList;
    },
    percentage() {
      if (this.count == 0) {
        return 0;
      } else {
        return Number(((this.chunked / this.count) * 100).toFixed(1));
      }
    },
    count() {
      return this.data.length;
    },
    isShow() {
      if (this.fileList.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    status() {
      if (this.percentage == 100) {
        return "success";
      } 
    },
    loading() {
      if (this.chunked == 0) {
        return false;
      } else {
        return true;
      }
    },
    /*  showfile() {
      
      if (this.fileList.length != 0 && this.loading == false) {
        return true;
      } else {
        return false;
      }
    }, */
  },
  methods: {
    updateShowfile() {
      if (this.fileList.length >= 1) {
        this.showfile = true;
      }
    },
    changeConfig() {
      this.config = !this.config;
    },
    dataInit() {
      this.chunked = 0;
      this.chunked = 0;
    },

    handleFileChange(param) {
      this.container.file = param.file;
      this.handleUpload();
    },

    //生成文件切片list方法
    createFileChunk(file, size = SIZE) {
      const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) });
        cur += size;
      }
      return fileChunkList;
    },
    //上传切片
    async uploadChunks() {
      const counter = this.count;
      const requestList = this.data
        .map(({ chunk, hash, data }) => {
          const formData = new FormData();

          //const json = JSON.stringify(chunk);
          // 将 json 字符串转化为 Blob 对象
          //const blob = new Blob([json], {
          //  type: "application/json",
          // });
          formData.append("chunk", chunk);

          //formData.append("hash",hash);
          //formData.append("filename",this.container.file.name);
          formData.append("eegId", this.eegId);
          formData.append("index", hash);
          formData.append("count", counter);

          return { formData: formData };
        })
        .map(({ formData }) => {
          this.$http
            .post(
              "/orig/user",

              formData,

              {
                "Content-Type": "multipart/form-data;",
              }
            )
            .then((res) => {
              
              if (res.code) {
                this.chunked++;
                if (this.chunked == this.count) {
                  this.$http.get("/orig/info",{
                    params:{
                      eegId:this.eegId
                    }
                  }).then((res)=>{
                    
                    this.cardinfo[0].data=res.data.meas_date.slice(0,-6)
                    this.cardinfo[1].data=res.data.nchan
                    this.cardinfo[2].data=res.data.sfreq
                    this.cardinfo[3].data=res.data.lowpass
                    this.cardinfo[4].data=res.data.highpass
                    console.log(res)
                    this.isShowing = true;
                    this.dataInit();
                  })
                  
                }
              }
            })
            .catch((err) => {
              console.log(err);
            });
        });
      await Promise.all(requestList);
    },

    //启动方法
    async handleUpload() {
      if (this.fileList.length >= 1) {
        this.showfile = false;
      }
      const fileChunkList = this.createFileChunk(this.container.file);
      this.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: index,
      }));
      await this.uploadChunks();
    },
    textSend(params) {
      this.$http
        .put("/orig/user")
        .then((res) => {
          
          this.eegId = res.data; 
          this.$store.state.selectedEEGId = this.eegId; 
          this.container.file = params.file; //切换当前要处理的文件
          this.$store.state.fileList.push(params.file);
          this.handleUpload();
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("录入失败，请检查网络或者文件格式！");
        });
    },
  },
  watch: {
    fileList(newval, oldval) {
      if ((newval = [])) {
        this.isShow = false;
        this.$store.state.fileList = newval;
      } else if (newval != []) {
        this.isShow = true;
        this.$store.state.fileList = newval;
      }
    },
  },
  created() {
    this.dataInit();

    this.$store.state.currentPath = this.$router.currentRoute.name;
    this.updateShowfile();
  },
};
</script>


<style scoped lang="less">
#all {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-upload {
    margin-bottom: 0;
  }

  .el-form {
    border: 1px solid black;
    border-radius: 1%;
  }
  section:nth-child(1) {
    margin-top: 2px;
    margin-bottom: 6%;
    flex: 1;
  }
  section:nth-child(2) {
    & > div {
      margin-bottom: 8px;
      .el-button {
        margin-right: 10px;
      }
      label {
        font-weight: bolder;
        color: green;
      }
    }

    flex: 1;

    .el-card {
      border: 2px solid #84817a;
      border-radius: 3%;
      span {
        margin-bottom: 10px;
        display: inline-block;
        em {
          font-family: "Helvetica Neue", Helvetica, "PingFang SC",
            "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
          font-weight: 400;
        }
      }
    }
  }
  section {
    width: 60%;
  }
}
.el-empty {
  height: 200px;
  position: relative;
  left: 20px;
}
#process {
  position: relative;
  margin-top: 10%;
  span {
    position: relative;
    top: 20px;
    display: block;
  }
}
#fileTable {
  outline: 3px red solid;
  width: 500px;
  padding: 0;
  .el-table {
    width: 100%;
  }
}
</style>
