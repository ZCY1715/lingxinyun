<script>
import Close from '../assets/basic/close.svg?vueComponent'
import Letter from '../assets/basic/letter.svg?vueComponent'
import Star from '../assets/basic/star.svg?vueComponent'
import Like from '../assets/basic/like.svg?vueComponent'
import View from '../assets/basic/view.svg?vueComponent'

export default {
  data() {
    return {
      newComment: '',
    }
  },
  props: ['sand_id', 'user_id'],
  components: { Close, Letter, Star, Like, View },
  methods: {
    // 根据沙盘id获取沙盘信息,在根据获取的作者id获取作者信息以及评论等
    async init() {

    },
    followClickHandle() { },
    toAutherHome() { },
    toOwnHome() { },
    sendComment() { },
    toLetterPage() { },
    collectClick() { },
    likeClick() { },
  },
  async created() {
    console.log(this.sand_id, this.user_id)
    await this.init()
  },
  mounted() {
    this.$nextTick(() => {
      document.body.appendChild(this.$el)
    })
  },
  watch: {
    $route() {
      document.body.removeChild(this.$el)
    }
  }
}

</script>

<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <div>
        <div @click="toAutherHome">
          <!-- 作者头像 -->
          <img
            src="https://s3-alpha-sig.figma.com/img/2351/9685/23896065cdec96a82f1ad8d3887db470?Expires=1658707200&Signature=Rgmg862DTWqX3yKueIxI0knOoO6MpKv2Ycp74ezyjcegE5k~2x9FiY88LtlY41FKek03hY~UeaIhlVJ-EI5I-SZjQ-A-IJ2wIPBZq4ZGrOqOKDUyCAVPFdyswiXR5g3qD2J1rMw4e8WSKa02QxbaWLSNVBP4U9DlNK89sdLob4ikxXKW-yH4dGq54DwGom5vT33WScc00yGQ8VhubtYF6YbVMdU0~TpRQUksdaF~idKgpag5GTiPw0BKQL-6jn-j31KnRalzwNYFGRkxVNQyC8Z9yHGpVVtRKHLJ8gklIcMjLGu~PZmqJ684VAAnnCCPJOa2OxyQ~xSenIMtVa1tZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">
        </div>
        <div>
          <!-- 作者昵称 -->
          <span>清明</span>
          <span @click="followClickHandle">关注</span>
        </div>
      </div>
      <div>
        <span @click="() => $emit('closeHandle')">
          <Close />
        </span>
      </div>
    </div>
    <div :class="$style.wave">
      <div :class="$style.mainContent">
        <div>
          <!-- 描述内容 -->
          <p>
            “园林，指特定培养的自然环境和游憩境域。在一定的地域运用工程技术和艺术手段，通过改造地形（或进一步筑山、叠石、理水）、种植树木花草、营造建筑和布置园路等途径创作而成的美的自然环境和游憩境域，就称为园林。在中国传统建筑中独树一帜，有重大成就的是古典园林建筑。传统中国文化中的一种艺术形式，受到传统“礼乐”文化影响很深。通过地形、山水、建筑群、花木等作为载体衬托出人类主体的精神文化。
          </p>
          <p>
            著名的四大私家园林分别是沧浪亭、狮子林、拙政园和留园，他们四个分别代表了宋元明清四个朝代在私家园林上的造诣。其中拙政园作为私家园林之首，也是中国四大古典园林之一，同时也是苏州最大的古典私家园林。
          </p>
          <p>
            我们常说的中国古典四大园林包括：拙政园，避暑山庄、颐和园、留园，其中颐和园和避暑山庄属于皇家园林，并不属于私家园林。
          </p>
          <p>
            我国私家园林始于汉代，成熟于唐宋，兴盛于明清。因园林属于私人宅院的一部分，和皇家园林相比空间有限，可掇山理水的空间更是有限，故自古在造园上注重细节，以精巧细致著称。在有限的空间内点缀假山、树木，安排亭台楼阁、池塘小桥，体现山水花鸟，勾勒唐诗宋词的意境。
          </p>
        </div>
        <div>
          <!-- 图片展示 -->
          <img
            src="https://s3-alpha-sig.figma.com/img/9aec/56c2/8317a07bc5b48e71c4f697bed36912bd?Expires=1658707200&Signature=AdeRPs70XMtT28NUMUp5jxF~7HrTq8W6Qxzn3pDvgYmLObqO0eq7bq176uEnwl4LfFlc8qkW-l9eb1GkFnCLbGieEpRbFQ6cIpfzEhqlaJJGAEQ7~mFCpce4aPP4unrKKT~4-JAy3K0C-1ov5O09W1OV1wbLVKGfjaur3cvbZidAcSMoJzOIbJO2t0c8PYjQQZEeggHYlaR4gf8pJnUdcCkjYPRzfSE-t2UFlu3gE0GBhfRRb3Ak5054C59Njwhp3ZEb-KDx8v~Yj7XXAkmfguLBIr4nNwmtqniZQUVi8jMB4gGGdLhT2jYVfBA93JxsaDWqLQUHho7pZkOgEwX~FA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        </div>
      </div>
      <div :class="$style.mainControl">
        <div>
          <span @click="toLetterPage">
            <Letter />
          </span>
          <span>私信</span>
        </div>
        <div>
          <span @click="collectClick">
            <Star />
          </span>
          <span>收藏</span>
        </div>
        <div>
          <span @click="likeClick">
            <Like />
          </span>
          <span>点赞</span>
        </div>
      </div>
    </div>
    <div :class="$style.centerPart">
      <span @click="likeClick">
        <Like />
      </span>
      <span>风景园林沙盘</span>
      <span>
        <span>
          <span>
            <Like />
          </span>
          <!-- 点赞数 -->
          {{ 1 }}
        </span>
        <span>
          <span>
            <View />
          </span>
          <!-- 浏览数 -->
          {{ 2 }}
        </span>
      </span>
      <span>
        <!-- 发布时间 -->
        发布时间:<span>2022年4月3日</span>
      </span>
    </div>
    <div :class="$style.commentPart">
      <div :class="$style.commentLeft">
        <div>
          <!-- 自己的头像 -->
          <img @click="toOwnHome"
            src="https://s3-alpha-sig.figma.com/img/09dc/adfc/ac38ea6d28b4e85bcff12400b7a42ae2?Expires=1658707200&Signature=RIT97aols7ohkmSYiHam-ijZA3Mg4ObSn8k20x-NQy9b9b64TDRdG9GDPalvoTmACnLkcL-Hn683fqLx0C3CL86bwmJzy0CMy4ifLAdMuMwClCbC5IpyKPDKkR9gatTb0uubGkYhPlEjhZovgpXAwbv1O1TiTPOy6Q3XZ1fFOlF6g4tjYnLqwaVYOpqNyT3E32agoiKZ6rKf91Yu~TqrBXaMnHx2m8w6W2~hLk83oRKxpPNLdWLRP3izd2k3kXx~Wv89p2bDttfylBiHTPWQCspLFl7-79kVGoKZ~WuXOADGgN3w0QPvVz5m-tKfFeunPpdo6kmPY~LNIN2oIjaraw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">
          <el-input v-model="newComment" type="textarea" placeholder="你对该项目有什么看法？" />
        </div>
        <div>
          <span @click="sendComment">发表评论</span>
        </div>
        <div class="cutLineX"></div>
        <div>
          <!-- 评论内容 -->
        </div>
      </div>
      <div :class="$style.commentRight">
        <div>
          <div>
            <span>所有者</span>
          </div>
          <div>
            <!-- 作者头像 -->
            <img @click="toAutherHome"
              src="https://s3-alpha-sig.figma.com/img/2351/9685/23896065cdec96a82f1ad8d3887db470?Expires=1658707200&Signature=Rgmg862DTWqX3yKueIxI0knOoO6MpKv2Ycp74ezyjcegE5k~2x9FiY88LtlY41FKek03hY~UeaIhlVJ-EI5I-SZjQ-A-IJ2wIPBZq4ZGrOqOKDUyCAVPFdyswiXR5g3qD2J1rMw4e8WSKa02QxbaWLSNVBP4U9DlNK89sdLob4ikxXKW-yH4dGq54DwGom5vT33WScc00yGQ8VhubtYF6YbVMdU0~TpRQUksdaF~idKgpag5GTiPw0BKQL-6jn-j31KnRalzwNYFGRkxVNQyC8Z9yHGpVVtRKHLJ8gklIcMjLGu~PZmqJ684VAAnnCCPJOa2OxyQ~xSenIMtVa1tZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">
            <!-- 作者昵称 -->
            <span>清明</span>
          </div>
          <div>
            <div @click="followClickHandle">关注</div>
            <div @click="toLetterPage">私信</div>
          </div>
        </div>
        <div>
          <!-- 沙盘标签 -->
          <span v-for="item of ['风景', '植物', '苏州园林', '花卉']" :key="item">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  position: fixed;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
}

