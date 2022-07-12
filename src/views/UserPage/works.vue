<script>
import WorkCard from '../../components/WorkCard.vue'
import useStore from '../../stores'

export default {
  data() {
    return {
      chooseType: '沙盘',
      isLoading: false,
      worksList: [],
      store: useStore()
    }
  },
  props: ['type'],
  components: { WorkCard },
  created() {
    const { type, uid } = this.$route.params
    this.chooseType = type || '沙盘'
    if (uid === this.store.uid) {
      this.worksList = this.store.works.finished
    } else {
      // 请求 uid - type 的开放列表
    }
  },
  watch: {
    type(now) {
      this.chooseType = now || '沙盘'
    },
  }
}
</script>

<template>
  <Loading v-if="isLoading" style="margin-top: 100px;" />
  <div v-else-if="worksList.length === 0">
    <div :class="$style.empty">空空如也~</div>
  </div>
  <div :class="$style.worksContainer" v-else>
    <WorkCard v-for="item of worksList" :work-data="item" :key="item.id" />
  </div>
</template>

<style module>
.worksContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px 20px;
}

.empty {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  color: #666;
}
</style>