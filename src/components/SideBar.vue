<script>
import { addressMerge } from '../utils'
import { accountLinks } from '../utils/constants'
import DefaultAvatar from '../assets/defaultAvatar.png'
import Address from '../assets/basic/address.svg?vueComponent'
import Pen from '../assets/basic/pen.svg?vueComponent'
import Bulb from '../assets/basic/bulb.svg?vueComponent'
import Jump from '../assets/basic/jump.svg?vueComponent'
import useStore from '../stores'
import FollowPanel from './FollowPanel.vue'
import Wechat from '../assets/links/wechat.svg?vueComponent'
import QQ from '../assets/links/QQ.svg?vueComponent'
import Github from '../assets/links/github.svg?vueComponent'


export default {
  data() {
    return {
      store: useStore(),
      showFollowPanel: false,
      // 0为关注列表,1为粉丝列表
      followPanelType: 0,
    }
  },
  props: ['userInfo'],
  components: { Address, Pen, Bulb, Jump, Wechat, QQ, Github, FollowPanel },
  computed: {
    uid() {
      return this.userInfo.uid
    },
    isOwn() {
      return this.uid === this.store.uid
    },
    avatarURL() {
      return this.userInfo.avatarURL || DefaultAvatar
    },
    website() {
      return this.userInfo.website
    },
    nickname() {
      return this.userInfo.nickname || '用户' + this.uid
    },
    // 判断是否关注了
    isFollowed() {
      return false
    },
    views() {
      if (typeof this.userInfo.views !== "number") {
        return '...'
      }
      return this.userInfo.views
    },
    likes() {
      if (typeof this.userInfo.likes !== "number") {
        return '...'
      }
      return this.userInfo.likes
    },
    followers() {
      if (typeof this.userInfo.followers !== "number") {
        return '...'
      }
      return this.userInfo.followers
    },
    fans() {
      if (typeof this.userInfo.fans !== "number") {
        return '...'
      }
      return this.userInfo.fans
    },
    accountLinks() {
      return accountLinks.map(item => {
        const { name, description } = item
        return { name, description }
      }).filter(item => this.userInfo.accountLinks.includes(item.name))
    },
    customContent() {
      return this.userInfo.customContent
    },
    address() {
      const { province, city } = this.userInfo?.address || {}
      return addressMerge(province, city)
    },
    about() {
      return this.userInfo.about
    },
    email() {
      return this.userInfo.email
    },
    job() {
      return this.userInfo.job
    },
    company() {
      return this.userInfo.company
    },
    workExperience() {
      return this.userInfo.workExperience
    },
    ownLink() {
      return this.userInfo.ownLink
    },
    ownContent() {
      return this.userInfo.ownContent || []
    }
  },
  methods: {
    // 关注
    beFollowed() {

    },
    // 取关
    beDisFollowed() {

    },
    // 去往私聊界面
    toLetterPage() {

    },
    showFans() {
      console.log(1)
      this.showFollowPanel = true
      this.followPanelType = 1
    },
    showFollowers() {
      console.log(1)
      this.showFollowPanel = true
      this.followPanelType = 0
    }
  }
}
</script>

<template>
  <div :class="$style.siderBar">
    <div>
      <el-popover placement="right" width="100" trigger="hover" content="前往个人网站" v-if="website">
        <template #reference>
          <a :href="website" target="_blank">
            <img :src="avatarURL" />
          </a>
        </template>
      </el-popover>
      <img :src="avatarURL" v-else />
      <span>{{ nickname }}</span>
      <span>
        <span>
          <Address />
        </span>
        {{ address }}
      </span>
    </div>
    <!-- 分角色不同功能按键 -->
    <div v-if="isOwn">
      <div @click="() => $router.push({ name: 'ModifyUserInfoPage' })">
        <span>
          <Pen />
        </span>
        编辑您的个人资料
      </div>
      <div @click="() => $router.push({ name: 'CreateGame' })">
        <span>
          <Bulb />
        </span>
        构建您的沙盘游戏
      </div>
    </div>
    <div v-else>
      <div @click="isFollowed ? beDisFollowed : beFollowed">{{ isFollowed ? "取关" : "关注" }}</div>
      <div @click="toLetterPage">消息</div>
    </div>
    <div>
      <div>
        <span>作品查看次数</span>
        <span>{{ views }}</span>
      </div>
      <div>
        <span>好评</span>
        <span>{{ likes }}</span>
      </div>
      <div :class="$style.ownPageHover" v-if="isOwn" @click="showFans">
        <span>粉丝</span>
        <span>{{ fans }}</span>
      </div>
      <div v-else>
        <span>粉丝</span>
        <span>{{ fans }}</span>
      </div>
      <div :class="$style.ownPageHover" v-if="isOwn" @click="showFollowers">
        <span>关注</span>
        <span>{{ followers }}</span>
      </div>
    </div>
    <div v-if="isOwn">
      <div>账户链接</div>
      <div :class="$style.accountLinks">
        <div v-for="link of accountLinks" :key="link.name">
          <span>
            <Wechat v-if="link.name === 'wechat'" />
            <Github v-if="link.name === 'github'" />
            <QQ v-if="link.name === 'QQ'" />
          </span>
          {{ link.description }}
        </div>
      </div>
    </div>
    <div v-if="about">
      <div>关于我</div>
      <div :class="$style.about">
        <p>{{ about }}</p>
      </div>
    </div>
    <div v-if="email">
      <div>合作邮箱</div>
      <div>
        <p>{{ email }}</p>
      </div>
    </div>
    <div v-if="job">
      <div>现在的工作</div>
      <div :class="$style.job">
        <p>{{ job }}</p>
        <p v-if="company">
          {{ `—— ${company}` }}
        </p>
      </div>
    </div>
    <div v-if="workExperience.length !== 0">
      <div>工作经历</div>
      <div :class="$style.workExperience">
        <div v-for="(item, index) of workExperience" :key="index">
          <div> <span>{{ item.timeStart }}</span> ~ <span>{{ item.timeEnd }}</span></div>
          <div>于<span>{{ item.company }}</span></div>
          <div>担任<span>{{ item.job }}</span></div>
        </div>
      </div>
    </div>
    <div v-if="ownLink.length !== 0">
      <div>链接</div>
      <div :class="$style.ownLink">
        <div v-for="(item, index) of ownLink" :key="index">
          <a :href="item.href" target="_blank">
            <span>{{ item.title }}</span>
            <span>
              <Jump />
            </span>
          </a>
        </div>
      </div>
    </div>
    <div v-for="(item, index) of ownContent" :key="index">
      <div>{{ item.title }}</div>
      <div>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
  <FollowPanel @closeHandle="() => showFollowPanel = false" v-if="showFollowPanel" :type="followPanelType" />
