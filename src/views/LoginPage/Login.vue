<script>
import loginTabThree from './loginTabThree.vue'
import useStore from '../../stores'
export default {
  data() {
    return {
      captchaOnOff: true,
      codeUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      activeName: 'first',
      centerDialogVisible: true,
      formOne: {
        account: '',
        password: ''

      },
      formTwo: {
        account: '',
        password: '',
        code: ''
      }
    }
  },

  props: [],
  components: {

    loginTabThree

  },
  computed: {

  },
  methods: {
    handleClick() {

    },
    goRegister() {
      this.store.isLogin = false;
    }


  },

  created() {
    this.store = useStore();

  },

}
</script>

<template>
  <el-dialog v-model="centerDialogVisible" title="" width="30rem" :class="tabOne.all" center
    :close-on-click-modal="false" :show-close="false">

    <!-- tab1 -->
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" :stretch="true">
      <el-tab-pane label="手机登录" name="first">
        <el-form :model="formOne" label-width="0" :class="tabOne.formOne">
          <!-- 两个输入框 -->
          <el-form-item :class="tabOne.formItemOne">
            <el-input v-model="formOne.account" :class="tabOne.commonForm" placeholder="请输入手机号" />
          </el-form-item>

          <el-form-item :class="tabOne.formItemTwo">
            <div :class="tabOne.mixBox">
              <div :class="tabOne.commonBox">
                <el-input v-model="formOne.password" :class="tabOne.specialForm" placeholder="请输入密码" />
              </div>
              <div :class="tabOne.commonBox">
                <el-button type="primary" :class="tabOne.messageButton">发送短信验证码</el-button>
              </div>

            </div>



          </el-form-item>

          <!--  登录按钮 -->

          <el-form-item>
            <div :class="tabOne.login">

              <el-button type="primary" :class="tabOne.loginButton">登录</el-button>



            </div>

          </el-form-item>





          <div :class="tabOne.footer">
            <div>
              <span>还没有账号?</span>
              <span @click="goRegister()">去注册</span>

            </div>
            <div>
              <span>忘记密码?</span>
            </div>

          </div>

        </el-form>
      </el-tab-pane>


      <!-- tab2 -->
      <el-tab-pane label="密码登录" name="second">
        <el-form :model="formTwo" label-width="0" :class="tabTwo.formOne">
          <!-- 两个输入框 -->
          <el-form-item :class="tabTwo.formItemOne">
            <el-input v-model="formTwo.account" :class="tabTwo.commonForm" placeholder="请输入手机号或账号" />
          </el-form-item>

          <el-form-item :class="tabTwo.formItemTwo">
            <el-input v-model="formTwo.password" :class="tabTwo.commonForm" placeholder="请输入密码" />
          </el-form-item>

        <!--   验证码 -->

            <el-form-item  v-if="captchaOnOff" :class="tabTwo.formItemThree">
            <div :class="tabTwo.codeInput">
            <el-input v-model="formTwo.code"  placeholder="验证码"  >

            </el-input>

            </div>

            
            
            <div :class="tabTwo.codeImage">
              <el-image style="width: 120px; height: 100px" :src="codeUrl" :fit="fit" />
              <div @click="getCode">看不清?点击切换</div>
            </div>
          </el-form-item>

          <!--  登录按钮 -->

          <el-form-item>
            <div :class="tabTwo.login">

              <el-button type="primary" :class="tabTwo.loginButton">登录</el-button>

            </div>

          </el-form-item>

        


          <div :class="tabTwo.footer">
            <div>
              <span>还没有账号?</span>
              <span @click="goRegister()">去注册</span>

            </div>
            <div>
              <span>忘记密码?</span>
            </div>

          </div>

        </el-form>
      </el-tab-pane>
      <!-- tab3-->
      <el-tab-pane label="扫码登录" name="third">
        <loginTabThree />
      </el-tab-pane>

    </el-tabs>


  </el-dialog>>
</template>

<style module>
.all {}
</style>

<style module="tabOne">

.formOne {}

.commonForm {
  margin: 0 10%;
  height: 40px;
}

.specialForm {
  height: 40px;

}

.formItemOne {
  margin-top: 20px;
  margin-bottom: 30px;
}

.formItemTwo {
  margin-bottom: 50px;
  margin-left: 10%;
  margin-right: 10%;


}


.messageButton {
  height: 40px;
  margin-left: 10px;
}

.mixBox {
  display: flex;
  flex-direction: row;



}


.login {
  text-align: center;
  width: 100%;
  margin-bottom: 10px;

}

.loginButton {
  width: 80%;
  height: 35px;
}

.footer {
  display: flex;
  justify-content: space-between;



}

.footer>div:nth-child(1) {
  display: flex;

}

.footer>div:nth-child(1)>span:nth-child(2) {
  color: rgba(42, 130, 228, 1);
  cursor: pointer;

}

.footer>div:nth-child(2)>span {
  color: rgba(42, 130, 228, 1);
  cursor: pointer;

}
</style>


<style module="tabTwo">
.formOne {}

.commonForm {
  margin: 0 10%;
  height: 40px;
}

.formItemOne {
  margin-top: 20px;
  margin-bottom: 30px;
}

.formItemTwo {
  margin-bottom: 30px;
}
.formItemThree{
  display: flex;
  margin: 0 10%;
  
}
.codeInput {
  margin-right: 30px;
}
.codeImage>div:nth-child(2) {
  color: red;
  cursor: pointer;
  
}

.codeInput {
  margin-right: 20px;
}

.login {
  text-align: center;
  width: 100%;
  margin-bottom: 10px;

}

.loginButton {
  width: 80%;
  height: 35px;
}

.footer {
  display: flex;
  justify-content: space-between;



}

.footer>div:nth-child(1) {
  display: flex;

}

.footer>div:nth-child(1)>span:nth-child(2) {
  color: rgba(42, 130, 228, 1);
  cursor: pointer;

}

.footer>div:nth-child(2)>span {
  color: rgba(42, 130, 228, 1);
  cursor: pointer;

}
</style>



