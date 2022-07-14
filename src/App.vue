<script >
import Demo from './components/demo.vue'
import Sider from './components/Sider/SideBar.vue'

export default {
  components: {
    Sider
  },

}
</script>

<template>
<el-container>
<el-aside><Sider></Sider></el-aside>
  
  <el-main>
    <router-view></router-view>
  </el-main>

</el-container>

  

</template>

<style>


/* 定义全局样式 重置样式*/
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Ubuntu", serif;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

:root {
  --el-color-primary: rgb(238, 184, 48) !important;
}

.el-aside {
  overflow-y:hidden;

}


.iconfont {
  font-size: 17px;
  font-weight: 600;
  

}

</style>