</template>

<style module>
.siderBar {
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: #0003 3px 3px 15px;
  padding-bottom: 20px;
}

.siderBar>:first-child {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.siderBar>:first-child>:nth-child(1) {
  width: 95px;
  height: 95px;
  border-radius: 100%;
  margin-top: 30px;
}

.siderBar>:first-child>a>img {
  width: 95px;
  height: 95px;
  border-radius: 100%;
}

.siderBar>:first-child>:nth-child(2) {
  font-size: 22px;
  margin-top: 10px;
  text-align: center;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
}

.siderBar>:first-child>:nth-child(3) {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: .8;
  height: 25px;
  margin-top: 10px;
}

.siderBar>:first-child>:nth-child(3)>span {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
}

.siderBar>:nth-child(2) {
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.siderBar>:nth-child(2)>div {
  margin-top: 10px;
  width: 72%;
  height: 25px;
  padding: 5px 10px 5px 10px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 14px;
  color: #666;
  transition: .3s;
  cursor: pointer;
}

.siderBar>:nth-child(2)>div:hover {
  background-color: var(--theme-color);
  color: #fff;
}

.siderBar>:nth-child(2)>div:first-child>span {
  width: 16px;
  height: 16px;
  padding-right: 5px;
}

.siderBar>:nth-child(2)>div:nth-child(2)>span {
  width: 20px;
  height: 20px;
  padding-right: 5px;
}

.siderBar>:nth-child(2) svg {
  fill: #000;
  transition: .3s;
}

.siderBar>:nth-child(2)>div:hover svg {
  fill: #fff;
}

.siderBar>:nth-child(3) {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.siderBar>:nth-child(3)>div {
  display: flex;
  justify-content: space-between;
  margin: 5px 0 5px 0;
  padding: 3px 5px 3px 5px;
  font-weight: bold;
  font-size: 16px;
  transition: .3s;
  color: #555;
  border-radius: 5px;
}

.siderBar>:nth-child(3)>div:hover {
  background-color: #eee;
}

.ownPageHover {
  cursor: pointer;
}

.ownPageHover:hover {
  background-color: rgba(252, 209, 90, 0.5) !important;
}

.siderBar>:nth-of-type(n + 4) {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 10px;
}

.siderBar>:nth-of-type(n + 4)>:first-child {
  display: flex;
  justify-content: flex-start;
  margin-left: 30px;
  font-size: 12px;
  color: #777;
}

.siderBar>:nth-of-type(n + 4) p {
  margin: 10px 0 0 10px;
  padding-right: 10px;
  text-indent: calc(2em + 2px);
  font-size: 16px;
  color: #555;
}

.accountLinks {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.accountLinks>div {
  width: 76%;
  height: 30px;
  margin-top: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  transition: .3s;
  cursor: pointer;
}

.accountLinks>div:hover {
  background-color: #eee;
}

.accountLinks span {
  width: 20px;
  height: 20px;
  margin-left: -30px;
  margin-right: 5px;
}

.accountLinks svg {
  fill: #555;
}

.about {
  width: 80%;
  margin-left: 10%;
  margin-top: 10px;
  padding-bottom: 15px;
  border-radius: 5px;
  transition: .3s;
  box-sizing: content-box;
}

.about:hover {
  box-shadow: #aaa 0 0 3px inset;
}

.workExperience {
  margin-top: 10px;
  width: 80%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
}

.workExperience>div {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #888;
  padding: 3px 5px 3px 5px;
  transition: .3s;
  border-radius: 5px;
}

.workExperience>div:hover {
  background-color: #eee;
}

.workExperience>div>div {
  margin: 3px 0 3px 0;
}

.workExperience>div span {
  font-size: 16px;
  color: #666;
  padding: 0 5px 0 5px;
}

.ownLink {
  margin-top: 10px;
  width: 80%;
  margin-left: 10%;
  border: 1px solid #ddd;
}

.ownLink>div:not(:first-child) {
  border-top: 1px solid #ddd;
}

.ownLink>div:hover svg {
  fill: var(--theme-color);
}

.ownLink a {
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  color: #666;
  transition: .3s;
}

.ownLink>div:hover a {
  color: var(--theme-color);
}

.ownLink a>span {
  margin: 0 20px 0 20px;
}

.ownLink a>span:nth-child(2) {
  display: flex;
  align-items: center;
}

.ownLink svg {
  width: 20px;
  height: 20px;
  fill: #666;
  transition: .3s;
}
</style>