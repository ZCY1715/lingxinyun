<script>
export default {
  data() {
    return {
      imageurl: '',
      username: "默认",
      isShow: false

    }
  },

  methods: {
    edit() {
      this.isShow = true
    }
  }



  ,
  created() { },

}
</script>

<template>


  <div :class="$style.allMessage">
    <div :class="$style.imageMessage">
      <el-avatar :size="80" :src="imageurl" alt="用户头像" />
    </div>

    <div :class="$style.idMessage">
      <i>{{ "管理员名称:" }}</i>
      <input type="text" v-model="username" :class="{ [$style.editing]: isShow,[$style.beforeEdit]:!isShow }">

    </div>

    <div :class="$style.editButtonBox" v-if="!isShow">
      <i class="iconfont icon-bianji" title="修改名称" @click="edit()"></i>

    </div>

    <div v-if="isShow" :class="$style.buttonBox">
      <el-button type="success" plain round>确认</el-button>
      <el-button type="primary" plain round>取消</el-button>


    </div>
  </div>
</template>

<style module>
.allMessage {
  display: flex;
  flex-direction: row;




}

.imageMessage {

  margin-right: 80px;

}

.idMessage {
  display: flex;

  outline: 1px red solid;
  flex-basis: 300px;
  margin-right: 20px;
  align-items: center;
}

.idMessage>i {
  
  display: block;
  font-style: normal;

}

.idMessage>.beforeEdit {
border: 0;
height: 20px;

}

.idMessage>.beforeEdit:focus {
border: 0;


}

.idMessage>.active {}




.editButtonBox {
  display: flex;
  margin-right: 40px;

}

.editButtonBox>i {
  margin: auto;
  font-size: 2em;



}

.editButtonBox>i:hover {
  cursor: pointer;



}



.buttonBox {
  display: flex;
  align-items: center;

}
</style>