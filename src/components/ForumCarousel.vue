<script>
export default {
  props: {
    imageArray: {
      default: [{
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        id: 0,
        title: '标题',
        describtion: '这是图片的描述',
        author: '作者名'
      },
      {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        id: 1,
        title: '标题',
        describtion: '这是图片的描述',
        author: '作者名'
      },
      {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        id: 2,
        title: '标题',
        describtion: '这是图片的描述',
        author: '作者名'
      },
      {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        id: 3,
        title: '标题',
        describtion: '这是图片的描述',
        author: '作者名'
      }
      ]
    }
  },
  methods: {
    handleClick() { }
  }
}
</script>

<template>

  <el-carousel :interval="7000" type="card" height="300px" :class="$style.container" indicator-position="none">
    <el-carousel-item v-for="item in imageArray" :key="item.id" :class="$style.content">
      <div :class="$style.carouselItem" @click="handleClick">
        <img :src="item.url" />
        <div>
          <span>{{ item.title }}</span>
          <span>作者: <span>{{ item.author }}</span></span>
          <p>{{ item.describtion }}</p>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>

</template>

<style module>
.container {
  width: 1700px;
  margin-bottom: 100px;
  padding: 90px;
  padding-top: 50px;
  padding-bottom: 20px;
}

.container::-webkit-scrollbar {
  display: none;
}

.content {
  box-shadow: #666 2px 5px 5px;
  border-radius: 20px;
  width: 750px;
}

.carouselItem {
  background-color: #eee;
  display: flex;
  padding: 20px;
  width: 100%;
  height: 100%;
}



.carouselItem>:nth-child(1) {
  width: 360px;
  height: 250px;
  border-radius: 20px;
}

.carouselItem>:nth-child(2) {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 10px;
}

.carouselItem>:nth-child(2)>:first-child {
  font-size: 24px;
  margin-bottom: 10px;
}

.carouselItem>:nth-child(2)>:nth-child(2) {
  font-size: 14px;
  color: #666;
}

.carouselItem>:nth-child(2)>:nth-child(2) span {
  font-size: 18px;
  color: #000 !important;
  padding-left: 5px;
}

.carouselItem>:nth-child(2)>:nth-child(3) {
  text-indent: 2em;
  font-size: 14px;
  color: #666;
}
</style>