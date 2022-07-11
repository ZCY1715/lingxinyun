<script>
import useStore from '../../stores'

export default {
  data() {
    return {
      store: useStore(),
    }
  },
  computed: {
    uid() {
      return this.store.uid
    },
    avatarURL() {
      return this.store?.userInfo?.avatarURL
    },
    nickname() {
      return this.store?.userInfo?.nickname || '用户' + this.uid
    },
    email() {
      return this.store?.userInfo?.email
    }
  },
  methods: {
    // 管理聆心云ID
    manageAccount() {

    },
    // 前往设置页
    toSetupPage() { },
    // 前往帮助页
    toHelpPage() { },
    // 注销登录
    logOut() {

    }
  }
}
</script>

<template>
  <el-popover placement="bottom-start" :width="300" trigger="hover">
    <template #reference>
      <div :class="$style.avatar" @click="() => $router.push({ name: 'UserPage', params: { uid } })">
        <img :src="avatarURL" />
      </div>
    </template>
    <div :class="$style.popoverContainer">
      <div :class="$style.userInfo">
        <div>
          <img :src="avatarURL" @click="() => $router.push({ name: 'UserPage', params: { uid } })">
        </div>
        <div>
          <span><strong>{{ nickname }}</strong></span>
          <span v-show="email">{{ email }}</span>
          <span @click="manageAccount">管理聆心云ID</span>
        </div>
      </div>
      <div class="cutLineX"></div>
      <div :class="$style.moreOption">
        <div @click="() => $router.push({ name: 'ModifyUserInfoPage' })">聆心云个人资料</div>
        <div @click="toSetupPage">设置</div>
        <div @click="toHelpPage">帮助</div>
      </div>
      <div class="cutLineX"></div>
      <div @click="logOut">注销</div>
    </div>
  </el-popover>
</template>

<style module>
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

.popoverContainer {
  display: flex;
  flex-direction: column;
}

.userInfo {
  display: flex;
}

.userInfo>div:nth-child(1) {
  width: 67px;
  height: 67px;
}

.userInfo>div:nth-child(1) img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
}


.userInfo>div:nth-child(2) {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.userInfo span:nth-child(1) {
  font-size: 18px;
}

.userInfo span:nth-child(3) {
  margin-top: 10px;
  text-decoration: underline;
  cursor: pointer;
}

.moreOption div,
.popoverContainer>div:last-child {
  margin: 10px 0 10px 0;
  padding: 3px 0 3px 10px;
  transition: .3s;
  border-radius: 3px;
  opacity: .9;
  cursor: pointer;
}

.moreOption div:hover,
.popoverContainer>div:last-child:hover {
  background-color: #eee;
}
</style>