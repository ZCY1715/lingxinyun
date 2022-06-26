<script setup>

const menus = [
  {
    name: "首页",
    index: "1",
  },
  {
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
  },
  {
    name: "用户管理",
    index: "3",
  },
  {
    name: "论坛管理",
    index: "4",
  },
  {
    name: "文创案例管理",
    index: "5",
  },
  {
    name: "统计可视化管理",
    index: "6",
  },
  {
    name: "沙具管理",
    index: "7",
  },
  {
    name: "资金管理",
    index: "8",
  },
  {
    name: "每日任务管理",
    index: "9",
  },
  {
    name: "标签定义",
    index: "10",
  },
  {
    name: "浏览页面",
    index: "11",
  }
]

</script>

<template>
  <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" default-active="1"
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
      <el-menu-item v-else :index="submenu.index" :key="submenu.index">
        <span>{{ submenu.name }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<style module>
.sidebar {
  height: 100vh;
  width: 200px;
}

.sidebar span {
  font-size: 17px;

}
</style>