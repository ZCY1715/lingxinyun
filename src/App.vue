<script>
import Header from "./components/Header/index.vue"
import Footer from "./components/Footer/index.vue"
import { setScrollTop } from './utils'

export default {
  data() {
    return {
      noHeaderPages: ['/login'],
      noFooterPages: ['/login'],
      noSearchPage: ['/search'],
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
    $route(to) {
      this.currentRoute = to.path
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
  font-family: "Ubuntu", serif;
  font-weight: bold;
}

html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;
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
  margin-bottom: 100px;
  overflow: hidden !important;
}

:root {
  --theme-color: #F4AF43;
  --el-color-primary: #F4AF43 !important;
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

@keyframes Swing {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(30deg);
  }

  75% {
    transform: rotate(-30deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.svgContainer svg {
  width: inherit;
  height: inherit;
  opacity: .7;
}

.svgContainerHover svg {
  transition: .3s;
}

.svgContainerHover svg:hover {
  fill: var(--theme-color);
}

.svgContainerHover:hover {
  animation: Swing .8s;
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
