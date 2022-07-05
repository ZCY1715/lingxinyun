<template>
  <el-footer :class="$style.container">
    <div :class="$style.main">
      <div :class="$style.part1">
        <div>
          <span>聆心云</span>
          <span>沙盘游戏元宇宙文创平台</span>
        </div>
        <div>
          <span>友情链接</span>
          <span>聆心云心理健康服务平台</span>
          <span><a href="https://www.sdu.edu.cn/" target="_blank">山东大学</a></span>
        </div>
      </div>
      <div :class="$style.part2">
        <div>
          <span>更多联系方式</span>
          <span>
            致电&nbsp;&nbsp;0531-6666-8888转8002
          </span>
          <span>
            办公时间&nbsp;&nbsp;08:30-17:30
          </span>
        </div>
        <div>
          <span>
            办公地址&nbsp;&nbsp;山东省济南市历下区鑫盛大厦2号楼16层
          </span>
        </div>
      </div>
      <div class="cutLineX"></div>
      <div :class="$style.part3">
        <div>
          <span>Copyright © 2011-2022 聆心云（山东）智能科技有限公司 保留所有权利</span>
          <span>鲁ICP备20032465&nbsp;&nbsp;工业和信息化部备案</span>
        </div>
        <div>
          <span>隐私政策</span>
          <div class="cutLineY"></div>
          <span>使用条款</span>
          <div class="cutLineY"></div>
          <span>销售政策</span>
          <div class="cutLineY"></div>
          <span>法律信息</span>
          <div class="cutLineY"></div>
          <span>网站地图</span>
        </div>
      </div>
    </div>
  </el-footer>
</template>

<style module>
.container {
  width: 100%;
  height: 240px !important;
  background-color: rgb(240, 240, 240);
}

.container a {
  transition: .3s;
  outline: none;
  color: #999;
  text-decoration: none;
}

.container a:hover {
  color: var(--theme-color);
}

.container span {
  color: #999;
  font-size: 14px;
}

.main {
  position: relative;
  left: 143px;
  top: 28px;
  width: 1158px;
  height: 188px;
}

.part1 {
  width: 100%;
  display: flex;
}

.part1>div {
  display: flex;
  flex-direction: column;
}

.part1>div:nth-child(1)>span:nth-child(1),
.part1>div:nth-child(2)>span:nth-child(1) {
  font-size: 18px;
  padding: 3px 0 3px 0;
  color: #000;
}

.part1>div:nth-child(1)>span:not(:first-child),
.part1>div:nth-child(2)>span:not(:first-child) {
  padding: 3px 0 3px 0;
}

.part2 {
  display: flex;
  margin-top: 25px;
}

.part2>div:nth-child(1) {
  display: flex;
  align-items: center;
}

.part2>div:nth-child(1) span {
  margin-right: 30px;
}

.part3 {
  display: flex;
}

.part3>div:nth-child(1) {
  display: flex;
  flex-direction: column;
}

.part3>div:nth-child(1) span {
  padding: 6px 0 6px 0;
}

.part3>div:nth-child(2) {
  display: flex;
  height: 20px;
  padding-top: 6px;
}

.part1>div:nth-child(1),
.part2>div:nth-child(1),
.part3>div:nth-child(1) {
  width: 550px;
}
</style>