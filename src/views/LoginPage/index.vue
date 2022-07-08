<script>
export default {
  data() {
    return {
      isLoginPage: true,
      isForgetPsw: false,
      panelIndex: 1,
    }
  },
  props: ['hasBlank'],
  methods: {
    toForgetPsw() {
      this.isLoginPage = false
      this.isForgetPsw = true
    },
    switchPanelIndex(index) {

    }
  }
}
</script>

<template>
  <div :class="[$style.container, hasBlank ? $style.hasBlank : '']">
    <div v-if="isLoginPage">
      <!-- header -->
      <!-- panel1 -->
      <div v-if="panelIndex === 1"></div>
      <!-- panel2 -->
      <div v-else-if="panelIndex === 2"></div>
      <!-- panel3 -->
      <div v-else></div>
      登录
      <div @click="">忘记密码</div>

    </div>
    <div v-else-if="isForgetPsw">
      忘记密码页面
    </div>
    <div v-else>
      注册
    </div>
  </div>

</template>

<style module>
.container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

}

.hasBlank {
  background-color: rgba(51, 51, 51, 0.4);
}

.container>div {
  width: 600px;
  height: 600px;
  background-color: red;
}
</style>