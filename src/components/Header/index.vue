<script>
import Search from './search.svg?vueComponent'
import UserBox from './UserBox.vue'
import MessageBox from './MessageBox.vue'
import LetterBox from './LetterBox.vue'
import { markRaw } from 'vue'

markRaw(Search)

export default {
  data() {
    return {
      Search: Search,
      searchValue: '',
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
      ]
    }
  },
  components: { UserBox, MessageBox, LetterBox },
  methods: {
    search() {
      console.log(this.searchValue)
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
  <el-header :class="$style.container">
    <div>
      <span :class="$style.logo" @click="() => { $router.push('/') }">
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
      <el-input class="w-50 m-2" v-model="searchValue" placeholder="搜索..." :suffix-icon="Search"
        @keyup.enter="search" />
    </div>
    <div>
      <UserBox />
      <MessageBox />
      <LetterBox />
    </div>
  </el-header>
</template>

<style module>
.container {
  position: fixed;
  top: 0;
  z-index: 1;
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
  width: 150px;
  justify-content: space-between;
}

.logo {
  min-width: 80px;
  font-size: 24px;
  font-weight: 600;
  cursor: default;
}

.menus {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: calc(var(--w) * 80px);
  font-size: 18px;
  font-weight: bold;
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