// 支持的账户链接方式
// name 对应着 assets/links 下的 svg 图标，且作为唯一标识
export const accountLinks = [
  {
    name: 'wechat',
    description: '微信',
    isShowFirst: true,
    onConnect: (uid) => { },
    onDisconnect: (uid) => { }
  },
  {
    name: 'github',
    description: 'Github',
    isShowFirst: true,
    onConnect: (uid) => { },
    onDisconnect: (uid) => { }
  },
  {
    name: 'QQ',
    description: 'QQ',
    isShowFirst: false,
    onConnect: (uid) => { },
    onDisconnect: (uid) => { }
  }
]