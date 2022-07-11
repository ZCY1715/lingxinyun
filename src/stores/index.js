import { defineStore } from 'pinia'

const useStore = defineStore("store", {
  state: () => {
    return {
      isLogin:true,
      userInfo: {
       
        uid: '123',
        nickname: "清明",
        email: "1685459748@qq.com",
        avatarURL: "https://img.js.design/assets/img/5ff80374c88e97e2a029378b.png",
        address: '济南',
        views: '2',
        likes: '1',
        followers: '2',
        // 自定义展示内容
        customContent: [
          {
            title: '关于我',
            content: '风景园林沙盘设计师'
          },
          {
            title: '合作邮箱',
            content: '1685459748@qq.com'
          }
        ],
        // 支持的账户链接
        accountLinks: [
          {
            id: "1",
            name: 'wechat',
            description: '微信',
            linked: true,
          }
        ]
      },
      works: {
        finished: [
          {
            id: '1',
            title: '寺庙沙盘',
            published: true,
            likes: '1',
            views: '2',
            img: 'https://s3-alpha-sig.figma.com/img/42f0/e669/a7c397e92d3b0ac037c6a27f2cb387e6?Expires=1658102400&Signature=UNl881uNG4-3djbyzMB-daNJV5u5hvSx05igDo0a-vF~Qo7jfzpJDx9eBaIGtzhDAHBZgE7McasMN2qD65oqBKmlaX83Mm51xwMaS06bEp05oGTut5yV4~i6XGn~5~a1Khic6t9jZaB9yx9frMONn8mgLWpT7IjtOL~0lHznHPGTv-2qdYkvqeLo7SRf-oWsx~aOU4XrfNyeYkvPYEX4GwNKE0f3vDvu~3Sk~QaxW9QfbPNzSziGGAE8hGsPSpQZydmlI0u570zCXImKHCmeqYPYqmVGj9ZwdDzV2ooAhMHfPfp4QngRFc~CRhluzFwUbPp1nhpW08akHGfGgdwIIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          },
          {
            id: '2',
            title: '花卉沙盘',
            published: true,
            likes: '5',
            views: '4',
            img: 'https://s3-alpha-sig.figma.com/img/783a/ed60/ee14d73541b6b3d01f7dfe6bd15e75e8?Expires=1658102400&Signature=eNhycoSdAUu~EtlxYbaV6HCb86OFy~9Am~sfPXhc40lTFEFqMHeUvJYYMPVSbC~1BtzY7QijpNHH3lGCyvxXhudbILReMMUDZbXsusIQLXNU9yLcz1oxxHOWZ8Kqcw~xBtNXPUvMZvsAuTwPD1VppM9v~2CC04WgmUE21f6dHqU6jiQrNjBXc2CR7csD-Wqb91X-2mOCyrpujd8mewL0ehH2HKu4x0wHll7XBuRvPyy61ZgiD60m9SXSMSfIVMXFZet7BjPY6Iiu54mNZywPniePyJ3F8B5tLwj2WyOiW-EbA0yEKy6Gt3csDP0qsP5pcdA9ZT-R1XI3tK~Z0A4f1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          },
          {
            id: '3',
            title: '沙滩沙盘',
            published: false,
            likes: '2',
            views: '7',
            img: 'https://s3-alpha-sig.figma.com/img/2f2e/8be8/2afa26d6176ee8a0c47da016687d7557?Expires=1658102400&Signature=WxyskXlrOzof1qyA6Ro5ULxvf~I9xKYqGkmstKYtIjTnFLPKtQ6e9WJ7vahH6Yu4YzfOceqODz78IGa7WzQ1eN96eJM1DaFDoCRHsx2jylF4zUeHUxfaQ-vR64AR~3z0ol~PKfxMRdmG4-Y8m-83Q7-GpRViTDaYb~ETVI5adAEuyWhBRzv3s3rHxsanXtTdwLwbGwQcxj7tjUYQ8f2Yags-H0aeqbaTJjw9wReSgJh~8A4W~mRZphJU08UEjeLNPSweq11FB7gjtxUOlJQWMYV4kqfpybcTX10rlNCAxavOSPqFBt29k7IE1asnqO68WH29mENNsVAMLDXVRx2fRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          },
          {
            id: '4',
            title: '瀑布沙盘',
            published: false,
            likes: '6',
            views: '3',
            img: 'https://s3-alpha-sig.figma.com/img/c4e1/7ac3/42f5635f071eb058dd87210aa47c8892?Expires=1658102400&Signature=bsyNuMbhF6NSSnYBMsP13Jc-9lJc-0cEny5m3BhUjjw5hkmXMMXTvzM~Z7ISOsGzmY3z1EjaLMAimJfnV5Tu04blE51qWF~cK-c1-oZzKugp8yIZDWRwdhSTQzfhnwU5FRaH8JSw4xYUu~xHI8G0rBIJn4zxk5pjdODmBrsNkl9ka-yLlgn3aDjtiYHajpj~d0QjgGepRpjaYKjTOBNvDRHdHwfsvFMVwPWEWp1wywUuN28-p-vISt-7~jeoGyaR9p0ObM9ukDUWv8aUFVzLP4m1bxT2rj-eodlLQ86ubAQsB1curPpHRCw6PCprweQwQEIs4-c06owfSxpUgt-IMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          },
          {
            id: '5',
            title: '森林沙盘',
            published: false,
            likes: '5',
            views: '8',
            img: 'https://s3-alpha-sig.figma.com/img/a88a/e711/d903916bf284b95a3ec067e54cd21f39?Expires=1658102400&Signature=F-VgIuwXgGo9G3rLiy6-C49KY9pl7uMZFx4qi-~TZPpgxvfQshK3BbUWA0xwjlW7YPrKm6zNQJQ~2WCSeYg~GoOWW-tFmvYPytTUL-xBGktih0CujNV~6wjafK~XkQto31iut6lY8teS3yiA98MdkNF~wo9kmeJvYhdQ1HIpPD5uWPYkeIgpaouw8MuKmKObGtFCkGdW~c57KmiauSGs7KJ~TDMtPrvx~WUFd6w7AqpYRhe1AYys9U5NUl3znmjH2szkDkgdFRFT6bKWxp~ypw7Su45ORcjcQstSzKSuP7i9n24nkd04RSVHSMJEVGA7384B5935gSwkKerIXC-MNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          }
        ],
        draft: [],
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
      ],
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
        // paths: ['userInfo']
      }
    ]
  }
})

export default useStore