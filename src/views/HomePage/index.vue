<script>
import CenterPic from '../../assets/imgs/CenterPic.png'
import LeftTopPic from '../../assets/imgs/LeftTopPic.png'
import LeftBottomPic from '../../assets/imgs/LeftBottomPic.png'
import RightTopPic from '../../assets/imgs/RightTopPic.png'
import RightBottomPic from '../../assets/imgs/RightBottomPic.png'
import { domain } from '../../utils/constants'

export default {
  data() {
    return {
      pics: { CenterPic, LeftTopPic, LeftBottomPic, RightTopPic, RightBottomPic },
      domain,
    }
  },
  methods: {
    startToGame() {

    }
  }
}

</script>

<template>
  <div :class="$style.container">
    <div :class="$style.onePart">
      <div>
        <h1>在这里创造自己的世界</h1>
        <p>通过建立你自己的沙具模型，或使用我们的沙具资产库中现成的资产，立即开始创作</p>
        <span @click="startToGame">开始免费创作</span>
      </div>
      <div>
        <div>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span>{{ domain }}</span>
          </div>
          <img :src="pics.CenterPic">
        </div>
      </div>
      <img :class="$style.LeftTopPic" :src="pics.LeftTopPic" />
      <img :class="$style.LeftBottomPic" :src="pics.LeftBottomPic" />
      <img :class="$style.RightTopPic" :src="pics.RightTopPic" />
      <img :class="$style.RightBottomPic" :src="pics.RightBottomPic" />
    </div>
  </div>
</template>

<style module>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.onePart {
  position: relative;
  width: 80vw;
  min-width: 1000px;
  height: 80vh;
  min-height: 800px;
}

.onePart>:first-child {
  padding: 20px 50px 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.onePart>:first-child h1 {
  font-size: 36px;
}

.onePart>:first-child p {
  font-size: 18px;
  margin-top: 0;
}

.onePart>:first-child span {
  padding: 10px 20px 10px 20px;
  background-color: var(--theme-color);
  color: #fff;
  border-radius: 20px;
  transition: .3s;
  cursor: pointer;
}

.onePart>:first-child span:hover {
  box-shadow: #ccc 5px 5px 5px;
}

.onePart>:nth-child(2) {
  border-radius: 20px 20px 0 0;
  box-sizing: border-box;
  padding: 5px;
  height: 600px;
  background-image: linear-gradient(to bottom, #F3F3F3, #FFFFFF);
}

.onePart>:nth-child(2)>div {
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.onePart>:nth-child(2)>div>div:first-child {
  width: 100%;
  height: 50px;
  background-color: #F3F3F3;
  display: flex;
  align-items: center;
}

.onePart>:nth-child(2)>div>div:first-child>span:not(:last-child) {
  background-color: var(--theme-color);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 3px 0 3px;
}

.onePart>:nth-child(2)>div>div:first-child>span:last-child {
  padding: 0 20px 0 20px;
  color: #aaa;
}

.onePart>:nth-child(2)>div img {
  width: 600px;
  height: 600px;
}

.LeftTopPic {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0;
  left: -50px;
  transform: translateY(0px) rotate(-20deg);
  animation: Rippling1 5s linear infinite;
}

@keyframes Rippling1 {
  0% {
    transform: translateY(0px) rotate(-20deg);
  }

  25% {
    transform: translateY(15px) rotate(-20deg);
  }

  50% {
    transform: translateY(0px) rotate(-20deg);
  }

  75% {
    transform: translateY(-15px) rotate(-20deg);
  }

  100% {
    transform: translateY(0px) rotate(-20deg);
  }
}

.LeftBottomPic {
  width: 150px;
  height: 150px;
  position: absolute;
  bottom: 0;
  left: -50px;
  transform: translateY(30px);
  animation: Rippling2 5s linear infinite;
}

@keyframes Rippling2 {
  0% {
    transform: translateY(15px);
  }

  25% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }

  75% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(15px);
  }
}

.RightTopPic {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0;
  right: -50px;
  transform: translateY(-15px) rotate(20deg);
  animation: Rippling3 5s linear infinite;
}

@keyframes Rippling3 {
  0% {
    transform: translateY(-15px) rotate(20deg);
  }

  25% {
    transform: translateY(0px) rotate(20deg);
  }

  50% {
    transform: translateY(15px) rotate(20deg);
  }

  75% {
    transform: translateY(0px) rotate(20deg);
  }

  100% {
    transform: translateY(-15px) rotate(20deg);
  }
}

.RightBottomPic {
  width: 250px;
  height: 80px;
  position: absolute;
  bottom: 100px;
  right: -100px;
  transform: translateY(0px) rotate(-20deg);
  animation: Rippling4 5s linear infinite;
}

@keyframes Rippling4 {
  0% {
    transform: translateY(0px) rotate(-20deg);
  }

  25% {
    transform: translateY(-15px) rotate(-20deg);
  }

  50% {
    transform: translateY(0px) rotate(-20deg);
  }

  75% {
    transform: translateY(15px) rotate(-20deg);
  }

  100% {
    transform: translateY(0px) rotate(-20deg);
  }
}
</style>