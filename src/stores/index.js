import { defineStore } from 'pinia'

const useStore = defineStore("store", {
  state: () => {
    return {
      userInfo: {
        nickname: "清明",
        email: "1685459748@qq.com",
        avatarURL: "https://img.js.design/assets/img/5ff80374c88e97e2a029378b.png",
        address: '济南',
        about: '风景园林沙盘设计师',
        views: '2',
        likes: '1',
        followers: '2',
      },
      letters: [
        {
          id: "1",
          nickname: "陈礼",
          email: "1715614103@qq.com",
          avatarURL: "https://img.js.design/assets/img/5fcef81c2e35a164425dd505.png",
          content: "很喜欢您的作品。",
          time: "2022年6月24日"
        },
        {
          id: "2",
          nickname: "陈礼",
          email: "1715614103@qq.com",
          avatarURL: "https://img.js.design/assets/img/5fcef81c2e35a164425dd505.png",
          content: "很喜欢您的作品。",
          time: "2022年6月24日"
        },
        {
          id: "3",
          nickname: "陈礼",
          email: "1715614103@qq.com",
          avatarURL: "https://img.js.design/assets/img/5fcef81c2e35a164425dd505.png",
          content: "很喜欢您的作品。",
          time: "2022年6月24日"
        }
      ],
      messages: [
        {
          id: "1",
          nickname: "陈礼",
          email: "1715614103@qq.com",
          avatarURL: "https://img.js.design/assets/img/5fcef81c2e35a164425dd505.png",
          content: "点赞并评论了您的作品。",
          time: "2022年6月24日"
        },
        {
          id: "2",
          nickname: "陈礼",
          email: "1715614103@qq.com",
          avatarURL: "https://img.js.design/assets/img/5fcef81c2e35a164425dd505.png",
          content: "点赞并评论了您的作品。",
          time: "2022年6月24日"
        },
        {
          id: "3",
          nickname: "陈礼",
          email: "1715614103@qq.com",
          avatarURL: "https://img.js.design/assets/img/5fcef81c2e35a164425dd505.png",
          content: "点赞并评论了您的作品。",
          time: "2022年6月24日"
        }
      ],
      searchList: [
        {
          id: '1',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb2f7713ca8b45a04e7.png'
        },
        {
          id: '2',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb2e6f274b2627bfc0e.png'
        },
        {
          id: '3',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb1e6f2745f6a7bfbf6.png'
        },
        {
          id: '4',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb1e6f27448b37bfc00.png'
        },
        {
          id: '5',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb2b332475d44cabfea.png'
        },
        {
          id: '6',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb2f59c9fd69e9aedb3.png'
        },
        {
          id: '7',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb2e6f274256e7bfc0a.png'
        },
        {
          id: '8',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb1b332477929cabfdf.png'
        },
        {
          id: '9',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb2f7713c4d815a04e6.png'
        },
        {
          id: '10',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb20703be81ff09dddb.png'
        },
        {
          id: '11',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb2b33247fff4cabfe6.png'
        },
        {
          id: '12',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb2f7713c0bd95a04eb.png'
        },
      ]
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