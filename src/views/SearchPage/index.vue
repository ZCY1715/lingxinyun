<script>
import Search from '../../assets/basic/search.svg?vueComponent'
import { markRaw } from 'vue'
import { ClickOutside } from 'element-plus'
import { searchFirstLetter, unitConverter } from '../../utils'
import useStore from '../../stores'
markRaw(Search)
import Signal from '../../assets/basic/signal.svg?vueComponent'
import ArrowDown from '../../assets/basic/arrowDown.svg?vueComponent'
import Like from '../../assets/basic/like.svg?vueComponent'
import View from '../../assets/basic/view.svg?vueComponent'

export default {
  data() {
    return {
      Search: Search,
      searchValue: '',
      searchTypes: ['沙盘', '沙具', '人物'],
      searchType: '沙盘',
      isLoading: true,
      showActiveStyleType: false,
      showStyleTypes: false,
      styleType: '所有',
      styleTypes: [],
      ofenUseStyleTypes: [],
      sortType: '推荐',
      sortTypes: ['推荐', '精选', '好评最多', '查看次数最多', '讨论次数最多', '最新'],
      searchList: [],
      store: useStore()
    }
  },
  props: ['q'],
  components: { Signal, ArrowDown, Like, View },
  directives: { ClickOutside },
  methods: {
    changeSearchType(index) {
      this.searchType = this.searchTypes[index]
    },
    search() {
      this.$router.push({ name: "SearchPage", query: { q: this.searchValue } })
    },
    selectSortType(type) {
      this.sortType = type
    },
    selectStyleType(type) {
      this.styleType = type
      this.showStyleTypes = false
      this.showActiveStyleType = false
    },
    focusOnStyleType() {
      this.showStyleTypes = true
      this.showActiveStyleType = true
    },
    blurOnStyleType() {
      this.showActiveStyleType = false
    },
    blurOnStyleTypeOption() {
      this.showStyleTypes = false
    },
    unitConverter,
  },
  created() {
    this.searchValue = this.q
    this.styleTypes = this.store.searchStyleTypes
    this.ofenUseStyleTypes = this.store.userInfo.ofenUseSearchStyleTypes
  },
  computed: {
    searchTypeIndex() {
      return this.searchTypes.indexOf(this.searchType)
    },
    formateStyleTypes() {
      const target = {}
      this.styleTypes.forEach(item => {
        searchFirstLetter(item, (leter) => {
          if (target[leter] === undefined) {
            target[leter] = []
          }
          target[leter].push(item)
        })
      })
      return target
    },
    formateLeter() {
      const leters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const target = []
      for (let leter of leters.split('')) {
        if (this.formateStyleTypes[leter] !== undefined) {
          target.push(leter)
        }
      }
      return target
    },
  },
  mounted() {
    // 使用 api 获取
    setTimeout(() => {
      this.isLoading = false
      this.searchList = this.store.searchList
    }, 2000)
  },
}

</script>

