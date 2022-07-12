<script>
import { unitConverter } from '../utils'
import Setup from '../assets/basic/setUp.svg?vueComponent'
import ArrowDown from '../assets/basic/arrowDown.svg?vueComponent'
import Lock from '../assets/basic/lock.svg?vueComponent'
import Like from '../assets/basic/like.svg?vueComponent'
import View from '../assets/basic/view.svg?vueComponent'



export default {
  props: ['workData'],
  components: { Setup, Lock, Like, View, ArrowDown },
  computed: {
    isPublished() {
      const flag = this.workData.published
      return flag === undefined ? false : flag
    },
    isDraft() {
      return this.workData.published === undefined
    }
  },
  methods: { unitConverter },
}
</script>

<template>
  <div :class="$style.container">
    <div>
      <el-popover placement="bottom-start" :width="150" trigger="hover">
        <template #reference>
          <span v-show="isPublished">
            <span>
              <Setup />
            </span>
            <span>
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
        <span>
          <Lock />
        </span>私密
      </span>
    </div>
    <div>
      <span>{{ workData.title }}</span>
    </div>
    <div>
      <span v-if="isPublished">
        <span>
          <span>
            <Like />
          </span>
          {{ unitConverter(workData.likes) }}
        </span>
        <span>
          <span>
            <View />
          </span>
          {{ unitConverter(workData.views) }}
        </span>
      </span>
    </div>
    <img :src="workData.img" />
  </div>
</template>

<style module>
.container {
  width: 400px;
  height: 300px;
  border-radius: 10px;
  box-shadow: #666 5px 5px 5px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.container>img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: .5s;
  filter: brightness(.9);
}

.container:hover>img {
  transform: scale(1.2);
}

.container svg {
  fill: #fff;
}

.container>div {
  height: 40px;
  position: relative;
  z-index: 1;
}

.container>:first-child {
  top: 20px;
  left: 20px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container>:first-child>span {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.5);
}

.container>:first-child>span>span {
  width: 25px;
  height: 25px;
  transition: .3s;
}

.container>:first-child:hover>span>span {
  transform: rotate(180deg);
}

.worksControl {
  display: flex;
  flex-direction: column;
}

.worksControl>span {
  padding: 5px 10px 5px 10px;
  transition: .3s;
  cursor: pointer;
}

.worksControl>span:hover {
  background-color: #ddd;
}

.container>:nth-child(2) {
  top: 20px;
  right: -100px;
  width: 80px;
  color: #ddd;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container>:nth-child(2)>span {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container>:nth-child(2)>span>span {
  width: 25px;
  height: 25px;
  margin-right: 3px;
}

.container>:nth-child(3) {
  bottom: -100px;
  left: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 22px;
  color: #fff;
}

.container>:nth-child(4) {
  bottom: -100px;
  right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.container>:nth-child(4)>span,
.container>:nth-child(4)>span>span {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container>:nth-child(4)>span>span {
  margin-left: 10px;
  margin-right: 5px;
  font-size: 18px;
  color: #fff;
}

.container>:nth-child(4)>span>span>span {
  width: 20px;
  height: 20px;
  margin-right: 3px;
}
</style>