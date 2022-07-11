<script>
import useStore from "../../stores"
import WorkCard from '../../components/WorkCard.vue'
import CreateWorkCard from '../../components/CreateWorkCard.vue'
const store = useStore()

export default {
  data() {
    return {
      draftList: [],
      isLoading: false,
    }
  },
  components: { WorkCard, CreateWorkCard },
  created() {
    this.draftList = store.works.draft
  }
}
</script>

<template>
  <Loading v-if="isLoading" style="margin-top: 100px;" />
  <div v-else-if="draftList.length === 0">
    <div :class="$style.empty">空空如也~</div>
  </div>
  <div :class="$style.worksContainer" v-else>
    <WorkCard v-for="item of draftList" :work-data="item" :key="item.id" />
  </div>
  <CreateWorkCard />
</template>

<style module>
.worksContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
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