<script>
import useStore from "../../../stores"
import { uploader, clone, imgFileToBase64, getAllProvinces, getCitys } from '../../../utils'
import { accountLinks } from '../../../utils/constants'
import UploadTwo from '../../../assets/basic/uploadTwo.svg?vueComponent'
import Shrink from '../../../assets/basic/shrink.svg?vueComponent'
import ArrowDown from '../../../assets/basic/arrowDown.svg?vueComponent'
import Pen from '../../../assets/basic/pen.svg?vueComponent'
import Wechat from '../../../assets/links/wechat.svg?vueComponent'
import QQ from '../../../assets/links/QQ.svg?vueComponent'
import Github from '../../../assets/links/github.svg?vueComponent'

export default {
  data() {
    return {
      menus: [
        {
          title: '基本信息',
          toId: 'baseInfo'
        },
        {
          title: '账户连接',
          toId: 'accountLink'
        },
        {
          title: '关于我',
          toId: 'about',
        },
        {
          title: '工作经历',
          toId: 'job',
        },
        {
          title: '自定义链接',
          toId: 'ownLink',
        }, {
          title: '自定义内容',
          toId: 'ownContent'
        }
      ],
      selectMenuIndex: 0,
      userInfo: {},
      isMoreAccountLinks: false,
      newWorkExperience: {
        job: '',
        company: '',
        tempTime: null,
      },
      store: useStore(),
      modifyWorkIndex: -1,
      showAddLink: false,
      newLink: {
        title: '',
        href: ''
      },
      showAddContent: false,
      newContent: {
        title: '',
        content: ''
      }
    }
  },
  components: { UploadTwo, Shrink, ArrowDown, Pen, Wechat, QQ, Github },
  methods: {
    switchScrollView(id, index) {
      this.selectMenuIndex = index
      const el = document.getElementById(id)
      el && el.scrollIntoView({ block: 'center' })
    },
    isLinked(accountLink) {
      return this.userInfo.accountLinks.includes(accountLink.name)
    },
    workGoUp(index) {
      this.modifyWorkIndex = -1
      const temp = this.userInfo.workExperience[index]
      this.userInfo.workExperience[index] = this.userInfo.workExperience[index - 1]
      this.userInfo.workExperience[index - 1] = temp
    },
    addWorkExperience() {
      const { job, company, tempTime } = this.newWorkExperience
      if (!job || !company || !tempTime) {
        return this.$message({
          message: '请完善信息!',
          type: 'warning',
          grouping: true
        })
      }
      const timeStart = this.formateTime(tempTime[0])
      const timeEnd = this.formateTime(tempTime[1])
      this.userInfo.workExperience.push({ job, company, timeStart, timeEnd })
      this.modifyWorkIndex = -1
    },
    formateTime(time) {
      const date = new Date(time)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      if (month < 10) {
        month = '0' + month
      }
      return `${year}-${month}`
    },
    deleteWork(index) {
      this.userInfo.workExperience.splice(index, 1)
    },
    linkGoUp(index) {
      this.showAddLink = false
      const temp = this.userInfo.ownLink[index]
      this.userInfo.ownLink[index] = this.userInfo.ownLink[index - 1]
      this.userInfo.ownLink[index - 1] = temp
    },
    deleteLink(index) {
      this.userInfo.ownLink.splice(index, 1)
    },
    contentGoUp(index) {
      this.showAddContent = false
      const temp = this.userInfo.ownContent[index]
      this.userInfo.ownContent[index] = this.userInfo.ownContent[index - 1]
      this.userInfo.ownContent[index - 1] = temp
    },
    deleteContent(index) {
      this.userInfo.ownContent.splice(index, 1)
    },
    addLink() {
      const { title, href } = this.newLink
      if (!title || !href) {
        return this.$message({
          message: '请完善信息',
          grouping: true,
          type: 'warning'
        })
      }
      this.userInfo.ownLink.push({ title, href })
      this.showAddLink = false
    },
    addContent() {
      const { title, content } = this.newContent
      if (!title || !content) {
        return this.$message({
          message: '请完善信息',
          grouping: true,
          type: 'warning'
        })
      }
      this.userInfo.ownContent.push({ title, content })
      this.showAddContent = false
    },
    saveModify() {
      this.userInfo.ownLink = this.userInfo.ownLink.filter(item => item.title && item.href)
      this.userInfo.ownContent = this.userInfo.ownContent.filter(item => item.title && item.content)

      // 上传逻辑
      this.store.userInfo = clone(this.userInfo)
      this.$message({
        message: '修改成功',
        type: 'success'
      })
      this.$router.go(-1)

    }
  },
  computed: {
    bannerImg() {
      return this.userInfo.bannerImg
    },
    avatarURL() {
      return this.userInfo.avatarURL
    },
    province() {
      return this.userInfo?.address?.province
    },
    allProvinces() {
      return getAllProvinces()
    },
    allCitys() {
      return getCitys(this.province)
    },
    showBthOfAccountLinks() {
      return !this.isMoreAccountLinks && this.showAccountLinks.length !== accountLinks.length
    },
    showAccountLinks() {
      if (!this.isMoreAccountLinks) {
        return [
          ...accountLinks.filter(item => this.isLinked(item)),
          ...accountLinks.filter(item => !this.isLinked(item) && item.isShowFirst)
        ]
      } else {
        return [
          ...accountLinks.filter(item => this.isLinked(item)),
          ...accountLinks.filter(item => !this.isLinked(item) && item.isShowFirst),
          ...accountLinks.filter(item => !this.isLinked(item) && !item.isShowFirst)
        ]
      }
    },
    workExperience() {
      return this.userInfo.workExperience
    },
    ownLink() {
      return this.userInfo.ownLink
    },
    ownContent() {
      return this.userInfo.ownContent
    }
  },
  created() {
    this.userInfo = clone(this.store.userInfo)
  },
  mounted() {
    uploader(this.$refs.uploadBanner, (file) => {
      imgFileToBase64(file, (base64) => {
        this.userInfo.bannerImg = base64
      })
    })
    uploader(this.$refs.uploadAvatar, (file) => {
      imgFileToBase64(file, (base64) => {
        this.userInfo.avatarURL = base64
      })
    })
  },
  watch: {
    province() {
      const city = this.userInfo?.address?.city
      if (this.allCitys.length === 0) {
        this.userInfo.address.city = null
      }
      if (!this.allCitys.includes(city)) {
        this.userInfo.address.city = this.allCitys[0]
      }
    },
    modifyWorkIndex(to, from) {
      // 保存更新
      if (from >= 0 && from < this.workExperience.length) {
        const { job, company, tempTime } = this.newWorkExperience
        job && (this.userInfo.workExperience[from].job = job)
        company && (this.userInfo.workExperience[from].company = company)
        if (tempTime && tempTime.length === 2 && tempTime[0]) {
          this.userInfo.workExperience[from].timeStart = this.formateTime(tempTime[0])
          this.userInfo.workExperience[from].timeEnd = this.formateTime(tempTime[1])
        }
      }
      // 重置
      if (to >= 0 && to < this.workExperience.length) {
        this.newWorkExperience = {
          job: this.workExperience[to].job,
          company: this.workExperience[to].company,
          tempTime: [
            new Date(this.workExperience[to].timeStart),
            new Date(this.workExperience[to].timeEnd)
          ]
        }
      } else {
        this.newWorkExperience = {
          job: '',
          company: '',
          tempTime: null
        }
      }
    },
    showAddLink(to, from) {
      if (!to && from) {
        this.newLink = {
          title: '',
          href: ''
        }
      }
    },
    showAddContent(to, from) {
      if (!to && from) {
        this.newContent = {
          title: '',
          content: ''
        }
      }
    }
  }
}

