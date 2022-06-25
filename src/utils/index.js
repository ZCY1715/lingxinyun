// 获取当前滚动条高度
export function getScrollTop() {
  let scrollTop = 0
  document.documentElement &&
    document.documentElement.scrollTop !== 0 &&
    (scrollTop = document.documentElement.scrollTop)
  document.body &&
    document.body.scrollTop !== 0 &&
    (scrollTop = document.body.scrollTop)
  return scrollTop
}

// 设置自动平滑滚动一定高度
export function setScrollTop(num) {
  window.scrollTo({ top: num, behavior: 'smooth' })
}