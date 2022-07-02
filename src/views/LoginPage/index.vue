<script>
import LoginStepOne from './loginStepOne.vue'
import LoginStepTwo from './loginStepTwo.vue'

export default {
  data() {
    return {
      phoneMessage: [
        {
          id: 0,
          info: '中国+',
          value: 86,
          length: 11

        },
        {
          id: 1,
          info: '美国+',
          value: 1,
          length: 10
        }

      ],
      centerDialogVisible: true,
      isAgree: true,
      inputMessage: {
        phone: '',
        verificationCode: '',
        isAgree: false,
        select: ''


      },
      buttonControll: {
        messageGetterButton: false,
        timeControllButton: false,
        timeControllShowButton:false,
        nextButton: false

      }

    }
  },
   components: {
    LoginStepOne,
    LoginStepTwo

  },



}
</script>

<template>
  <el-dialog v-model="centerDialogVisible" title="" width="30%" :class="$style.all" center>

    <div :class="$style.headBox">
      <span>欢迎注册</span>
      <el-divider></el-divider>

    </div>

    <div :class="$style.inputBox">

      <!--  输入手机号 -->

      <el-input v-model="inputMessage.phone" placeholder="输入手机号" class="input-common" rows="4">
        <template #prepend>
          <el-select v-model="inputMessage.select" placeholder="请选择" style="width: 115px">
            <el-option v-for="item of phoneMessage" :key="item.id" :label="item.info + item.value"
              :value="item.value" />

          </el-select>
        </template>

      </el-input>


      <div style="margin: 30px 0"></div>


      <!-- 输入短信验证码 -->
      <el-input v-model="inputMessage.verificationCode" placeholder="请输入短信验证码" class="input-common" rows="4">

        <template #append>
          <el-button type="primary" :disabled="buttonControll.messageGetterButton">发送短信验证码</el-button>

        </template>
      </el-input>

    </div>


    <div :class="$style.footerBox">

      <div>
        <div>
          <el-checkbox-group v-model="inputMessage.isAgree" text-color="black" class="agreement">
            <el-checkbox label="我已阅读并同意" name="type" v-model="isAgree" />

          </el-checkbox-group>
          <span>《用户协议》</span>

        </div>


        <el-button disabled v-if="buttonControll.timeControllShowButton">60s</el-button>

      </div>



      <el-button type="primary" style="width:100%;margin-bottom:20px">下一步</el-button>
      <div>
        <span>已有账号?</span>
        <span>去登录</span>

      </div>






    </div>


  </el-dialog>
</template>

<style module>
/* 父容器格式 */
.all {
  display: flex;
  flex-direction: column;
}

/* 头部格式 */
.headBox {
  margin-bottom: 40px;
}

.headBox {
  font-size: 20px;
  font-weight: 600;
}

/* 输入框格式 */
.inputBox {
  margin-bottom: 30px;

}


/* 尾部格式 */
.footerBox {}

.footerBox>div:nth-child(1) {

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.footerBox>div:nth-child(1)>div {

  display: flex;
  flex-direction: row;
  align-items: center;

}

.footerBox>div:nth-child(1)>div>span {

  color: blue;

}

.footerBox>div:nth-child(1)>div>span:hover {

  cursor: pointer;

}

.footerBox>div:nth-child(3)>span:nth-child(2) {

  color: blue;

}

.footerBox>div:nth-child(3)>span:nth-child(2):hover {

  cursor: pointer;

}
</style>

<style scoped>
:deep(.el-input) {
  height: 45px;
}

</style>