<template>
  <div :class="$style.searchContainer">
    <el-input v-model="searchValue" placeholder="搜索..." :prefix-icon="Search" :class="$style.search" clearable
      @keyup.enter="search" />
    <div>
      <div v-for="(type, index) of searchTypes" :key="index" :class="$style.searchTypeItem">
        <span :class="index === searchTypeIndex ? $style.targetSearchItem : ''"
          @click="() => changeSearchType(index)">{{ type }}</span>
      </div>
    </div>
  </div>
  <div :class="$style.optionGroup">
    <el-popover placement="bottom-start" :width="300" :visible="showStyleTypes">
      <template #reference>
        <div :class="[showActiveStyleType ? $style.clickStyleType : '']" @click="focusOnStyleType"
          @blur="blurOnStyleType" tabindex="0" hidefocus="true">
          <span :class="$style.styleTypeDescription">创意风格</span>
          <span :class="$style.Signal1Svg">
            <Signal />
          </span>
          {{ styleType }}
          <span :class="$style.styleTypeDropDownSvg">
            <ArrowDown />
          </span>
        </div>
      </template>
      <div :class="$style.styleTypeOption" tabindex="0" hidefocus="true" v-click-outside="blurOnStyleTypeOption">
        <div>
          <span>常用</span>
          <span @click="() => selectStyleType('所有')">所有</span>
          <span v-for="style of ofenUseStyleTypes" :key="style" @click="() => selectStyleType(style)">{{ style }}</span>
        </div>
        <div class="cutLineY"></div>
        <div>
          <span>按字母排序</span>
          <div v-for="leter of formateLeter" :key="leter" :class="$style.formateStyles">
            <span>{{ leter }}</span>
            <span v-for="type of formateStyleTypes[leter]" :key="type" @click="() => selectStyleType(type)">
              {{ type }}
            </span>
          </div>
        </div>
      </div>
    </el-popover>
    <el-dropdown @command="selectSortType">
      <div :class="$style.sortTypeContainer">
        {{ sortType }}
        <span :class="$style.dropdown">
          <ArrowDown />
        </span>
      </div>
      <template #dropdown>
        <el-dropdown-menu :class="$style.dropDownMenu">
          <el-dropdown-item :class="[$style.dropDownItem, type === sortType ? $style.dropDownItemActive : '']"
            v-for="(type, index) of sortTypes" :key="index" :command="type">{{ type }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

  </div>
  <div class="cutLineX"></div>
  <div :class="$style.searchContent">
    <div v-for="content of searchList" :key="content.id">
      <img :src="content.img">
      <div :class="$style.contentDescription">
        <div>
          <span>{{ content.title }}</span>
          <span>{{ content.nickname }}</span>
        </div>
        <div>
          <span>
            <span :class="$style.contentSvg">
              <Like />
            </span>
            {{ unitConverter(content.likes) }}
          </span>
          <span>
            <span :class="$style.contentViewSvg">
              <View />
            </span>
            {{ unitConverter(content.views) }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isLoading" style="margin-top: 200px">
    <Loading />
  </div>

</template>

<style module>
.searchContainer {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.searchContainer>:nth-child(2) {
  width: 240px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-left: none;
  box-sizing: border-box;
  border-radius: 0 30px 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.searchTypeItem {
  opacity: .7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.searchTypeItem span {
  padding: 6px 10px 6px 10px;
  border-radius: 10px;
  transition: .3s;
  cursor: pointer;
}

.searchTypeItem span:hover {
  background-color: var(--theme-color);
  color: #fff;
}

.targetSearchItem {
  background-color: var(--theme-color);
  color: #fff;
}

.searchContainer>:nth-child(2)>div {
  width: 80px;
}

.search {
  height: 50px;
  font-size: large;
}

.search>div {
  border-radius: 30px 0 0 30px;
  background-color: #F9F9F9;
}

.optionGroup {
  margin-top: 30px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.optionGroup>div:nth-child(1) {
  width: 150px;
  height: 80%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border: 1px solid #E8E8E8;
  transition: .5s;
  border-radius: 10px;
  cursor: pointer;
  color: #666;
  background-color: #fff;
}

.Signal1Svg {
  height: 25px;
  width: 25px;
  padding-right: 10px;
}

.styleTypeDropDownSvg {
  height: 15px;
  width: 15px;
  transition: .5s;
}

.clickStyleType {
  border: 1px solid var(--theme-color) !important;
}

.clickStyleType .styleTypeDropDownSvg {
  transform: rotate(180deg);
}

.styleTypeDescription {
  visibility: hidden;
  position: absolute;
  top: -8px;
  left: 5px;
  background: #fff;
  font-size: 14px;
  opacity: 0;
  transition: .5s;
  color: var(--theme-color);
}

.clickStyleType .styleTypeDescription {
  visibility: visible;
  opacity: 1;
}

.styleTypeOption {
  display: flex;
  flex-direction: row;
  height: 420px;
  justify-content: space-evenly;
}

.styleTypeOption> :nth-child(1),
.styleTypeOption> :nth-child(3) {
  width: 49%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.styleTypeOption> :nth-child(3) {
  overflow-x: hidden;
  overflow-y: visible;
}

.styleTypeOption> :nth-child(1)>:first-child,
.styleTypeOption> :nth-child(3)>:first-child {
  font-size: 12px;
  opacity: .7;
  margin: 10px 0 10px 0;
  padding: 3px 5px 3px 5px;
}

.styleTypeOption> :nth-child(1)>:not(:first-child),
.formateStyles>:not(:first-child) {
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: .3s;
  padding: 3px 5px 3px 5px;
  border-radius: 5px;
  cursor: pointer;
}

.styleTypeOption> :nth-child(1)>:not(:first-child):hover,
.formateStyles>:not(:first-child):hover {
  color: var(--theme-color);
  background: #eee;
}

.formateStyles {
  display: flex;
  flex-direction: column;
}

.formateStyles>:first-child {
  background: rgba(238, 238, 238, 0.3);
  padding: 3px 5px 3px 5px;
  height: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.optionGroup>:nth-child(2) {
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  opacity: .8;
}

.sortTypeContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transition: .3s;
  background-color: #fff;
}

.sortTypeContainer:hover {
  background-color: #eee;
}

.sortTypeContainer svg {
  transition: .3s;
}

.sortTypeContainer:hover svg {
  transform: rotate(180deg);
}

.dropdown {
  width: 30px;
  height: 60%;
  opacity: .6;
  display: flex;
  align-items: center;
}

.dropDownMenu {
  opacity: .7;
  font-size: 14px;
}

.dropDownItem {
  transition: .3s;
}

.dropDownItemActive {
  color: var(--theme-color);
  background: #eee !important;
}

.dropDownItem:hover {
  color: var(--theme-color);
  background: #eee !important;
}

.searchContent {
  width: 100%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 40px 20px;
}

.searchContent>div {
  height: 350px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  transition: .5s;
  box-shadow: #ddd 5px 5px 5px;
}

.searchContent>div:hover {
  transform: translateY(-15px);
}

.searchContent>div>img {
  height: 285px;
  object-fit: cover;
}

.contentDescription {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 10px 5px;
}

.contentDescription>div:nth-child(1) {
  display: flex;
  flex-direction: column;
}

.contentDescription>div:nth-child(1)>span:nth-child(1) {
  font-size: 18px;
}

.contentDescription>div:nth-child(1)>span:nth-child(2) {
  font-size: 14px;
  padding-top: 5px;
}

.contentSvg {
  width: 16px;
  height: 16px;
}

.contentViewSvg {
  width: 22px;
  height: 22px;
}

.contentDescription>div:nth-child(2) {
  display: flex;
  align-items: flex-start;
}

.contentDescription>div:nth-child(2)>span {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  opacity: .8;
}
</style>