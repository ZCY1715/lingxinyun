<script>
import Bell from '../../assets/basic/bell.svg?vueComponent'
import Upload from '../../assets/basic/upload.svg?vueComponent'
import useStore from '../../stores'

export default {
  data() {
    return {
      messages: [],
      isLoading: true,
      store: useStore()
    }
  },
  components: { Bell, Upload },
  computed: {
    hasMessage() {
      return this.messages.length !== 0
    }
  },
  created() {
    this.messages = this.store.messages
  },
  methods: {
    doWhenShow() {
      if (!this.isLoading) return
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }

}
</script>

<template>
  <el-popover placement="bottom-start" :width="400" trigger="click" @show="doWhenShow">
    <template #reference>
      <div :class="$style.bell" @click="enterMessagePage">
        <div v-if="hasMessage" :class="$style.showMessage"></div>
        <Bell />
      </div>
    </template>
    <div :class="$style.popoverContainer">
      <h2>您的通知</h2>
      <div class="cutLineX"></div>
      <div v-if="isLoading">
        <Loading />
      </div>
      <div v-else-if="hasMessage" :class="$style.content">
        <div v-for="message of messages" :key="message.id">
          <div>
            <img :src="message.avatarURL">
          </div>
          <div :class="$style.mainContent">
            <div>
              <div>{{ message.nickname }}</div>
              <div>&nbsp;&nbsp;•&nbsp;&nbsp;</div>
              <div>{{ message.time }}</div>
            </div>
            <div>{{ message.content }}</div>
          </div>
        </div>
      </div>
      <div v-else :class="$style.noMessage">
        <p>您当前没有任何通知。</p>
        <p>我们会在您获得好评、新关注者时通知您。要开始，</p>
        <p>请上传新作品。<span :class="$style.upload">
            <span :class="$style.uploadIcon">
              <Upload />
            </span>添加作品
          </span></p>
      </div>
    </div>
  </el-popover>
</template>

<style module>
@keyframes Swing {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(30deg);
  }

  75% {
    transform: rotate(-30deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.bell {
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
}

.bell svg {
  transition: .3s;
}

.bell svg:hover {
  fill: var(--theme-color);
}

.bell:hover {
  animation: Swing .8s;
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

.popoverContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.noMessage {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.noMessage p {
  margin: 0;
  padding: 3px;
  opacity: .9;
}

.noMessage p:nth-child(3) {
  display: inline-flex;
  align-items: center;
}

.upload {
  display: inline-flex;
  align-items: center;
  background-color: rgb(244, 175, 67);
  padding: 3px 5px 3px 5px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
}

.uploadIcon {
  width: 18px;
  height: 18px;
}

.uploadIcon svg {
  fill: #fff;
}

.content {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content>div {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0 10px 50px;
  margin-top: 5px;
  border-bottom: 1px solid #eee;
  width: 100%;
  transition: .3s;
}

.content>div:hover {
  background-color: #eee;
}

.content>div>div:nth-child(1) {
  width: 52px;
  height: 52px;
}


.content>div>div:nth-child(1) img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.mainContent {
  padding-left: 30px;
  display: flex;
  flex-direction: column;
}

.mainContent>div:nth-child(1) {
  display: flex;
}

.mainContent>div:nth-child(1)>div:nth-child(1) {
  font-size: 16px;
}

.mainContent>div:nth-child(2) {
  padding-top: 5px;
  opacity: .8;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 250px;
  white-space: nowrap;
}
</style>