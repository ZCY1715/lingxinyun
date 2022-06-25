<<<<<<< HEAD
<script >
import Demo from './components/demo.vue'
import Sider from './components/Sider/SiderBar.vue'

export default {
  components: {
    Sider
  },

=======
<script>
import Header from "./components/Header/index.vue"
import Footer from "./components/Footer/index.vue"
import { setScrollTop } from './utils'

export default {
  components: { Header, Footer },
  watch: {
    // 页面跳转时自动回到顶部
    $route() {
      setScrollTop(0)
    }
  }
>>>>>>> 51fa8af1be1a5194700a7c71d5ba4e3e4bed0352
}
</script>

<template>
<<<<<<< HEAD
  <Sider></Sider>
  <el-main>
    <router-view></router-view>
  </el-main>
  

=======
  <Header />
  <el-main>
    <router-view></router-view>
  </el-main>
  <Footer />
>>>>>>> 51fa8af1be1a5194700a7c71d5ba4e3e4bed0352
</template>

<style>
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Ubuntu", serif;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

#app {
  width: 100%;
  position: absolute;
}

.el-main {
  position: relative;
  top: 60px;
  min-height: calc(100vh - 240px);
}

:root {
  --theme-color: #faa66e;
  --el-color-primary: #faa66e !important;
}

::-webkit-scrollbar {
  width: 3px;
  background: #eee;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 100%;
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

<<<<<<< HEAD
/* 定义全局样式 重置样式*/
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Ubuntu", serif;
  overflow-x: hidden;
  scroll-behavior: smooth;
}


=======
.cutLineY {
  width: 1px;
  height: 100%;
  margin: 0 10px 0 10px;
  background-color: #ddd;
}
>>>>>>> 51fa8af1be1a5194700a7c71d5ba4e3e4bed0352
</style>
