<script>
import myCarousel from './myCarousel.vue'
import myCard from './myCard.vue'


export default {
  data() {
    return {
     
      imageUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    }
  },

  props: [],
  components: {
    myCarousel,
    myCard
  },
  computed: {},
  methods: {},
  watch: {},

  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() { },
  beforeUpdate() { },
  updated() { },
  beforeUnmount() { },
  unmounted() { },
}
</script>

<template>
  <div :class="$style.container" @mouseenter.prevent>

    <div>
      <myCarousel />
    </div>

    <div>

      <div>
        <span>排行榜</span>
      </div>

      <div :class="$style.commonBoardBOx">
        <div>
          <myCard title="新秀榜"></myCard>
        </div>
        <div>
          <myCard title="综合榜"></myCard>
        </div>
        <div>
          <myCard title="打赏榜"></myCard>
        </div>

      </div>
      <div>
      <el-image :src="imageUrl" fit="fill">


      </el-image>
      </div>
      <div :class="$style.commonBoardBOx">
        <div>
          <myCard title="点赞榜"></myCard>
        </div>
        <div>
          <myCard title="收藏榜"></myCard>
        </div>
        <div>
          <myCard title="浏览榜"></myCard>
        </div>


      </div>

    </div>



  </div>
</template>

<style module>
.container {
  height: 1000px;
  overflow-x: hidden;
  overflow-y: scroll;
}

/* 公共的排行榜盒子样式 */
.commonBoardBOx{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.commonBoardBOx>div{
  width: 30%;

}


/* 除去包裹走马灯的盒子之外的盒子 */
.container>:nth-child(2) {
  position: relative;
  bottom: 40px;
   

}

/* 排行榜标题样式 */
.container>:nth-child(2)>:first-child {
  background-color: rgba(255, 242, 227, 1);
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;




}

.container>:nth-child(2)>:first-child>span {
  display: inline-block;
  font-size: 2rem;
  font-weight: 500;
  color: rgba(255, 159, 138, 1);
}

.container>:nth-child(2)>:nth-child(3) {
  text-align: center;
}

.container>:nth-child(2)>:nth-child(3)>:first-child {
  width: 20%;
  height: 20%;
  margin: 20px;
  
}
</style>