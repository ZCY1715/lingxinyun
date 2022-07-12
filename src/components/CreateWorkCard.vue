<script>
export default {
  methods: {
    toCreate() {

    }
  }
}
</script>

<template>
  <div :class="$style.container">
    <div @click="toCreate">
      <span>+</span>
    </div>
    <div @click="toCreate">创建项目</div>
  </div>
</template>

<style module>
.container {
  width: 400px;
  height: 300px;
  border-radius: 10px;
  border: 1px rgba(244, 175, 67) dashed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.container>:first-child {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgb(255, 212, 143);
  opacity: .4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.container>:first-child>span {
  width: 40px;
  height: 40px;
  font-size: 40px;
  font-weight: normal !important;
  border-radius: 50%;
  background-color: rgb(255, 182, 66);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: .6s;
}

.container>:first-child:hover>span {
  transform: scale(2.5) rotate(180deg);
}

.container>:nth-child(2) {
  width: 120px;
  height: 40px;
  border-radius: 20px;
  margin-top: 20px;
  border: 1px #ddd solid;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  transition: .3s;
  cursor: pointer;
}

.container>:nth-child(2):hover {
  background-color: var(--theme-color);
  color: #fff;
}
</style>