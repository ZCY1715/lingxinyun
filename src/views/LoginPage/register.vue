<script>
import useStore from '../../stores'

export default {
  data() {
    return {
      store:{},
      registerPageOne:true,  /* 默认是账号密码注册 */
      registerStepOne:true,  
      
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
        timeControllShowButton: false,
        nextButton: false

      }

    }
  },
  
  components: {

  },
  created() {
  this.store =useStore()
  },
  methods: {
    goLoginPage() {
     this.store.isLogin=true
    }
  }



}
</script>

<template>


  <el-dialog v-model="centerDialogVisible" title="" width="23%" :class="$style.all" id="dialogControll" center
    :close-on-click-modal="false" :show-close="false">
    <!--   头部div -->

    <div :class="$style.headBox">
      <span>欢迎注册</span>
      <el-divider></el-divider>

    </div>

    <!--   输入框div -->

    <div :class="$style.inputBox">

      <!--  输入手机号 -->

      <el-input v-model="inputMessage.phone" placeholder="输入手机号" class="input-common" >
        <template #prepend>
          <el-select v-model="inputMessage.select" placeholder="请选择" style="width: 115px">
            <el-option v-for="item of phoneMessage" :key="item.id" :label="item.info + item.value"
              :value="item.value" />

          </el-select>
        </template>

      </el-input>


      <div style="margin: 30px 0"></div>


      <!-- 输入短信验证码 -->
      <el-input v-model="inputMessage.verificationCode" placeholder="请输入短信验证码" class="input-common" >

        <template #append>
          <el-button type="primary" :disabled="buttonControll.messageGetterButton">发送短信验证码</el-button>

        </template>
      </el-input>

    </div>

    <!-- 尾部div -->
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
        <span @click="goLoginPage">去登录</span>

      </div>







    </div>

    <template #footer>
      <div :class="$style.commonFooter">
        <span>
          换个方式注册
        </span>
      </div>

    </template>


  </el-dialog>


</template>

<style module>
/* 父容器格式 */
.all {
  display: flex;
  flex-direction: column;
  border-radius: 10px !important;
}


/* 头部格式 */
.headBox {
  margin-bottom: 40px;
}

.headBox {
  font-size: 25px;
  font-weight: 600;
}

/* 输入框格式 */
.inputBox {
  margin-bottom: 30px;

}


/* 尾部格式 */
.footerBox {
  margin-bottom: 30px;
}

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
  margin-bottom: 10px;

}

.footerBox>div:nth-child(1)>div>span {

  color: rgba(42, 130, 228, 1);

}

.footerBox>div:nth-child(1)>div>span:hover {

  cursor: pointer;

}



.footerBox>div:nth-child(3)>span:nth-child(2) {

  color: rgba(42, 130, 228, 1);

}

.footerBox>div:nth-child(3)>span:nth-child(2):hover {

  cursor: pointer;

}


.commonFooter {
  text-align: right;
}

.commonFooter>span {
  cursor: pointer;
  color: black;
  font-weight: 600;


}
</style>

<style scoped lang="less">
:deep(.el-input) {
  height: 45px;
}

:deep(.el-dialog) {

  border-radius: 10px;
}
</style>

