<script>

export default {
  data() {
    return {
      selectList: [],
      LetterList: [],
      followList: [],
      selectFromFollow: false,
      writeTo: null,
      isSidebarLoading: true,
      isMainLoading: false,
      newLetter: '',
    }
  },
  computed: {
    canSend() {
      return this.newLetter.length !== 0
    }
  },
  created() {
    const isWrite = this.$route.params.isWrite
    this.selectFromFollow = isWrite !== undefined ? isWrite : false
    const writeTo = this.$route.params.writeTo
    if (writeTo) {
      this.writeTo = writeTo
    }
  },
  methods: {
    async getLetterList() {

    },
    async getFollowers() {

    },
    async writeToFollowHandle() {
      this.selectFromFollow = true
      this.isSidebarLoading = true
      await this.getFollowers()
      this.isSidebarLoading = false
    },
    sendLetter() {
      if (!this.canSend) return
      // 发送信息
    }
  },
  async mounted() {
    await this.getLetterList()
    this.isSidebarLoading = false
  }

}

</script>

<template>
  <div :class="$style.container">
    <div>
      <div :class="$style.sidebar">
        <div v-if="selectFromFollow" :class="[$style.selectFromFollow, $style.noSelectHeader]">
          <span>选择接收者</span>
          <span @click="() => selectFromFollow = false">取消</span>
        </div>
        <div v-else-if="selectList.length !== 0" :class="$style.selectHeader">

        </div>
        <div v-else :class="$style.noSelectHeader">
          <span>消息</span>
          <span @click="writeToFollowHandle"><span>＋</span>编写</span>
        </div>
        <div>
          <Loading v-if="isSidebarLoading" style="margin-top: 300px;" />
          <div v-else-if="selectFromFollow">
            <!-- 展示观注者列表,选择一个后回到消息记录列表,WriteTo并将他放到消息记录队首 -->
          </div>
          <div v-else-if="LetterList.length === 0" :class="$style.haveNoLetter">
            <span>
              暂无消息
            </span>
          </div>
          <div v-else>
            <!-- 消息记录列表,选择一个后直接WriteTo -->
          </div>
        </div>
      </div>
      <div :class="$style.main">
        <Loading v-if="isMainLoading" style="margin-top: 300px;" />
        <div v-else-if="!writeTo" :class="$style.haveNoLetter">
          <span>未选择消息</span>
        </div>
        <div v-else :class="$style.wave">
          <!-- writeTo不为空则请求聊天内容以及用户信息 -->
          <div>
            <div :class="$style.LetterHeader">

            </div>
            <div :class="$style.historyLetters">

            </div>
            <div :class="$style.sendLetter">
              <el-input v-model="newLetter" type="textarea" />
              <span :class="canSend ? $style.activeSend : ''" @click="sendLetter">发送</span>
            </div>
          </div>
          <div>
            <div :class="$style.userHeader">
              <span>信息</span>
            </div>
            <div :class="$style.userInfo"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
}

.container>div {
  width: 95%;
  min-width: 1600px;
  height: 95%;
  min-height: 800px;
  background-color: #fff;
  border: 1px solid #ddd;
  display: flex;
  box-shadow: #ccc 0 0 10px;
  border-radius: 10px;
}

.sidebar {
  width: 350px;
  height: 100%;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
}

.sidebar>div:first-child {
  height: 70px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
}

.selectFromFollow {
  padding-left: 20px;
  color: var(--theme-color) !important;
}

.selectHeader {
  background-color: var(--theme-color);
  margin: 3px;
}

.noSelectHeader {
  justify-content: space-between;
  padding: 0 25px 0 25px;
  color: #666;
}

.noSelectHeader>span:first-child {
  font-size: 22px;
}

.noSelectHeader>span:nth-child(2) {
  padding: 7px 16px 7px 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 18px;
  transition: .3s;
  cursor: pointer;
}

.noSelectHeader>span:nth-child(2):hover {
  background-color: var(--theme-color);
  border: 1px solid #fff;
  color: #fff;
}

.noSelectHeader>span:nth-child(2):hover>span {
  background-color: #fff;
  color: #ccc;
}

.noSelectHeader>span:nth-child(2)>span {
  background-color: #999;
  color: #eee;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px 0 5px;
  font-size: 14px;
  transition: .3s;
}

.sidebar>:nth-child(2) {
  flex-grow: 1;
}

.haveNoLetter {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.haveNoLetter>span {
  font-size: 22px;
  color: #666;
}

.main {
  flex-grow: 1;
  height: 100%;
}

.wave {
  width: 100%;
  height: 100%;
  display: flex;
}

.wave>:nth-child(1) {
  flex: 2;
  height: 100%;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
}

.LetterHeader {
  height: 70px;
  border-bottom: 1px solid #ddd;
}

.historyLetters {
  flex: 8;
  border-bottom: 1px solid #ddd;
}

.sendLetter {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sendLetter div {
  width: 70%;
  height: 80%;
}

.sendLetter div textarea {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  font-size: 18px;
  padding-left: 15px;
}

.sendLetter div textarea::-webkit-scrollbar {
  display: none;
}

.sendLetter>span {
  padding: 10px 20px 10px 20px;
  margin-left: 20px;
  background-color: #ddd;
  transition: .3s;
  color: #999;
  border-radius: 10px;
}

.activeSend {
  background-color: var(--theme-color) !important;
  box-shadow: #ddd 5px 5px 5px;
  color: #fff !important;
  cursor: pointer;
}

.wave>:nth-child(2) {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.userHeader {
  height: 70px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
}

.userHeader>span {
  margin-left: 25px;
  font-size: 22px;
}

.userInfo {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>