<script>
import Pen from '../../assets/svgs/pen.svg?vueComponent'
import Bulb from '../../assets/svgs/bulb.svg?vueComponent'
import Address from '../../assets/svgs/address.svg?vueComponent'
import Wechat from '../../assets/links/wechat.svg?vueComponent'
import useStore from '../../stores'
const store = useStore()


export default {
  data() {
    return {
      uid: '',
      bannerImg: '',
      userInfo: {},
      // 二级导航栏定义
      navs: [
        {
          name: '作品',
          pathName: 'UserPage',
          active: false,
          type: '沙盘',
          types: ['沙盘', '沙具']
        },
        {
          name: '草稿',
          pathName: 'Drafts',
          active: false,
        },
        {
          name: '收藏',
          pathName: 'Collections',
          active: false,
        },
        {
          name: '论坛',
          pathName: 'forum',
          active: false,
        },
        {
          name: '任务',
          pathName: 'Tasks',
          active: false,
        },
        {
          name: '见解',
          pathName: 'Analysis',
          active: false,
        },
        {
          name: 'NFT',
          pathName: 'NFT',
          active: false,
        }
      ],
    }
  },
  components: { Address, Pen, Bulb, Wechat },
  created() {
    this.uid = this.$route.params.uid
    if (this.isOwn) {
      this.userInfo = store.userInfo
    } else {
      // 请求他人的信息
    }
  },
  computed: {
    isOwn() {
      return store.userInfo.uid === this.uid
    },
    accountLinks() {
      // 账户链接信息
      return this.userInfo.accountLinks
    },
    customShow() {
      // 自定义展示内容
      return this.userInfo.customContent
    },
    showNavs() {
      return this.isOwn ? [...this.navs] : [this.navs[0]]
    }
  },
  mounted() {
    const height = this.$refs.siderBarRef.offsetHeight
    this.$refs.mainRef.style.top = -(height - 30) + 'px'
    const index = this.navs.findIndex(item => this.$route.name === item.pathName)
    this.navs[Math.max(0, index)].active = true
  },
  watch: {
    $route(now) {
      this.navs.forEach(item => item.active = false)
      const newIndex = this.navs.findIndex(item => now.name === item.pathName)
      if (~newIndex) {
        this.navs[newIndex].active = true
      }
    }
  },
  methods: {
    switchRoute(nav) {
      if (nav.pathName === 'UserPage') {
        this.$router.push({ name: 'UserPage', params: { type: nav.type }, replace: true })
      } else {
        this.$router.push({ name: nav.pathName, replace: true })
      }
    },
    chooseWorkType(type) {
      this.navs[0].type = type
      this.$router.push({ name: 'UserPage', params: { type }, replace: true })
    }
  }
}

</script>

<template>
  <div :class="$style.banner">
    <img :src="bannerImg" v-if="Boolean(bannerImg)">
    <span>添加横幅图像</span>
    <span>最佳尺寸为 1920*400px </span>
  </div>
  <div :class="$style.siderBar" ref="siderBarRef">
    <!-- 头像 / 昵称 / 地址 通用 -->
    <div>
      <img :src="userInfo.avatarURL">
      <span>{{ userInfo.nickname }}</span>
      <span>
        <span class="svgContainer">
          <Address />
        </span>
        {{ userInfo.address ? userInfo.address : '未知' }}
      </span>
    </div>
    <div v-if="isOwn">
      <div>
        <span class="svgContainer">
          <Pen />
        </span>
        编辑您的个人资料
      </div>
      <div>
        <span class="svgContainer">
          <Bulb />
        </span>
        构建您的沙盘游戏
      </div>
    </div>
    <div v-else>
      <div>关注</div>
      <div>消息</div>
    </div>
    <div>
      <div>
        <span>作品查看次数</span>
        <span>{{ userInfo.views }}</span>
      </div>
      <div>
        <span>好评</span>
        <span>{{ userInfo.likes }}</span>
      </div>
      <div>
        <span>关注</span>
        <span>{{ userInfo.followers }}</span>
      </div>
    </div>
    <div v-if="isOwn">
      <div>账户链接</div>
      <div :class="$style.accountLinks">
        <div v-for="link of accountLinks" :key="link.id">
          <span class="svgContainer">
            <Wechat v-if="link.name === 'wechat'" />
          </span>
          {{ link.description }}
        </div>
      </div>
    </div>
    <div v-for="item of customShow" :key="item.title">
      <div>{{ item.title }}</div>
      <div>{{ item.content }}</div>
    </div>
  </div>
  <div :class="$style.content" ref="mainRef">
    <div :class="$style.nav">
      <div>
        <span v-for="(nav, index) of showNavs" :key="index" @click="() => switchRoute(nav)"
          :class="nav.active ? $style.activeNav : ''">
          {{ nav.name }}
        </span>
      </div>
      <div v-if="this.navs[0].active">
        <div class="cutLineY"></div>
        <span v-for="(type, index) of navs[0].types" :key="index" @click="() => chooseWorkType(type)"
          :class="navs[0].type === type ? $style.activeType : ''">
          {{ type }}
        </span>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style module>
