<script >
import Demo from './components/demo.vue'
import Sider from './components/Sider/SiderBar.vue'

export default {
  components: {
    Sider
  },

}
</script>

<template>
  <Sider></Sider>
  <el-main>
    <router-view></router-view>
  </el-main>
  

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
  scroll-behavior: smooth;
}


</style>
