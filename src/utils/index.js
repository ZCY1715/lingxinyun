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
  let letters = "*abcdefghjklmnopqrstwxyz".split('')
  let zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('')
  letters.forEach((letter, i) => {
    if ((!zh[i - 1] || zh[i - 1].localeCompare(word, "zh") <= 0) && word.localeCompare(zh[i], "zh") == -1) {
      callback(letter.toUpperCase())
    }
  })
}

// 点赞数、浏览数等展示时单位换算
export function unitConverter(num) {
  if (num < 1000) {
    return num + ''
  }
  return (num / 1000).toFixed(1) + '千'
}

// 地址展示整理
export function addressMerge(province, city) {
  if (province && city) {
    return [province, city].join(" • ")
  }
  if (province)
    return province
  if (city)
    return city
  return "未知"
}

/**
 * 选择图片上传
 * @param {HTMLElement} el 
 * @param {Function} callback 
 */
export function uploader(el, callback) {
  const oRealButton = document.createElement("input");
  oRealButton.setAttribute("type", "file")
  oRealButton.setAttribute("accept", "image/jpeg,image/jpg,image/png")
  oRealButton.style.display = "none"
  oRealButton.addEventListener("change", () => {
    let file = oRealButton.files[0]
    callback && callback(file)
  })
  el.parentNode.appendChild(oRealButton)
  el.addEventListener("click", () => {
    oRealButton.click()
  });
}

// 对象克隆
export const clone = (obj) => JSON.parse(JSON.stringify(obj))

// input File对象转 base64
export function imgFileToBase64(file, callback) {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function (e) {
    const base64String = e.target.result
    callback(base64String)
  }
}