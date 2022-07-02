<script>
import useStore from '../../stores'
import Address from '../../assets/svgs/address.svg?vueComponent'
import Pen from '../../assets/svgs/pen.svg?vueComponent'
import Bulb from '../../assets/svgs/bulb.svg?vueComponent'

export default {
  data() {
    return {
      bannerImg: '',
      userInfo: {},
    }
  },
  components: { Address, Pen, Bulb },
  created() {
    const store = useStore()
    this.userInfo = store.userInfo
  }
}

</script>

<template>
  <div :class="$style.banner">
    <img :src="bannerImg" v-if="Boolean(bannerImg)">
    <span>添加横幅图像</span>
    <span>最佳尺寸为 1920*400px </span>
  </div>
  <div :class="$style.siderBar">
    <img :src="userInfo.avatarURL">
    <span>{{ userInfo.nickname }}</span>
    <span>
      <span class="svgContainer">
        <Address />
      </span>
      {{ userInfo.address }}
    </span>
    <div>
      <span class="svgContainer">
        <Pen />
      </span>
      编辑您的个人资料
    </div>
    <div>
      <span class="svgContainer">
        <Bulb />
      </span>
      构建您的沙盘游戏
    </div>
    <div>
      <div>
        <span>作品查看次数</span>
        <span>{{ userInfo.views }}</span>
      </div>
      <div>
        <span>好评</span>
        <span>{{ userInfo.likes }}</span>
      </div>
      <div>
        <span>关注</span>
        <span>{{ userInfo.followers }}</span>
      </div>
    </div>
  </div>
</template>

<style module>
.banner {
  width: 100vw;
  height: 400px;
  position: relative;
  margin: -20px 0 0 -20px;
  box-sizing: border-box;
  background: linear-gradient(to bottom, #1C1C1C, #828282);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
}

.banner img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.siderBar {
  position: fixed;
  width: 300px;
  height: 600px;
  top: 100px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.siderBar>:nth-child(1) {
  width: 95px;
  height: 95px;
  border-radius: 100%;
  margin-top: 30px;
}

.siderBar>:nth-child(2) {
  width: 95px;
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  letter-spacing: 10px;
  text-align: center;
}

.siderBar>:nth-child(3) {
  display: flex;
  align-items: center;
  font-weight: bold;
  opacity: .8;
  width: 95px;
  height: 25px;
  margin-top: 10px;
}

.siderBar>:nth-child(3)>span {
  width: 25px;
  display: flex;
  justify-content: center;
}

.siderBar>:nth-child(4) {
  margin-top: 10px;
  width: 80%;
  height: 25px;
  padding: 5px 10px 5px 10px;
  background-color: var(--theme-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 14px;
  color: #fff;
}

.siderBar>:nth-child(4)>span {
  width: 16px;
  height: 16px;
  padding-right: 5px;
}

.siderBar>:nth-child(4)>span svg {
  fill: #fff;
}

.siderBar>:nth-child(5) {
  margin-top: 5px;
  width: 80%;
  height: 25px;
  padding: 5px 10px 5px 10px;
  background-color: #eeea;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 14px;
  border: 1px solid #eee;
}

.siderBar>:nth-child(5)>span {
  width: 20px;
  height: 20px;
  padding-right: 5px;
}

.siderBar>:nth-child(6) {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.siderBar>:nth-child(6)>div {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 5px 0 5px 0;
  font-weight: bold;
  font-size: 16px;
}
</style>