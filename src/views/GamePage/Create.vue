<script>
import useStore from "../../stores"

export default {
  data() {
    return {
      store: useStore()
    }
  },
  computed: {
    URL() {
      return `https://lingxinyun.cn/sp/webgl/sandplayGameProcess/index.html?appId=sp_platfrom_sdu&userName=${this.store.userInfo.uid}`
    }
  }
}

</script>

<template>
  <div :class="$style.container">
    <iframe :src="URL" frameborder="0"></iframe>
    <span @click="() => $router.go(-1)">返回</span>
  </div>
</template>

<style module>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.container iframe {
  width: 100%;
  height: 100%;
}

.container span {
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--theme-color);
  font-size: 22px;
  border-radius: 50%;
  box-shadow: #444 0 0 10px;
  cursor: pointer;
}
</style>