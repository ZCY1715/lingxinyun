<script>
import Search from '../../assets/basic/search.svg?vueComponent'
import UserBox from './UserBox.vue'
import MessageBox from './MessageBox.vue'
import LetterBox from './LetterBox.vue'
import { markRaw } from 'vue'
import useStore from '../../stores'
import LoginCard from '../LoginCard.vue'

markRaw(Search)

export default {
  data() {
    return {
      Search: Search,
      searchValue: '',
      // 导航列表项定义
      menuList: [
        {
          name: "游戏",
          path: "/game",
          select: false,
        },
        {
          name: "发现",
          path: "/discover",
          select: false,
        },
        {
          name: "论坛",
          path: "/forum",
          select: false,
        },
        {
          name: "News",
          path: "/news",
          select: false,
        }
      ],
      store: useStore(),
      showLogin: false,
    }
  },
  props: ["hasSearch"],
  components: { UserBox, MessageBox, LetterBox, LoginCard },
  computed: {
    isLogin() {
      return this.store.isLogin
    },

  },
  methods: {
    search() {
      this.$router.push({ name: "SearchPage", query: { q: this.searchValue } })
      this.searchValue = ''
    },
    toRegiste() { },
    toLogin() {
      this.showLogin = true
    }
  },
  watch: {
    $route(newRouter, oldRouter) {
      this.menuList.forEach((menu) => {
        if (menu.path === newRouter.path) {
          menu.select = true
        }
        if (menu.path === oldRouter.path) {
          menu.select = false
        }
      })
    }
  }
}

</script>

<template>
  <LoginCard v-if="showLogin" @closeHandle="() => showLogin = false" />
  <el-header :class="$style.container">
    <div>
      <span :class="$style.logo" @click="() => { $router.push({ name: 'HomePage' }) }">
        聆心云
      </span>
      <div :class="$style.menus" :style="{ '--w': menuList.length }">
        <span v-for="(menu, index) of menuList" :key="index" @click="() => { $router.push(menu.path) }"
          :class="menu.select ? $style.menuSelect : ''">
          {{ menu.name }}
        </span>
      </div>
    </div>
    <div>
      <el-input v-model="searchValue" placeholder="搜索..." :suffix-icon="Search" @keyup.enter="search"
        v-if="hasSearch" />
    </div>
    <div>
      <!-- 导航图标模块添加 -->
      <template v-if="isLogin">
        <UserBox />
        <MessageBox />
        <LetterBox />
      </template>
      <template v-else>
        <span @click="toRegiste">注册</span>
        <span @click="toLogin">登录</span>
      </template>
    </div>
  </el-header>
</template>

<style module>
.container {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
  border-bottom: 2px #eee solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fffd;
  box-shadow: #ccc 1px 1px 1px;
  border-radius: 0 0 5px 5px;
}

.container>div:nth-child(1) {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container>div:nth-child(3) {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.container>div:nth-child(3)>span {
  margin-right: 30px;
  padding: 7px 14px 7px 14px;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  transition: .3s;
  box-shadow: #eee 3px 3px 5px;
}

.container>div:nth-child(3)>span:hover {
  background-color: var(--theme-color);
  color: #fff;
  border: 1px solid #fff;
}

.container>div:nth-child(3)>div {
  margin-right: 20px;
}

.logo {
  min-width: 80px;
  font-size: 24px;
  cursor: default;
}

.menus {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: calc(var(--w) * 80px);
  font-size: 18px;
  cursor: pointer;
}

.menus span {
  padding: 3px 5px 3px 5px;
  border-radius: 5px;
  transition: .2s;
}

.menus span:hover {
  background-color: var(--theme-color);
  color: #fff;
}

.menus .menuSelect {
  background-color: var(--theme-color);
  color: #fff;
}
</style>