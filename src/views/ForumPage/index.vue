<script>
import ForumCord from '../../components/ForumCord.vue'
import ForumCarousel from '../../components/ForumCarousel.vue'

export default {
  data() {
    return {
      imageUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    }
  },
  components: {
    ForumCord,
    ForumCarousel
  },
}
</script>

<template>
  <div :class="$style.container">
    <ForumCarousel />
    <div>
      <div>
        排行榜
      </div>
      <div :class="$style.commonBoardBox">
        <ForumCord title="新秀榜" />
        <ForumCord title="综合榜" />
        <ForumCord title="打赏榜" />
      </div>
      <div>
        <img :src="imageUrl" />
      </div>
      <div :class="$style.commonBoardBox">
        <ForumCord title="点赞榜" />
        <ForumCord title="收藏榜" />
        <ForumCord title="浏览榜" />
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container>:nth-child(2)>:first-child {
  background-color: rgba(255, 242, 227, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  font-size: 26px;
}

.commonBoardBox {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
}


.container>:nth-child(2) {
  margin-bottom: 40px;
  width: 100%;
}



.container>:nth-child(2)>:first-child>span {
  display: inline-block;
  font-size: 2rem;
  font-weight: 500;
  color: rgba(255, 159, 138, 1);
}

.container>:nth-child(2)>:nth-child(3) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container>:nth-child(2)>:nth-child(3) img {
  width: 400px;
  height: 400px;
  border-radius: 30px;
  box-shadow: #aaa 0 0 10px;
}
</style>