.banner {
  width: 100vw;
  height: 300px;
  position: relative;
  margin: -20px 0 0 -20px;
  box-sizing: border-box;
  background: linear-gradient(to bottom, #1C1C1C, #828282);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
}

.banner img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.siderBar {
  position: relative;
  width: 300px;
  min-height: 600px;
  top: -250px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: #0003 3px 3px 15px;
  padding-bottom: 20px;
}

.siderBar>:first-child {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.siderBar>:first-child>:nth-child(1) {
  width: 95px;
  height: 95px;
  border-radius: 100%;
  margin-top: 30px;
}

.siderBar>:first-child>:nth-child(2) {
  font-size: 22px;
  margin-top: 10px;
}

.siderBar>:first-child>:nth-child(3) {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: .8;
  width: 95px;
  height: 25px;
  margin-top: 10px;
}

.siderBar>:first-child>:nth-child(3)>span {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
}

.siderBar>:nth-child(2) {
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.siderBar>:nth-child(2)>div {
  margin-top: 10px;
  width: 72%;
  height: 25px;
  padding: 5px 10px 5px 10px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 14px;
  color: #666;
  transition: .3s;
  cursor: pointer;
}

.siderBar>:nth-child(2)>div:hover {
  background-color: var(--theme-color);
  color: #fff;
}

.siderBar>:nth-child(2)>div:first-child>span {
  width: 16px;
  height: 16px;
  padding-right: 5px;
}

.siderBar>:nth-child(2)>div:nth-child(2)>span {
  width: 20px;
  height: 20px;
  padding-right: 5px;
}

.siderBar>:nth-child(2) svg {
  fill: #000;
  transition: .3s;
}

.siderBar>:nth-child(2)>div:hover svg {
  fill: #fff;
}

.siderBar>:nth-child(3) {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.siderBar>:nth-child(3)>div {
  display: flex;
  justify-content: space-between;
  margin: 5px 0 5px 0;
  padding: 3px 5px 3px 5px;
  font-weight: bold;
  font-size: 16px;
  transition: .3s;
  color: #555;
  border-radius: 5px;
}

.siderBar>:nth-child(3)>div:hover {
  background-color: #eee;
}

.siderBar>:nth-of-type(n + 4) {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
}

.siderBar>:nth-of-type(n + 4)>:first-child {
  display: flex;
  justify-content: flex-start;
  margin-left: 30px;
  font-size: 12px;
  color: #777;
}

.siderBar>:nth-of-type(n + 4)>:nth-child(2) {
  margin: 10px 0 0 30px;
  padding-right: 20px;
  text-indent: calc(2em + 2px);
  font-size: 14px;
}

.accountLinks {
  width: 76%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.accountLinks>div {
  width: 100%;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.accountLinks span {
  width: 20px;
  height: 20px;
  margin-left: -30px;
  margin-right: 5px;
}

.content {
  position: relative;
  left: 350px;
  min-height: 550px;
  width: calc(100vw - 400px);
}

.content>:first-child {
  display: flex;
  align-items: center;
  height: 40px;
}

.content>:nth-child(2) {
  margin-top: 30px;
}

.nav>:first-child {
  display: flex;
  align-items: center;
}

.nav>:first-child>span {
  margin-right: 20px;
  padding: 8px 16px 8px 16px;
  transition: .3s;
  border-radius: 20px;
  cursor: pointer;
  color: #666;
  font-size: 18px;
}

.nav>:first-child>span:hover {
  background-color: var(--theme-color);
  color: #fff;
}

.nav>:first-child>.activeNav {
  background-color: var(--theme-color);
  color: #fff;
}

.nav>:nth-child(2) {
  display: flex;
  height: 20px;
}

.nav>:nth-child(2)>:not(:first-child) {
  padding: 5px 10px 5px 10px;
  margin: 0 5px 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 16px;
  transition: .3s;
  cursor: pointer;
}

.activeType {
  color: var(--theme-color) !important;
}
</style>