.header {
  margin: 20px;
  display: flex;
  height: 80px;
  justify-content: space-between;
}

.header>:first-child {
  flex-grow: 1;
  height: 80px;
  margin-left: 230px;
  display: flex;
  align-items: center;
}

.header>:first-child>:first-child {
  height: 100%;
  width: 80px;
}

.header>:first-child>:first-child>img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid #eee;
  cursor: pointer;
}

.header>:first-child>:nth-child(2) {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 18px;
}

.header>:first-child>:nth-child(2)>span {
  margin-left: 10px;
  margin-top: 5px;
}

.header>:first-child>:nth-child(2)>span:nth-child(1) {
  font-size: 22px;
  margin-top: 0;
}

.header>:first-child>:nth-child(2)>span:nth-child(2) {
  width: 100px;
  padding: 3px 5px 3px 0;
  transition: .3s;
  cursor: pointer;
}

.header>:first-child>:nth-child(2)>span:nth-child(2):hover {
  color: var(--theme-color);
}

.header>:nth-child(2) {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.header>:nth-child(2) svg {
  width: 30px;
  height: 30px;
  fill: #fff;
  cursor: pointer;
}

.wave {
  width: calc(100% - 270px);
  display: flex;
  min-height: 1000px;
  margin: 20px 20px 0 250px;
}

.mainContent {
  flex-grow: 1;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

.mainContent>:nth-child(1) {
  margin-top: 20px;
}

.mainContent>:nth-child(1)>p {
  padding: 10px 50px 0 50px;
  line-height: 30px;
  font-size: 18px;
  text-indent: 2em;
}

.mainContent>:nth-child(2) {
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border-radius: 30px;
}

.mainContent>:nth-child(2)>img {
  min-width: 1000px;
  width: 80%;
  height: 600px;
  margin: 0 30px 0 30px;
  border-radius: 30px;
}

.mainControl {
  width: 200px;
  height: 450px;
  display: flex;
  flex-direction: column;
}

.mainControl>div {
  width: 200px;
  height: 120px;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}

.mainControl>div>span:nth-child(1) {
  width: 60px;
  height: 60px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.mainControl>div>span:nth-child(2) {
  color: #fff;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.mainControl>div:nth-child(1)>span:nth-child(1) {
  background-color: #fff;
}

.mainControl>div:nth-child(2)>span:nth-child(1) {
  background-color: #fff;
}

.mainControl>div:nth-child(3)>span:nth-child(1) {
  background-color: var(--theme-color);
}

.mainControl>div>span:nth-child(1) svg {
  width: 30px;
  height: 30px;
}

.mainControl>div:nth-child(3)>span:nth-child(1) svg {
  fill: #fff;
}

.centerPart {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.centerPart>span:nth-child(1) {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--theme-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.centerPart>span:nth-child(1)>svg {
  width: 40px;
  height: 40px;
  fill: #fff;
}

.centerPart>span:nth-child(2) {
  margin-top: 30px;
  font-size: 30px;
}

.centerPart>span:nth-child(3) {
  padding-top: 10px;
  font-size: 18px;
  display: flex;
  justify-content: center;
}

.centerPart>span:nth-child(3)>span {
  display: flex;
  align-items: center;
  margin: 0 15px 0 15px;
}

.centerPart>span:nth-child(3) svg {
  width: 20px;
  height: 20px;
  fill: #fff;
  padding: 0 5px 0 5px;
}

.centerPart>span:nth-child(4) {
  margin-top: 10px;
}

.centerPart>span:nth-child(4)>span {
  padding: 0 10px 0 10px;
}

.commentPart {
  background-color: #eee;
  width: calc(100% - 450px);
  min-width: 1060px;
  min-height: 500px;
  margin: 20px 20px 0 250px;
  border-radius: 10px;
  margin-bottom: 100px;
  display: flex;
}

.commentLeft {
  width: 60%;
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 100px 20px 100px 100px;
  border-radius: 5px;
}

.commentLeft>:first-child {
  display: flex;
  padding: 40px 40px 0 40px;
}

.commentLeft>:first-child>img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.commentLeft>:first-child>:nth-child(2) {
  flex-grow: 1;
  margin-left: 20px;
  height: 100px;
}

.commentLeft>:first-child>:nth-child(2) textarea {
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 20px;
}

.commentLeft>:nth-child(2) {
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
  margin-top: 20px;
  margin-bottom: 30px;
}

.commentLeft>:nth-child(2)>span {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 10px 20px;
  border: 1px solid #eee;
  color: #444;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: .3s;
}

.commentLeft>:nth-child(2)>span:hover {
  background-color: var(--theme-color);
  border: 1px solid #fff;
  color: #fff;
}


.commentRight {
  flex-grow: 1;
  margin: 100px 100px 100px 0;
  min-width: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.commentRight>:first-child {
  padding: 30px 50px 40px 50px;
  border: 1px solid #ddd;
  background-color: #fff;
}

.commentRight>:first-child>:first-child {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.commentRight>:first-child>:nth-child(2) {
  display: flex;
  align-items: center;
}

.commentRight>:first-child>:nth-child(2)>img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  cursor: pointer;
}

.commentRight>:first-child>:nth-child(2)>span {
  margin-left: 20px;
  font-size: 22px;
}

.commentRight>:first-child>:nth-child(3) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.commentRight>:first-child>:nth-child(3)>div {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 90%;
  border: 1px solid var(--theme-color);
  border-radius: 30px;
  transition: .3s;
  color: #666;
  font-size: 18px;
  cursor: pointer;
}

.commentRight>:first-child>:nth-child(3)>div:hover {
  background-color: var(--theme-color);
  color: #fff;
}

.commentRight>:nth-child(2) {
  border: 1px solid #ddd;
  height: 100px;
  position: relative;
  top: 20px;
  background-color: #fff;
  padding: 30px;
  line-height: 50px;
}

.commentRight>:nth-child(2) span {
  padding: 10px 20px 10px 20px;
  border: 1px solid #ddd;
  transition: .3s;
  border-radius: 20px;
  color: #666;
  margin: 10px;
  white-space: nowrap;
  cursor: pointer;
}

.commentRight>:nth-child(2) span:hover {
  background-color: var(--theme-color);
  color: #fff;
  border: 1px solid #fff;
}
</style>