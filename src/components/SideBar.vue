<script>
import Pen from '../assets/svgs/pen.svg?vueComponent'
import Bulb from '../assets/svgs/bulb.svg?vueComponent'
import Address from '../assets/svgs/address.svg?vueComponent'
import Wechat from '../assets/links/wechat.svg?vueComponent'
import { addressMerge } from '../utils'
import useStore from '../stores'
const store = useStore()

export default {
  props: ['userInfo'],
  components: { Address, Pen, Bulb, Wechat },
  computed: {
    isOwn() {
      return this.userInfo.uid === store.userInfo.uid
    },
    accountLinks() {
      // 账户链接信息
      return this.userInfo.accountLinks
    },
    customShow() {
      // 自定义展示内容
      return this.userInfo.customContent
    },
    address() {
      const { province, city } = this.userInfo.address
      return addressMerge(province, city)
    }
  },
  methods: {
    toModifyUserInfoPage() {
      this.$router.push({ name: "ModifyUserInfoPage" })
    }
  }
}
</script>

<template>
  <div :class="$style.siderBar">
    <!-- 头像 / 昵称 / 地址 通用 -->
    <div>
      <img :src="userInfo.avatarURL">
      <span>{{ userInfo.nickname }}</span>
      <span>
        <span class="svgContainer">
          <Address />
        </span>
        {{ address }}
      </span>
    </div>
    <!-- 分角色不同功能按键 -->
    <div v-if="isOwn">
      <div @click="toModifyUserInfoPage">
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
    </div>
    <div v-else>
      <div>关注</div>
      <div>消息</div>
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
    <div v-if="isOwn">
      <div>账户链接</div>
      <div :class="$style.accountLinks">
        <div v-for="link of accountLinks" :key="link.id">
          <span class="svgContainer">
            <Wechat v-if="link.name === 'wechat'" />
          </span>
          {{ link.description }}
        </div>
      </div>
    </div>
    <div v-for="item of customShow" :key="item.title">
      <div>{{ item.title }}</div>
      <div>{{ item.content }}</div>
    </div>
  </div>

</template>

<style module>
.siderBar {
  width: 300px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: #0003 3px 3px 15px;
  padding-bottom: 20px;
}

.siderBar>:first-child {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.siderBar>:first-child>:nth-child(1) {
  width: 95px;
  height: 95px;
  border-radius: 100%;
  margin-top: 30px;
}

.siderBar>:first-child>:nth-child(2) {
  font-size: 22px;
  margin-top: 10px;
}

.siderBar>:first-child>:nth-child(3) {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: .8;
  /* width: 95px; */
  height: 25px;
  margin-top: 10px;
}

.siderBar>:first-child>:nth-child(3)>span {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
}

.siderBar>:nth-child(2) {
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.siderBar>:nth-child(2)>div {
  margin-top: 10px;
  width: 72%;
  height: 25px;
  padding: 5px 10px 5px 10px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 14px;
  color: #666;
  transition: .3s;
  cursor: pointer;
}

.siderBar>:nth-child(2)>div:hover {
  background-color: var(--theme-color);
  color: #fff;
}

.siderBar>:nth-child(2)>div:first-child>span {
  width: 16px;
  height: 16px;
  padding-right: 5px;
}

.siderBar>:nth-child(2)>div:nth-child(2)>span {
  width: 20px;
  height: 20px;
  padding-right: 5px;
}

.siderBar>:nth-child(2) svg {
  fill: #000;
  transition: .3s;
}

.siderBar>:nth-child(2)>div:hover svg {
  fill: #fff;
}

.siderBar>:nth-child(3) {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.siderBar>:nth-child(3)>div {
  display: flex;
  justify-content: space-between;
  margin: 5px 0 5px 0;
  padding: 3px 5px 3px 5px;
  font-weight: bold;
  font-size: 16px;
  transition: .3s;
  color: #555;
  border-radius: 5px;
}

.siderBar>:nth-child(3)>div:hover {
  background-color: #eee;
}

.siderBar>:nth-of-type(n + 4) {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
}

.siderBar>:nth-of-type(n + 4)>:first-child {
  display: flex;
  justify-content: flex-start;
  margin-left: 30px;
  font-size: 12px;
  color: #777;
}

.siderBar>:nth-of-type(n + 4)>:nth-child(2) {
  margin: 10px 0 0 30px;
  padding-right: 20px;
  text-indent: calc(2em + 2px);
  font-size: 14px;
}

.accountLinks {
  width: 76%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.accountLinks>div {
  width: 100%;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.accountLinks span {
  width: 20px;
  height: 20px;
  margin-left: -30px;
  margin-right: 5px;
}
</style>