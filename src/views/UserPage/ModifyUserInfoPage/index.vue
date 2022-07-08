<script>
import useStore from "../../../stores"
import Upload from '../../../assets/svgs/upload2.svg?vueComponent'
import { uploader, clone, imgFileToBase64 } from '../../../utils'

export default {
  data() {
    return {
      menus: [
        {
          title: '基本信息',
          toId: 'baseInfo'
        },
        {
          title: '账户连接',
          toId: 'accountLink'
        },
        {
          title: '关于我',
          toId: 'about',
        },
        {
          title: '工作经历',
          toId: 'job',
        },
        {
          title: '自定义链接',
          toId: 'ownLink',
        }, {
          title: '自定义内容',
          toId: 'ownContent'
        }
      ],
      selectMenuIndex: 0,
      store: useStore(),
      userInfo: {},
    }
  },
  components: { Upload },
  methods: {
    switchScrollView(id, index) {
      this.selectMenuIndex = index
      const el = document.getElementById(id)
      el && el.scrollIntoView({ block: 'center' })
    }
  },
  computed: {
    bannerImg() {
      return this.userInfo.bannerImg || this.store.userInfo.bannerImg
    },
    avatarURL() {
      return this.userInfo.avatarURL || this.store.userInfo.avatarURL
    }
  },
  created() {
    this.userInfo = clone(this.store.userInfo)
  },
  mounted() {
    uploader(this.$refs.uploadBanner, (file) => {
      imgFileToBase64(file, (base64) => {
        this.userInfo.bannerImg = base64
      })
    })
    uploader(this.$refs.uploadAvatar, (file) => {
      imgFileToBase64(file, (base64) => {
        this.userInfo.avatarURL = base64
      })
    })
  }

}

</script>

<template>
  <div :class="$style.control">
    <span @click="() => $router.go(-1)">返回个人资料</span>
    <span>保存修改</span>
  </div>
  <div :class="$style.container">
    <div>
      <div :class="$style.sideBar">
        <div v-for="(item, index) of menus" :key="item.toId" @click="() => switchScrollView(item.toId, index)">
          <span :class="index === selectMenuIndex ? $style.activeMenu : ''">{{ item.title }}</span>
        </div>
      </div>
      <div :class="$style.banner">
        <img :src="bannerImg" v-if="bannerImg" />
        <span>添加横幅图像</span>
        <span>最佳尺寸 3200*400px</span>
      </div>
      <div :class="$style.uploadBanner">
        <span ref="uploadBanner">
          <span class="svgContainer">
            <Upload />
          </span>
          上传图片
        </span>
      </div>
      <div :class="$style.content">
        <div id="baseInfo">
          <div>基本信息</div>
          <div :class="$style.baseInfo">
            <div>
              <img :src="avatarURL">
              <span ref="uploadAvatar">
                <span class="svgContainer">
                  <Upload />
                </span>
                替换
              </span>
            </div>
            <div class="cutLineY"></div>
            <div></div>
          </div>
        </div>
        <div id="accountLink">
          <div>账户连接</div>
          <div></div>
        </div>
        <div id="about">
          <div>关于我</div>
          <div></div>
        </div>
        <div id="job">
          <div>工作经历</div>
          <div></div>
        </div>
        <div id="ownLink">
          <div>自定义链接</div>
          <div></div>
        </div>
        <div id="ownContent">
          <div>自定义内容</div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.control {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control span {
  padding: 10px 20px 10px 20px;
  color: #fff;
  border-radius: 20px;
  background-color: var(--theme-color);
  transition: .3s;
  cursor: pointer;
  margin: 0 5px 0 5px;
}

.control span:hover {
  box-shadow: #ccc 5px 5px 5px;
}

.container {
  position: relative;
  margin-top: 15px;
  left: 0;
  top: 0;
  background-color: #eee9;
}

.banner {
  height: 350px;
  position: relative;
  background: linear-gradient(to bottom, #1c1c1c, #828282);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #fff;
  box-shadow: 0 0 5px 5px #fff inset;
}

.banner img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 5px 5px #fff inset;
}

.uploadBanner {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 100px;
  margin-top: 20px;
  padding: 5px 10px 5px 10px;
  color: var(--theme-color);
}

.uploadBanner svg {
  fill: var(--theme-color);
}

.uploadBanner>span {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.uploadBanner>span>span {
  width: 25px;
  height: 25px;
}

.sideBar {
  position: Fixed;
  z-index: 1;
  top: 200px;
  left: 200px;
  width: 300px;
  border: 1.5px solid #ddd;
  background-color: #fff;
}

.sideBar>div {
  height: 40px;
  border-top: 1.5px solid #ddd;
  position: relative;
}

.sideBar>div:first-child {
  border-top: none !important;
}

.sideBar>div>span {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: #666;
  font-size: 17px;
  transition: .3s;
}

.sideBar>div>span::before {
  content: "";
  position: absolute;
  height: 42px;
  width: 2px;
  background-color: none;
  top: -2px;
  left: -2px;
  transition: .3s;
}

.activeMenu {
  color: var(--theme-color) !important;
}

.activeMenu::before {
  content: "";
  position: absolute;
  height: 42px;
  width: 2px;
  background-color: var(--theme-color);
  top: -2px;
  left: -2px;
}

.content {
  position: relative;
  padding-top: 20px;
  padding-bottom: 150px;
  left: 530px;
  width: calc(100vw - 800px);
  min-width: 750px;
}

.content>div {
  margin-bottom: 100px;
  background-color: #fff;
  border: 1.5px solid #ddd;
  padding: 30px;
  display: flex;
  flex-direction: column;
}

.content>div>:first-child {
  margin-bottom: 10px;
  color: #666;
}

.baseInfo {
  display: flex;
  height: 300px;
}

.baseInfo>:first-child {
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.baseInfo>:first-child>img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.baseInfo>:first-child>span {
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: var(--theme-color);
  margin-left: -50px;
  cursor: pointer;
}

.baseInfo>:first-child>span>span {
  width: 20px;
  height: 20px;
}

.baseInfo>:first-child svg {
  fill: var(--theme-color);
}
</style>