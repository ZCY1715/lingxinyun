<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    dataList: {
      default: [
        { title: '四大名著', id: 1 },
        { title: '四大名著', id: 2 },
        { title: '四大名著', id: 3 },
        { title: '四大名著', id: 4 },
        { title: '四大名著', id: 5 },
        { title: '四大名著', id: 6 },
      ]
    }
  },

}
</script>
<template>
  <div :class="$style.cardBox">
    <span>{{ title }}</span>
    <div>
      <div v-for="item in dataList" :key="item.id" :class="$style.commonCol">
        <div>{{ item.id }}</div>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<style module>
.cardBox {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: .3s;
  width: 350px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
}

.cardBox:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.cardBox>:nth-child(1) {
  padding: 30px 0 30px 0;
  font-size: 20px;
  color: #666;
}

.cardBox>:nth-child(2) {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.commonCol {
  display: flex;
  height: 40px;
  align-items: center;
  transition: .3s;
  cursor: pointer;
}

.commonCol:hover {
  background-color: #eee;
}

.commonCol>:nth-child(1) {
  margin-left: 20px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.commonCol>:nth-child(2) {
  flex-grow: 1;
  margin-left: 30px;
  font-size: 18px;
}

.commonCol:nth-child(1)>:nth-child(1) {
  background: rgb(245, 96, 96);
}

.commonCol:nth-child(2)>:nth-child(1) {
  background: rgb(255, 136, 136);
}

.commonCol:nth-child(3)>:nth-child(1) {
  background: rgb(252, 178, 178);
}

.commonCol:nth-child(n+4)>:nth-child(1) {
  background: #f6e58d;
}
</style>