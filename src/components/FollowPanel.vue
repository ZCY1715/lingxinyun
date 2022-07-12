<script>

export default {
  data() {
    return {
      isLoading: true,
      showType: 0,
      showList: []
    }
  },
  props: ['type'],
  created() {
    this.showType = this.type || 0
  },
  methods: {
    closePanel(e) {
      if (e.target === e.currentTarget) {
        this.$emit('closeHandle')
      }
    },
    // 请求数据
    getDateList() {
      console.log('获取数据')
    }
  },
  watch: {
    showType() {
      this.getDateList()
    }
  },
  mounted() {
    this.getDateList()
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>

<template>
  <div :class="$style.container" @click="closePanel">
    <div>
      <div>
        <span @click="() => showType = 0" :class="showType === 0 ? $style.activeType : ''">关注</span>
        <span @click="() => showType = 1" :class="showType === 1 ? $style.activeType : ''">粉丝</span>
      </div>
      <div class="cutLineX"></div>
      <div :class="$style.content">
        <Loading v-if="isLoading" />
        <div v-else-if="showList.length === 0" :class="$style.haveNoDate">
          {{ showType === 1 ? '您还未被任何人关注' : '您还未关注任何人' }}
        </div>
        <div v-else>
          <div v-for="item of showList">
            <!-- 关注和粉丝列表展示 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container>div {
  width: 1000px;
  height: 600px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container>div>:first-child {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.container>div>:first-child>span {
  padding: 10px 20px 0 20px;
  font-size: 18px;
  transition: .3s;
  cursor: pointer;
}

.activeType {
  color: var(--theme-color);
  transform: scale(1.2);
}

.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.haveNoDate {
  font-size: 22px;
  color: #666;
}
</style>