</script>

<template>
  <div :class="$style.control">
    <span @click="() => $router.go(-1)">返回</span>
    <span @click="saveModify">保存修改</span>
  </div>
  <div :class="$style.container">
    <div>
      <div :class="$style.sideBar">
        <div v-for="(item, index) of menus" :key="item.toId" @click="() => switchScrollView(item.toId, index)">
          <span :class="index === selectMenuIndex ? $style.activeMenu : ''">{{ item.title }}</span>
        </div>
      </div>
      <div :class="$style.banner">
        <img :src="bannerImg" v-if="bannerImg" />
        <span>添加横幅图像</span>
        <span>最佳尺寸 1920*400px</span>
      </div>
      <div :class="$style.uploadBanner">
        <span ref="uploadBanner">
          <span>
            <UploadTwo />
          </span>
          上传图片
        </span>
      </div>
      <div :class="$style.content">
        <div id="baseInfo">
          <div>基本信息</div>
          <div :class="$style.baseInfo">
            <div>
              <img :src="avatarURL">
              <span ref="uploadAvatar">
                <span>
                  <UploadTwo />
                </span>
                替换
              </span>
            </div>
            <div class="cutLineY" style="height: inherit;"></div>
            <div>
              <div>
                <span>昵称</span>
                <el-input v-model="userInfo.nickname" />
              </div>
              <div>
                <span>职业</span>
                <el-input v-model="userInfo.job" placeholder="例如：沙盘设计师" />
              </div>
              <div>
                <span>公司</span>
                <el-input v-model="userInfo.company" />
              </div>
              <div>
                <span>地址</span>
                <div>
                  <el-select v-model="userInfo.address.province" placeholder="省份">
                    <el-option v-for="item of allProvinces" :key="item" :value="item" />
                  </el-select>
                  <el-select v-model="userInfo.address.city" placeholder="城市">
                    <el-option v-for="item of allCitys" :key="item" :value="item" />
                  </el-select>
                </div>
              </div>
              <div>
                <span>网站URL</span>
                <el-input v-model="userInfo.website" />
              </div>

            </div>
          </div>
        </div>
        <div id="accountLink">
          <div>账户连接</div>
          <div :class="$style.accountLink">
            <div v-for="item of showAccountLinks" :key="item.name">
              <div :class="$style.accountLinkDes">
                <span>
                  <Shrink />
                </span>
                <!-- 自行添加 -->
                <span v-if="item.name === 'wechat'">
                  <Wechat />
                </span>
                <span v-if="item.name === 'github'">
                  <Github />
                </span>
                <span v-if="item.name === 'QQ'">
                  <QQ />
                </span>
                <span>{{ item.description }}</span>
              </div>
              <div :class="[$style.accountLinkCrl, isLinked(item) ? $style.cancel : '']">
                <span v-if="isLinked(item)" @click="item.onDisconnect">取消</span>
                <span v-else @click="item.onConnect">连接</span>
              </div>
            </div>
            <span v-if="showBthOfAccountLinks" @click="() => isMoreAccountLinks = true"
              :class="$style.moreAccountLinks">
              查看更多
              <span>
                <ArrowDown />
              </span>
            </span>
          </div>
        </div>
        <div id="about">
          <div>关于我</div>
          <div :class="$style.about">
            <el-input v-model="this.userInfo.about" :rows="10" type="textarea" placeholder="关于您的描述..." />
          </div>
        </div>
        <div id="job">
          <div>工作经历</div>
          <div :class="$style.job">
            <div v-for="(work, index) of workExperience" :key="work">
              <template v-if="modifyWorkIndex !== index">
                <div :class="$style.showWork">
                  于 <span>{{ work.timeStart }}</span>
                  至 <span>{{ work.timeEnd }}</span>
                  在 <span>{{ work.company }}</span>
                  担任 <span>{{ work.job }}</span>
                </div>
                <div :class="$style.workContorl">
                  <span @click="() => modifyWorkIndex = index">修改</span>
                  <span @click="() => deleteWork(index)" :class="$style.workDelete">删除</span>
                  <span v-show="index !== 0" @click="() => workGoUp(index)">上移</span>
                </div>
              </template>
              <template v-else>
                <div :class="$style.showModifyWork">
                  <el-date-picker v-model="newWorkExperience.tempTime" type="monthrange" range-separator="至"
                    start-placeholder="起始时间" end-placeholder="终止时间" unlink-panels />
                  <div>
                    <el-input v-model="newWorkExperience.company" placeholder="公司" />
                    <br /><br />
                    <el-input v-model="newWorkExperience.job" placeholder="职务" />
                  </div>
                </div>
                <div :class="$style.workContorl">
                  <span @click="modifyWorkIndex = -1">退出修改</span>
                </div>
              </template>
            </div>
            <div v-if="modifyWorkIndex === workExperience.length">
              <div :class="$style.showModifyWork">
                <div>
                  <el-date-picker v-model="newWorkExperience.tempTime" type="monthrange" range-separator="至"
                    start-placeholder="起始时间" end-placeholder="终止时间" unlink-panels />
                </div>
                <div>
                  <el-input v-model="newWorkExperience.company" placeholder="公司" />
                  <br /><br />
                  <el-input v-model="newWorkExperience.job" placeholder="职务" />
                </div>
              </div>
              <div :class="$style.workContorl">
                <span @click="addWorkExperience">保存</span>
                <span @click="() => modifyWorkIndex = -1">取消</span>
              </div>
            </div>
            <span @click="() => modifyWorkIndex = workExperience.length">
              <span>
                <Pen />
              </span>
              添加工作经历
            </span>
          </div>
        </div>
        <div id="ownLink">
          <div>自定义链接</div>
          <div :class="$style.ownLink">
            <div v-for="(item, index) of ownLink" :key="item">
              <div>
                标题：
                <el-input v-model="item.title" />
              </div>
              <div>
                链接：
                <el-input v-model="item.href" />
              </div>
              <div :class="$style.workContorl">
                <span :class="$style.workDelete" @click="() => deleteLink(index)">删除</span>
                <span v-if="index !== 0" @click="() => linkGoUp(index)">上移</span>
              </div>
            </div>
            <div v-if="showAddLink">
              <div>
                标题：
                <el-input v-model="newLink.title" />
              </div>
              <div>
                链接：
                <el-input v-model="newLink.href" />
              </div>
              <div :class="$style.workContorl">
                <span @click="addLink">保存</span>
                <span @click="() => showAddLink = false">取消</span>
              </div>
            </div>
            <span @click="() => showAddLink = true">
              <span>
                <Pen />
              </span>
              添加链接
            </span>
          </div>
        </div>
        <div id="ownContent">
          <div>自定义内容</div>
          <div :class="[$style.ownLink, $style.ownContent]">
            <div v-for="(item, index) of ownContent" :key="item">
              <div>
                标题：
                <el-input v-model="item.title" />
              </div>
              <div>
                内容：
                <el-input v-model="item.content" />
              </div>
              <div :class="$style.workContorl">
                <span :class="$style.workDelete" @click="() => deleteContent(index)">删除</span>
                <span v-if="index !== 0" @click="() => contentGoUp(index)">上移</span>
              </div>
            </div>
            <div v-if="showAddContent">
              <div>
                标题：
                <el-input v-model="newContent.title" />
              </div>
              <div>
                内容：
                <el-input v-model="newContent.content" />
              </div>
              <div :class="$style.workContorl">
                <span @click="addContent">保存</span>
                <span @click="() => showAddContent = false">取消</span>
              </div>
            </div>
            <span @click="() => showAddContent = true">
              <span>
                <Pen />
              </span>
              添加内容
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.control {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control span {
  padding: 10px 20px 10px 20px;
  color: #fff;
  border-radius: 20px;
  background-color: var(--theme-color);
  transition: .3s;
  cursor: pointer;
  margin: 0 5px 0 5px;
}

.control span:hover {
  box-shadow: #ccc 5px 5px 5px;
}

.container {
  position: relative;
  margin-top: 15px;
  left: 0;
  top: 0;
  background-color: #eee9;
}

.banner {
  height: 350px;
  position: relative;
  background: linear-gradient(to bottom, #1c1c1c, #828282);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #fff;
  box-shadow: 0 0 5px 5px #fff inset;
}

.banner img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 5px 5px #fff inset;
}

.uploadBanner {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 100px;
  margin-top: 20px;
  padding: 5px 10px 5px 10px;
  color: var(--theme-color);
}

.uploadBanner svg {
  fill: var(--theme-color);
}

.uploadBanner>span {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.uploadBanner>span>span {
  width: 25px;
  height: 25px;
}

.sideBar {
  position: fixed;
  z-index: 1;
  top: 200px;
  left: 200px;
  width: 300px;
  border: 1.5px solid #ddd;
  background-color: #fff;
}

.sideBar>div {
  height: 40px;
  border-top: 1.5px solid #ddd;
  position: relative;
  cursor: pointer;
}

.sideBar>div:first-child {
  border-top: none !important;
}

.sideBar>div>span {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: #666;
  font-size: 17px;
  transition: .3s;
}

.sideBar>div>span::before {
  content: "";
  position: absolute;
  height: 42px;
  width: 2px;
  background-color: none;
  top: -2px;
  left: -2px;
  transition: .3s;
}

.activeMenu {
  color: var(--theme-color) !important;
}

.activeMenu::before {
  content: "";
  position: absolute;
  height: 42px;
  width: 2px;
  background-color: var(--theme-color);
  top: -2px;
  left: -2px;
}

.content {
  position: relative;
  padding-top: 20px;
  padding-bottom: 150px;
  left: 530px;
  width: calc(100vw - 800px);
  min-width: 750px;
}

.content>div {
  margin-bottom: 100px;
  background-color: #fff;
  border: 1.5px solid #ddd;
  padding: 30px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
}

.content>div>:first-child {
  margin-bottom: 10px;
  color: #666;
}

.content input {
  font-size: 16px;
}

.baseInfo {
  display: flex;
}

.baseInfo>:first-child {
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.baseInfo>:first-child>img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.baseInfo>:first-child>span {
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: var(--theme-color);
  margin-left: -50px;
  cursor: pointer;
}

.baseInfo>:first-child>span>span {
  width: 20px;
  height: 20px;
}

.baseInfo>:first-child svg {
  fill: var(--theme-color);
}

.baseInfo>:nth-child(3) {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 20px 60px 0 60px;
}

.baseInfo>:nth-child(3)>div {
  height: 80px;
  display: flex;
  flex-direction: column;
}

.baseInfo>:nth-child(3)>div>span {
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
}

.baseInfo>:nth-child(3)>div>:nth-child(2) {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.baseInfo>:nth-child(3)>div>:nth-child(2)>div {
  width: 48%;
}

.accountLink {
  width: 85%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.accountLink>div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  border-bottom: 2px solid #ddd;
}

.accountLinkDes {
  display: flex;
  align-items: center;
  margin-left: 30px;
}

.accountLinkDes>span:first-child svg {
  width: 25px;
  height: 25px;
  fill: #666;
}

.accountLinkDes>span:nth-child(2) svg {
  width: 40px;
  height: 40px;
  fill: #666;
  margin-left: 50px;
}

.accountLinkDes>span:nth-child(3) {
  font-size: 18px;
  margin-left: 10px;
  color: #828282;
}

.accountLinkCrl {
  width: 50px;
  padding: 8px 16px 8px 16px;
  background-color: var(--theme-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 18px;
  color: #fff;
  transition: .3s;
  cursor: pointer;
}

.cancel {
  background-color: rgb(255, 105, 105);
}

.accountLinkCrl:hover {
  box-shadow: #ccc 5px 5px 5px;
}

.moreAccountLinks {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  color: #666;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  transition: .3s;
}

.moreAccountLinks:hover {
  background-color: #eee;
}

.moreAccountLinks svg {
  width: 20px;
  height: 20px;
}

.about {
  margin-top: 10px;
}

.about textarea {
  font-size: 16px;
  color: #777;
}

.job {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.job>div {
  border-bottom: 1px solid #eee;
  padding: 5px 10px 10px 10px;
  border-radius: 10px;
  transition: .3s;
  animation: show 1s;
}

@keyframes show {
  0% {
    opacity: 0;
    margin-left: 200px;
  }

  100% {
    opacity: 1;
    margin-left: 0;
  }
}

.job>div:hover {
  background-color: #eee;
}

.job>span {
  width: 200px;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: var(--theme-color);
  margin-top: 30px;
  cursor: pointer;
}

.job>span svg {
  width: 25px;
  height: 25px;
  fill: var(--theme-color);
}

.showWork {
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #777;
}

.showWork span {
  font-size: 20px;
  color: #111;
  padding: 0 5px 0 5px;
  text-decoration: underline;
}

.workContorl {
  height: 30px;
  display: flex;
  align-items: center;
}

.workContorl span {
  padding: 5px 10px 5px 10px;
  background-color: var(--theme-color);
  color: #fff;
  border-radius: 10px;
  margin-right: 20px;
  transition: .3s;
  cursor: pointer;
}

.workContorl span:hover {
  box-shadow: #ccc 5px 5px 5px;
}

.showModifyWork {
  display: flex;
  flex-direction: column;
  animation: show 1s;
}

.showModifyWork>div {
  margin: 10px 0 10px 0;
  width: 600px;
}

.workDelete {
  background-color: rgb(255, 105, 105) !important;
}

.ownLink {
  display: flex;
  flex-direction: column;
}

.ownLink>div {
  display: flex;
  flex-direction: column;
  transition: .3s;
  border-bottom: 1px solid #eee;
  padding: 5px 10px 10px 10px;
  border-radius: 10px;
  font-size: 14px;
  color: #666;
  animation: show 1s;
}

.ownLink>div:hover {
  background-color: #eee;
}

.ownLink>div>div {
  display: flex;
  margin: 10px 0 10px 0;
  align-items: center;
}

.ownLink>div>div>div {
  width: 500px;
}

.ownLink>span {
  width: 200px;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: var(--theme-color);
  margin-top: 30px;
  cursor: pointer;
}

.ownLink>span svg {
  width: 25px;
  height: 25px;
  fill: var(--theme-color);
}

.ownContent>div>div>div {
  width: 700px;
}
</style>