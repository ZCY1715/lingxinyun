<script>
import Header from "./components/Header/index.vue"
import Footer from "./components/Footer/index.vue"
import { setScrollTop } from './utils'

export default {
  data() {
    return {
      noHeaderPages: ['LoginPage', 'CreateGame', 'ReviewGame'],
      noFooterPages: ['LoginPage', 'CreateGame', 'UserPage', 'ModifyUserInfoPage', 'ChatPage', 'DetailPage', 'ReviewGame'],
      noSearchPage: ['SearchPage'],
      currentRoute: '',

    }
  },
  components: { Header, Footer },
  computed: {
    hasHeader() {
      return !this.noHeaderPages.includes(this.currentRoute)
    },
    hasFooter() {
      return !this.noFooterPages.includes(this.currentRoute)
    },
    hasSearch() {
      return !this.noSearchPage.includes(this.currentRoute)
    }
  },
  watch: {
    // 路由跳转后滑至顶部
    $route(to) {
      this.currentRoute = to.name
      setScrollTop(0)
    }
  }
}
</script>

<template>
  <template v-if="hasHeader">
    <Header :has-search="hasSearch" />
  </template>

  <el-main>
    <router-view></router-view>
  </el-main>
  <template v-if="hasFooter">
    <Footer />
  </template>
</template>

<style>
* {
  font-family: "Ubuntu", serif !important;
  font-weight: bold !important;
}

html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;
  position: relative;
}

a,
a:link,
a:visited,
a:hover,
a:active,
a:focus {
  color: inherit;
  text-decoration: none;
}

.el-main {
  position: relative;
  top: 60px;
  min-height: 100vh;
  overflow: hidden !important;
  margin-bottom: 100px;
}

:root {
  --theme-color: #F4AF43;
  --el-color-primary: #F4AF43 !important;
  --a: red;
}

::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  background: #eee;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #aaa;
}

svg {
  width: inherit;
  height: inherit;
  opacity: .7;
}

textarea {
  resize: none !important;
}

textarea::-webkit-scrollbar {
  display: none;
}

.cutLineX {
  height: 1px;
  width: 100%;
  margin: 10px 0 10px 0;
  background-color: #ddd;
}

.cutLineY {
  width: 1px;
  height: 100%;
  margin: 0 10px 0 10px;
  background-color: #ddd;
}
</style>
