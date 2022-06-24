<script>
import Letter from './letter.svg?vueComponent'
import Bell from './bell.svg?vueComponent'

export default {
  data() {
    return {
      LogoName: "聆心云",
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
      avatarURL: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-62793fd8-63a8-4d63-9f21-0986ead6de14/f7d2b827-537c-4636-a4b7-a8866f0f7af3.jpg",
      haveMessage: true,
      LetterNum: 8,
    }
  },
  components: { Letter, Bell },
  methods: {
    enterMessagePage() {

    },
    enterLetterPage() {

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
        {{ LogoName }}
      </span>
      <div :class="$style.menus" :style="{ '--w': menuList.length }">
        <span v-for="(menu, index) of menuList" :key="index" @click="() => { $router.push(menu.path) }"
          :class="menu.select ? $style.menuSelect : ''">
          {{ menu.name }}
        </span>
      </div>
    </div>
    <div>
      <div :class="$style.avatar">
        <img :src="avatarURL" />
      </div>
      <div :class="['svgContainer', 'svgContainerHover', $style.bell]" @click="enterMessagePage">
        <div v-if="haveMessage" :class="$style.showMessage"></div>
        <Bell />
      </div>
      <div :class="['svgContainer', 'svgContainerHover', $style.letter]" @click="enterLetterPage">
        <div v-if="LetterNum && LetterNum !== 0" :class="$style.showLetter">
          <span>{{ LetterNum > 9 ? "•••" : LetterNum }}</span>
        </div>
        <Letter />
      </div>
    </div>
  </el-header>
</template>

<style module>
.container {
  position: fixed;
  z-index: 1;
  width: 100vw;
  border-bottom: 2px #eee solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.container>div:nth-child(1) {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container>div:nth-child(2) {
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
  transition: .5s;
}

.menus span:hover {
  background-color: rgba(255, 166, 0, 0.7);
}

.menus .menuSelect {
  background-color: rgba(255, 166, 0, 0.7);
}

.avatar {
  height: 40px;
  width: 40px;
}

.avatar img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 1px #eee solid;
  transition: 1s;
  cursor: pointer;
}

.avatar img:hover {
  transform: rotate(360deg);
}

.letter {
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
}

.bell {
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
}

.showMessage {
  position: absolute;
  z-index: 2;
  right: 0;
  top: -5px;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
}

.showLetter {
  position: absolute;
  z-index: 2;
  right: -5px;
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 13px;
}
</style>