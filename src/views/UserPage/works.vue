<script>
import Loading from '../../components/Loading.vue'
import Setup from '../../assets/svgs/setup.svg?vueComponent'
import ArrowDown from '../../assets/svgs/arrowDown.svg?vueComponent'
import Lock from '../../assets/svgs/lock.svg?vueComponent'
import Like from '../../assets/svgs/like.svg?vueComponent'
import View from '../../assets/svgs/view.svg?vueComponent'
import { getSubfix } from '../../utils'
import useStore from '../../stores'
const store = useStore()

export default {
  data() {
    return {
      chooseType: '沙盘',
      isLoading: false,
      worksList: [],
      getSubfix: getSubfix,
    }
  },
  props: ['type'],
  components: { Loading, Setup, ArrowDown, Lock, Like, View },
  created() {
    const type = this.$route.params.type
    this.chooseType = type ? type : '沙盘'
    const uid = this.$route.params.uid
    const isOwn = uid === store.userInfo.uid
    if (isOwn) {
      this.worksList = store.works.finished
    } else {
      // 请求 uid - type 的开放列表
    }
  },
  watch: {
    type(now) {
      this.chooseType = now ? now : '沙盘'
    },
  }
}
</script>

<template>
  <Loading v-if="isLoading" style="margin-top: 100px;" />
  <div :class="$style.worksContainer" v-else>
    <div v-for="item of worksList" :key="item.id">
      <div>
        <el-popover placement="bottom-start" :width="150" trigger="hover">
          <template #reference>
            <span v-show="item.published">
              <span class="svgContainer">
                <Setup />
              </span>
              <span class="svgContainer">
                <ArrowDown />
              </span>
            </span>
          </template>
          <div :class="$style.worksControl">
            <span>编辑</span>
            <span>克隆</span>
            <span>取消发布</span>
            <span>删除</span>
          </div>
        </el-popover>
      </div>
      <div>
        <span>
          <span class="svgContainer">
            <Lock />
          </span>私密
        </span>
      </div>
      <div>
        <span>{{ item.title }}</span>
      </div>
      <div>
        <span v-if="item.published">
          <span>
            <span class="svgContainer">
              <Like />
            </span>
            {{ getSubfix(item.likes) }}
          </span>
          <span>
            <span class="svgContainer">
              <View />
            </span>
            {{ getSubfix(item.views) }}
          </span>
        </span>
      </div>
      <img :src="item.img" />
    </div>
  </div>
</template>

<style module>
.worksContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-gap: 20px 20px;
}

.worksContainer>div {
  width: 450px;
  height: 350px;
  border-radius: 10px;
  box-shadow: #666 5px 5px 5px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.worksContainer>div>img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: .5s;
  filter: brightness(.9);
}

.worksContainer>div:hover>img {
  transform: scale(1.2);
}

.worksContainer>div svg {
  fill: #fff;
}

.worksContainer>div>div {
  height: 40px;
  position: relative;
  z-index: 1;
}

.worksContainer>div>:first-child {
  top: 20px;
  left: 20px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.worksContainer>div>:first-child>span {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.5);
}

.worksContainer>div>:first-child>span>span {
  width: 25px;
  height: 25px;
  transition: .3s;
}

.worksContainer>div>:first-child:hover>span>span {
  transform: rotate(180deg);
}

.worksControl {
  display: flex;
  flex-direction: column;
}

.worksControl>span {
  padding: 5px 10px 5px 10px;
  transition: .3s;
}

.worksControl>span:hover {
  background-color: #ddd;
}

.worksContainer>div>:nth-child(2) {
  top: 20px;
  right: -120px;
  width: 80px;
  color: #ddd;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.worksContainer>div>:nth-child(2)>span {
  display: flex;
  justify-content: center;
  align-items: center;
}

.worksContainer>div>:nth-child(2)>span>span {
  width: 25px;
  height: 25px;
  margin-right: 3px;
}

.worksContainer>div>:nth-child(3) {
  bottom: -100px;
  left: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 22px;
  color: #fff;
}

.worksContainer>div>:nth-child(4) {
  bottom: -100px;
  right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.worksContainer>div>:nth-child(4)>span,
.worksContainer>div>:nth-child(4)>span>span {
  display: flex;
  align-items: center;
  justify-content: center;
}

.worksContainer>div>:nth-child(4)>span>span {
  margin-left: 10px;
  margin-right: 5px;
  font-size: 18px;
  color: #fff;
}

.worksContainer>div>:nth-child(4)>span>span>span {
  width: 20px;
  height: 20px;
  margin-right: 3px;
}
</style>