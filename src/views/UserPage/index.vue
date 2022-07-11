<script>
import SideBar from '../../components/SideBar.vue'
import api from '../../axios'
import useStore from '../../stores'

export default {
  data() {
    return {
      uid: '',
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
      store: useStore(),
    }
  },
  components: { SideBar },
  created() {
    this.uid = this.$route.params.uid
    if (this.isOwn) {
      this.userInfo = this.store.userInfo
    } else {
      // this.uid 请求他人的信息
      // api.getUserInfo(this.uid)
    }
  },
  computed: {
    isOwn() {
      return this.store.uid === this.uid
    },
    showNavs() {
      return this.isOwn ? [...this.navs] : [this.navs[0]]
    },
    bannerImg() {
      return this.userInfo.bannerImg
    }
  },
  mounted() {
    const height = this.$refs.siderBarRef.offsetHeight
    if (height > this.$refs.mainRef.offsetHeight) {
      this.$refs.mainRef.style.height = height + 'px'
    }
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
    },
  }
}

</script>

<template>
  <div :class="$style.banner">
    <img :src="bannerImg" v-if="Boolean(bannerImg)">
  </div>
  <div :class="$style.siderBar" ref="siderBarRef">
    <SideBar :userInfo="userInfo" />
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
  box-shadow: 0 -5px 5px 5px #fff inset;
}

.banner img {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 5px 5px #fff inset;
  object-fit: cover;
}

.siderBar {
  position: absolute;
  top: 50px;
  width: 300px;
}

.content {
  position: relative;
  top: 50px;
  left: 350px;
  width: calc(100vw - 400px);
  margin-bottom: 200px;
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