<script>
import Like from '../assets/basic/like.svg?vueComponent'
import View from '../assets/basic/view.svg?vueComponent'
import DetailPanel from './DetailPanel.vue'

import { unitConverter } from '../utils'

export default {
  data() {
    return {
      showDetail: false,
    }
  },
  props: ['data'],
  components: { Like, View, DetailPanel },
  methods: {
    unitConverter,
  },
}

</script>

<template>
  <div :class="$style.container" @click="() => showDetail = true">
    <DetailPanel v-if="showDetail" @closeHandle="() => showDetail = false" :data="data" />
    <img :src="data.img">
    <div :class="$style.contentDescription">
      <div>
        <span>{{ data.title }}</span>
        <span>{{ data.nickname }}</span>
      </div>
      <div>
        <span>
          <span :class="$style.contentSvg">
            <Like />
          </span>
          {{ unitConverter(data.likes) }}
        </span>
        <span>
          <span :class="$style.contentViewSvg">
            <View />
          </span>
          {{ unitConverter(data.views) }}
        </span>
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  width: 400px;
  height: 350px;
  background-color: rgba(238, 238, 238, 0.5);
  display: flex;
  flex-direction: column;
  transition: .5s;
  box-shadow: #ddd 5px 5px 5px;
  border-radius: 10px;
}

.container:hover {
  transform: translateY(-15px);
}

.container>img {
  height: 285px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.contentDescription {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 10px 5px;
}

.contentDescription>div:nth-child(1) {
  display: flex;
  flex-direction: column;
}

.contentDescription>div:nth-child(1)>span:nth-child(1) {
  font-size: 18px;
}

.contentDescription>div:nth-child(1)>span:nth-child(2) {
  font-size: 14px;
  padding-top: 5px;
}

.contentSvg {
  width: 16px;
  height: 16px;
}

.contentViewSvg {
  width: 22px;
  height: 22px;
}

.contentDescription>div:nth-child(2) {
  display: flex;
  align-items: flex-start;
}

.contentDescription>div:nth-child(2)>span {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  opacity: .8;
}
</style>