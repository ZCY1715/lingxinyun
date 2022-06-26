<script setup>

const menus = [
  {
    name: "首页",
    index: "/home",
    icon:"iconfont icon-home2"
  },
 /*  {
    name: "主页管理",
    index: "2",
    children: [
      {
        name: "标签管理",
        index: "2-1",
      },
      {
        name: "资讯管理",
        index: "2-2",
      },
      {
        name: "相关链接管理",
        index: "2-3"
      }
    ]
  }, */
  {
    name: "用户管理",
    index: "/user",
    icon:"iconfont icon-yonghu"
  },
  {
    name: "论坛管理",
    index: "/forum",
    icon:"iconfont icon-xiaoxitongzhi"
  },
  {
    name: "文创案例管理",
    index: "/filemanage",
    icon:"iconfont icon-bianji1"
  },
  {
    name: "统计可视化管理",
    index: "/vz",
    icon:"iconfont icon-tiaoxingtu"
  },
  {
    name: "沙具管理",
    index: "/sandbox",
    icon:"iconfont icon-yonghu"
  },
  {
    name: "资金管理",
    index: "/money",
    icon:"iconfont icon-meiyuan"
  },
  {
    name: "每日任务管理",
    index: "/dailytask",
    icon:"iconfont icon-renwu1"
  },
  {
    name: "标签定义",
    index: "/label",
    icon:"iconfont icon-biaoqian"
  },
  {
    name: "浏览页面",
    index: "/broswer",
    icon:"iconfont icon-liulan"
  }
]

</script>

<template>
  <el-menu active-text-color="#efefef" background-color="#1e272e" text-color="#efefef" default-active="1" :router="true"
    :class="$style.sidebar">
    <template v-for="submenu of menus">
      <el-sub-menu :index="submenu.index" v-if="submenu.children" :key="submenu.children">
        <template #title>
          <span>{{ submenu.name }}</span>
        </template>
        <el-menu-item v-for="childMenu of submenu.children" :index="childMenu.index" :key="childMenu.index">
          <span>{{ childMenu.name }}</span>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item v-else :index="submenu.index" :key="submenu.index" >
        <i  :class="submenu.icon" style="font-size:22px;color: #efefef;font-weight: 600;margin-right: 30px;" ></i>
        <span>{{ submenu.name }}</span>
      </el-menu-item>

    </template>
  </el-menu>
</template>

<style module>
.sidebar {
  height: 100vh;
  width: 100%;
  overflow-y:hidden;
}

.sidebar span {
  font-size: 17px;
  font-weight: 500;

}




</style>

<style scoped>
.el-menu-item.is-active {
   background-color: #3498db !important;
   

}
</style>