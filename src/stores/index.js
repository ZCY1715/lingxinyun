import { defineStore } from 'pinia'

const useStore = defineStore("store", {
  state: () => {
    return {
      token: '',
      isLogin: true,
      userInfo: {
        nickname: "清明",
        uid: '123',
        email: "1685459748@qq.com",
        about: '你好，欢迎交流~',
        job: '风景园林沙盘设计师',
        company: '聆心云公司',
        workExperience: [
          {
            job: '风景园林沙盘设计师',
            company: '聆心云公司',
            timeStart: '2019-09',
            timeEnd: '2021-07'
          },
          {
            job: '赛博朋克沙盘设计师',
            company: '聆心云公司',
            timeStart: '2021-09',
            timeEnd: '2023-07'
          }
        ],
        website: '',
        avatarURL: "https://img.js.design/assets/img/5ff80374c88e97e2a029378b.png",
        bannerImg: '',
        address: {
          province: '山东',
          city: '济南',
        },
        views: 2,
        likes: 1,
        followers: 2,
        fans: 4,
        // 账户链接
        accountLinks: [
          'wechat'
        ],
        // 自定义链接
        ownLink: [
          {
            title: '微博',
            href: 'https://weibo.com'
          },
          {
            title: '豆瓣',
            href: 'https://douban.com'
          }
        ],
        // 自定义展示内容
        ownContent: [
          {
            title: '个人说明',
            content: '非诚勿扰，谢谢'
          },
          {
            title: '合作请联系',
            content: '蒋老师 - 8208208820'
          }
        ],
        // 不超过 10 项
        ofenUseSearchStyleTypes: ['风景园林', '动物', '校园', '赛博朋克', '人物', '建筑']
      },
      works: {
        finished: [
          {
            id: '1',
            title: '寺庙沙盘',
            published: true,
            likes: '1',
            views: '2',
            tags: [],
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
          },

        ],
        draft: [],
      },
      letters: [
        {
          id: "1",
          uid: '',
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
          uid: '',
          nickname: "陈礼",
          email: "1715614103@qq.com",
          avatarURL: "https://img.js.design/assets/img/5fcef81c2e35a164425dd505.png",
          content: "点赞并评论了您的作品。",
          time: "2022年6月24日"
        }
      ],
      // 支持的搜索风格类型
      searchStyleTypes: ['风景园林', '动物', '校园', '赛博朋克', '人物', '建筑'],

      searchList: [
        {
          id: '1',
          uid: '',
          sandId: '',
          nickname: '清明',
          title: '社会人物沙盘',
          likes: 1500,
          views: 15000,
          img: 'https://img.js.design/assets/img/62b3efb2f7713ca8b45a04e7.png'
        }
      ],

    }
  },

  getters: {
    uid() {
      return this.userInfo?.uid
    }
  },

  actions: {
  },

  persist: {
    enabled: true,
    storage: localStorage,
    strategies: [
      {
        storage: localStorage, // sessionStorage 
        paths: ['userInfo']
      }
    ]
  }
})

export default useStore