import { defineStore } from 'pinia'

const useStore = defineStore("store", {
  state: () => {
    return {
      userInfo: {
        nickname: "清明",
        email: "1685459748@qq.com",
        avatarURL: "https://img.js.design/assets/img/5ff80374c88e97e2a029378b.png",
        messages: [
          // {
          //   id: "1",
          //   nickname: "陈礼",
          //   email: "1715614103@qq.com",
          //   avatarURL: "https://img.js.design/assets/img/5fcef81c2e35a164425dd505.png",
          //   content: "点赞并评论了您的作品。",
          //   time: "2022年6月24日"
          // }
        ],
        letters: [
          // {
          //   id: "1",
          //   nickname: "陈礼",
          //   email: "1715614103@qq.com",
          //   avatarURL: "https://img.js.design/assets/img/5fcef81c2e35a164425dd505.png",
          //   content: "很喜欢您的作品。",
          //   time: "2022年6月24日"
          // }
        ],
      }
    }
  },

  getters: {

  },

  actions: {

  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "",
        storage: localStorage, // sessionStorage 
        // paths: [] 
      }
    ]
  }
})

export default useStore