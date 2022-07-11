<script>
import Letter from '../../assets/basic/letter.svg?vueComponent'
import useStore from "../../stores"

export default {
  data() {
    return {
      letters: [],
      isLoading: true,
      store: useStore()
    }
  },
  components: { Letter },
  created() {
    this.letters = this.store.letters
  },
  computed: {
    LetterNum() {
      return this.letters.length
    },
    hasLetter() {
      return this.letters.length !== 0
    }
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
      <div :class="$style.letter" @click="enterLetterPage">
        <div v-if="hasLetter" :class="$style.showLetter">
          <span>{{ LetterNum > 9 ? "•••" : LetterNum }}</span>
        </div>
        <Letter />
      </div>
    </template>
    <div :class="$style.popoverContainer">
      <h2>您的消息</h2>
      <div class="cutLineX"></div>
      <div>
        <div :class="$style.controler">
          <div>编写 → </div>
          <div class="cutLineY"></div>
          <div>全部 → </div>
        </div>
        <div class="cutLineX"></div>
        <div v-if="isLoading">
          <Loading />
        </div>
        <div :class="$style.content" v-else-if="hasLetter">
          <div v-for="letter of letters" :key="letter.id">
            <div>
              <img :src="letter.avatarURL">
            </div>
            <div :class="$style.mainContent">
              <div>
                <div>{{ letter.nickname }}</div>
                <div>&nbsp;&nbsp;•&nbsp;&nbsp;</div>
                <div>{{ letter.time }}</div>
              </div>
              <div>{{ letter.content }}</div>
            </div>
          </div>
        </div>
        <div :class="$style.noLetter" v-else>
          <span>暂无消息...</span>
        </div>
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

.letter {
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
}

.letter svg {
  transition: .3s;
}

.letter svg:hover {
  fill: var(--theme-color);
}

.letter:hover {
  animation: Swing .8s;
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

.popoverContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popoverContainer>:nth-child(3) {
  opacity: .9;
  width: 100%;
}

.controler {
  width: 100%;
  height: 35px;
  display: flex;
}

.controler>div:nth-child(1),
.controler>div:nth-child(3) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 100%;
  transition: .3s;
  color: rgb(244, 175, 67);
  font-size: 16px;
  cursor: pointer;
}

.controler>div:nth-child(1):hover,
.controler>div:nth-child(3):hover {
  background-color: rgba(244, 175, 67, 0.3);
}

.noLetter {
  margin-top: 20px;
  text-align: center;
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