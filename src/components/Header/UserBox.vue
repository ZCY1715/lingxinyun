<script>
import useStore from '../../stores'

export default {
  data() {
    return {
      userInfo: null
    }
  },
  created() {
    const store = useStore()
    this.userInfo = store.userInfo
  }
}
</script>

<template>
  <el-popover placement="bottom-start" :width="300" trigger="hover">
    <template #reference>
      <div :class="$style.avatar" @click="() => { $router.push({ name: 'UserPage' }) }">
        <img :src="userInfo.avatarURL" />
      </div>
    </template>
    <div :class="$style.popoverContainer">
      <div :class="$style.userInfo">
        <div>
          <img :src="userInfo.avatarURL">
        </div>
        <div>
          <span><strong>{{ userInfo.nickname }}</strong></span>
          <span>{{ userInfo.email }}</span>
          <span>管理聆心云ID</span>
        </div>
      </div>
      <div class="cutLineX"></div>
      <div :class="$style.moreOption">
        <div>聆心云个人资料</div>
        <div>设置</div>
        <div>帮助</div>
      </div>
      <div class="cutLineX"></div>
      <div>注销</div>
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
}

.moreOption div,
.popoverContainer>div:last-child {
  margin: 10px 0 10px 0;
  padding: 3px 0 3px 10px;
  transition: .3s;
  border-radius: 3px;
  font-weight: bold;
  opacity: .9;
}

.moreOption div:hover,
.popoverContainer>div:last-child:hover {
  background-color: #eee;
}
</style>