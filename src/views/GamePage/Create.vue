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
</style>