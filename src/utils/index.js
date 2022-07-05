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

// 设置自动平滑滚动至一定高度
export function setScrollTop(num) {
  window.scrollTo({ top: num, behavior: 'smooth' })
}

// 获取中文首字母
export function searchFirstLetter(word, callback) {
  if (!String.prototype.localeCompare)
    callback(null);
  let letters = "*abcdefghjklmnopqrstwxyz".split('');
  let zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('');
  letters.forEach((letter, i) => {
    if ((!zh[i - 1] || zh[i - 1].localeCompare(word, "zh") <= 0) && word.localeCompare(zh[i], "zh") == -1) {
      callback(letter.toUpperCase())
    }
  })
}

export function getSubfix(num) {
  if (num < 1000) {
    return num + ''
  }
  return (num / 1000).toFixed(1) + '千'
}


