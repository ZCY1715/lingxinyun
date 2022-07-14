import addressData from './addressData'

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
    if (province === city) {
      return city
    }
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

const subfixs = ['市', '省', '壮族自治区', '回族自治区', '维吾尔自治区', '自治区', '特别行政区']
const secondSubfits = ['土家族苗族自治州', '黎族苗族自治县', '土家族苗族自治县', '苗族土家族自治县', '藏族羌族自治州', '哈尼族彝族自治州', '布依族苗族自治州', '苗族侗族自治州', '壮族苗族自治州', '傣族景颇族自治州', '蒙古族藏族自治州', '朝鲜族自治州', '黎族自治县', '土家族自治县', '藏族自治州', '彝族自治州', '傣族自治州', '白族自治州', '傈僳族自治州', '回族自治州', '蒙古自治州', '柯尔克孜自治州', '哈萨克自治州', '市', '县', '特别行政区', '林区', '新区', '地区', '区', '盟', '省']

// 省份
export function getAllProvinces() {
  const provinces = Object.keys(addressData)
  return provinces.map(item => {
    for (let subfit of subfixs) {
      if (item.endsWith(subfit)) {
        return item.replace(subfit, '')
      }
    }
    return item
  })
}

// 城市
export function getCitys(province) {
  for (let subfit of subfixs) {
    let key = province + subfit
    if (addressData[key] !== undefined) {
      const target = addressData[key]
      let result = []
      if (target['市辖区'] !== undefined) {
        result = [...result, ...target['市辖区'], ...target['县']]
      } else {
        result = [...Object.keys(target)]
        let index = result.findIndex(item => item === "省直辖县级行政区划")
        if (~index) {
          result.splice(index, 1)
          result = [...result, ...target["省直辖县级行政区划"]]
        }
        index = result.findIndex(item => item === "自治区直辖县级行政区划")
        if (~index) {
          result.splice(index, 1)
          result = [...result, ...target["自治区直辖县级行政区划"]]
        }
      }
      return result.map(item => {
        if (item.length <= 2) {
          return item
        }
        for (let subfit of secondSubfits) {
          if (item.endsWith(subfit)) {
            return item.replace(subfit, '')
          }
        }
        return item
      })
    }
  }
  return []
}
