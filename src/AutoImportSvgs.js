// 账户链接需要使用的 svg 全局导入

const titleCase = str => str.slice(0, 1).toUpperCase() + str.slice(1)
const moduleFiles = import.meta.glob('./assets/links/*.svg')

export default (app) => {
  for (let path of Object.keys(moduleFiles)) {
    const name = path.match(/[^/]+?(?=.svg)/)[0]
    import(path + "?vueComponent" /* @vite-ignore */).then(component => {
      app.component(
        titleCase(name),
        component
      )
    })
  }
}
