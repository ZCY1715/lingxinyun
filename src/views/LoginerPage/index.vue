<script>
import { getCodeImg, login, register } from "../api/login/index.js";
export default {
    data() {
        return {
            /* 验证码开关 */
            captchaOnOff: true,
            /* 控制登录和注册切换的两个开关 */
            loginControll: true,
            registerControll: false,

            loginIndex: 1,
            registerIndex: 1,
            /*  默认的tab */
            activeName: 'tabTwo',
            codeIntervalTime: 60,
            codeInterval: true,
            codeImageUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',

            /* 登录提交的表单 */
            formOne: {
                username: '',
                password: '',
                code: '',
                uuid: '',
                messageCode: ''
            },

            /* 注册提交的表单 */
            formTwo: {
                username: '',
                password: '',
                correctPassword: '',
                code: '',
                phone: '',
                phoneFormat: '',
                check: false,
                uuid: '',
                invitedCode: ''
            },

            /* 忘记密码的对应表单 */
            formThree: {
                username: '',
                code: ''
            },

            /* 输入框的检测规则2 */
            rules: {
                passRule: {
                    validator: (rule, value, callback) => {
                        value = this.formTwo.password
                        if (value == '') { callback(new Error('密码不能为空')) }
                        if (value.length < 6 || value.length > 10) { callback(new Error('密码长度最低6位最高10位')) }
                        if (value == this.formTwo.username) { callback(new Error('密码不能和用户名相同')) }

                        callback()
                    },
                    trigger: "blur"
                },
                checkPassRule:
                {
                    validator: (rule, value, callback) => {
                        value = this.formTwo.correctPassword
                        if (value == '') { callback(new Error('密码不能为空')) }
                        if (value != this.formTwo.password) {
                            callback(new Error('两次密码不一致'))
                        }
                        callback()
                    },
                    trigger: "blur"
                },
                accRule: { required: true, message: '账号不能为空', trigger: 'blur' },
                usernameRule: {
                    validator: (rule, value, callback) => {
                        value = this.formTwo.username
                        if (value == '') { callback(new Error('用户名不能为空')) }
                        if (false) { callback(new Error('用户名已被注册')) }
                        callback()
                    },
                    trigger: "blur"
                },
                phoneRule: { required: true, message: '手机号不能为空', trigger: 'blur' }

            },
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

            ]
        }
    },
    props: [],
    components: {},
    computed: {},
    methods: {
        goLogin() {
            this.loginControll = true
            this.registerControll = false
        },
        goRegister() {
            this.loginControll = false
            this.registerContrll = true
        },
        goForgetPassword() {
            this.loginControll = false
            this.registerContrll = false
        },
        switchRegister(index) {
            this.registerIndex = index;
        },
        handleClick() {
            this.resetForm()
            this.getCode()
        },
        resetForm() {
            this.formOne.username = ''
            this.formOne.password = ''
            this.formOne.code = ''
            this.formOne.uuid = ''
        },
        getCode() {
            getCodeImg().then((res) => {
                console.log(res)
                this.codeImageUrl = "data:image/gif;base64," + res.data.img;
                this.formOne.uuid = res.data.uuid;
                console.log(this.formOne.uuid)
            }).catch(() => {
                console.log("请求失败")
            });
        },
        handleLogin() {
            let username = this.formOne.username
            let password = this.formOne.password
            let code = this.formOne.code
            let uuid = this.formOne.uuid
            login(username, password, code, uuid).then((res) => {
                console.log(res)
                /*  登录成功 */
                if (res.data.code === 200) {
                    this.$message({
                        message: '注册成功',
                        type: 'success'
                    });
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: 'error'
                    });
                    this.getCode()
                }
            }).catch((err) => {
                console.log(err)
            });
        },
        handleRegister() {
            let username = this.formOne.username
            let password = this.formOne.password
            let confirmPassword = password
            let code = this.formOne.code
            let uuid = this.formOne.uuid
            register({ username, password, confirmPassword, code, uuid }).then((res) => {
                console.log(res)


            }).catch((err) => {
                console.log(err)
            })

        },
        switchRegister(index) {
            this.registerIndex = index;
        }
    },
    watch: {
        codeInterval(newval, oldval) {
            if (oldval == true && newval == false) {
                this.codeIntervalTime = 60
            }
            if (oldval == false && newval == true) {
                this.codeIntervalTime = 60
            }
        },
        codeIntervalTime(newval) {
            if (newval == 0) {
                this.codeInterval = true
            }
            if (newval == 60) {
                this.codeInterval = false
            }
        }
    },

    created() {
        this.getCode()
    },

}
</script>

<template>
    <div :class="$style.container">
        <!--  登录页面 -->
        <div v-if="loginControll" :class="$style.loginBox">
            <div>
                <h2>欢迎登录</h2>
                <el-divider />
            </div>
            <div>
                <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                    <el-tab-pane label="手机登录" name="tabOne" :class="$style.tabOne">
                        <!-- tab1 -->
                        <el-form :model="formOne" label-width="0" :rules="rules" ref="ruleForm">
                            <!-- 两个输入框 -->
                            <el-form-item prop="pass">
                                <el-input v-model="formOne.username" :class="$style.commonInput" placeholder="请输入手机号" />
                            </el-form-item>
                            <el-form-item>
                                <div>
                                    <el-input v-model="formOne.messageCode" :class="$style.commonInput"
                                        placeholder="请输入短信验证码" />
                                </div>
                                <div>
                                    <el-button type="primary" v-if="codeInterval">发送短信验证码</el-button>
                                    <el-button disabled v-else>{{ "请" + codeIntervalTime + "s后重试" }}</el-button>
                                </div>
                            </el-form-item>
                            <!--  登录按钮 -->
                            <el-form-item>
                                <el-button type="primary" @click="handleLogin">登录</el-button>
                            </el-form-item>
                            <div>
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
                    <el-tab-pane label="密码登录" name="tabTwo" :class="$style.tabTwo">
                        <!-- tab2 -->
                        <el-form :model="formOne" label-width="0">
                            <!-- 两个输入框 -->
                            <el-form-item>
                                <el-input v-model="formOne.username" :class="$style.commonInput"
                                    placeholder="请输入手机号/账号/用户名" />
                            </el-form-item>

                            <el-form-item>
                                <el-input v-model="formOne.password" :class="$style.commonInput" placeholder="请输入密码"
                                    :show-password="true" />
                            </el-form-item>

                            <el-form-item :class="$style.codeBox">
                                <div>
                                    <el-input v-model="formOne.code" :class="$style.commonInput" placeholder="请输入验证码" />
                                </div>
                                <div>
                                    <el-image :src="codeImageUrl" fit="fill" />
                                    <div @click="getCode">看不清楚?换一张</div>
                                </div>
                            </el-form-item>
                            <!--  登录按钮 -->
                            <el-form-item>
                                <el-button type="primary" @click="handleRegister" :class="$style.commonSubmit">登录
                                </el-button>
                            </el-form-item>
                            <div>
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
                    <el-tab-pane label="扫码登录" name="tabThree">Role</el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <!--     注册页面 -->
        <div v-else-if="registerContrll" :class="$style.registerBox">

            <!-- 注册组件1 -->


            <div v-if="registerIndex === 1">
                <h2>欢迎注册</h2>
                <el-divider />
            </div>

            <div v-if="registerIndex === 3">
                <h2>账户基本信息</h2>
                <el-divider />
            </div>

            <div v-if="registerIndex === 1" :class="$style.registerOne">
                <el-form :rules="rules" ref="ruleForm" label-width="0">
                    <el-form-item prop="phoneRule">
                        <el-input v-model="formTwo.username" placeholder="请输入手机号" :class="$style.commonInput">
                            <template #prepend>
                                <el-select v-model="formTwo.phoneFormat" placeholder="请选择" style="width: 115px;">
                                    <el-option v-for="item of phoneMessage" :key="item.id"
                                        :label="item.info + item.value" :value="item.value" />

                                </el-select>
                            </template>

                        </el-input>
                    </el-form-item>

                    <el-form-item>
                        <div>
                            <el-input v-model="formTwo.code" placeholder="请输入短信验证码" :class="$style.commonInput">
                            </el-input>

                        </div>
                        <div>
                            <el-button type="primary">发送短信验证码</el-button>

                        </div>



                    </el-form-item>


                    <div>
                        <div>
                            <el-checkbox v-model="formTwo.check">我已同意</el-checkbox>
                        </div>
                        <div>&lt;&lt;用户注册协议&gt;&gt;</div>

                    </div>

                    <el-button type="primary" :class="$style.commonButton" :disabled="!formTwo.check"
                        @click="switchRegister(3)">下一步
                    </el-button>






                </el-form>


            </div>
            <!-- 注册组件2 -->
            <div v-if="registerIndex === 2">



            </div>
            <!-- 注册组件3 -->
            <div v-if="registerIndex === 3" :class="$style.registerThree">
                <el-form :rules="rules" v-model="formTwo" ref="formTwo" status-icon>
                    <el-form-item prop="usernameRule">
                        <el-input v-model="formTwo.username" :class="$style.commonInput" placeholder="用户昵称" />
                    </el-form-item>

                    <el-form-item prop="passRule">
                        <el-input v-model="formTwo.password" :class="$style.commonInput" placeholder="设置密码"
                            :show-password="true" />
                    </el-form-item>

                    <el-form-item prop="checkPassRule">
                        <el-input v-model="formTwo.correctPassword" :class="$style.commonInput" placeholder="确认密码"
                            :show-password="true" />
                    </el-form-item>

                    <el-form-item>
                        <el-input v-model="formTwo.invitedCode" :class="$style.commonInput" placeholder="邀请码(选填)" />
                    </el-form-item>

                    <el-form-item :class="$style.codeBox">
                        <div>
                            <el-input v-model="formTwo.code" :class="$style.commonInput" placeholder="请输入验证码" />
                        </div>
                        <div style="margin-left:20px">
                            <el-image :src="codeImageUrl" fit="fill" />
                            <div @click="getCode">看不清楚?换一张</div>
                        </div>
                    </el-form-item>

                    <el-button type="primary" @click="handleRegister" :class="$style.commonSubmit">完成注册</el-button>


                </el-form>


            </div>
        </div>
        <!-- 忘记密码 -->
        <div v-else :class="$style.passwordBox">
        </div>
    </div>

</template>

<style module>
/* 统一调整输入框样式 */
.commonInput {
    height: 40px;
    margin-top: 10px;

}

.commonButton {
    width: 100%;
    margin-top: 10px;
}

.commonSubmit {
    width: 100%;
    margin: 0;
}


.container {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0;
    position: relative;




}


.loginBox {
    position: fixed;
    z-index: 99;
    width: 400px;
    height: 530px;
    background-color: rgba(255, 255, 255, 1);
    left: 50%;
    top: 15%;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 20px;

}

.loginBox>:nth-child(1)>h2 {
    mix-blend-mode: normal;
    color: rgba(51, 51, 51, 1);
    font-size: 1.5rem;
    font-weight: 500;


}






/* tab2选中请求验证码按钮的父亲盒子 */
.codeBox {
    display: flex;
}

.codeBox>:first-child>:nth-child(2) {
    text-align: center;
    position: relative;
    top: 20px;
}

.codeBox>:first-child>:nth-child(2)>:nth-child(1) {
    width: 150px;
    height: 75px;

}

.codeBox>:first-child>:nth-child(2)>:nth-child(2) {
    color: rgba(42, 130, 228, 1);
    cursor: pointer;
}


/* tab1的样式 */

.tabOne>:first-child>:nth-child(2)>:first-child>div:nth-child(2) {
    margin-left: 30px;
    margin-top: 10px;

}

/* 登录按钮 */

.tabOne>:first-child>:nth-child(3)>:first-child>:first-child {
    width: 100%;
}


/* 最后的几个字段 */
.tabOne>:first-child>:last-child>:first-child {
    margin-bottom: 20px;
}

.tabOne>:first-child>:last-child>:first-child>:nth-child(2) {
    color: rgba(42, 130, 228, 1)blue;
}

.tabOne>:first-child>:last-child>:first-child>:nth-child(2):hover {
    color: rgba(42, 130, 228, 1);
    cursor: pointer;
}

.tabOne>:first-child>:last-child>:nth-child(2) {
    color: rgba(42, 130, 228, 1);
    cursor: pointer;
}



/* tab2样式 */



.tabTwo>:first-child>:nth-child(3)>:first-child>div:nth-child(2) {
    margin-left: 30px;
    margin-top: 10px;

}




/* 最后的几个字段 */
.tabTwo>:first-child>:last-child>:first-child {
    margin-bottom: 20px;
}

.tabTwo>:first-child>:last-child>:first-child>:nth-child(2) {
    color: rgba(42, 130, 228, 1);
}

.tabTwo>:first-child>:last-child>:first-child>:nth-child(2):hover {
    color: rgba(42, 130, 228, 1);
    cursor: pointer;
}

.tabTwo>:first-child>:last-child>:nth-child(2) {
    color: rgba(42, 130, 228, 1);
    cursor: pointer;
}


/* 注册界面样式 */
.registerBox {
    position: fixed;
    z-index: 99;
    width: 400px;
    height: 530px;
    background-color: aliceblue;
    left: 50%;
    top: 15%;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 20px;


}

/* 短信验证码输入框样式 */
.registerOne>:nth-child(2) {
    display: flex;
}

.registerOne>:nth-child(2)>:nth-child(1) {

    display: flex;
    align-items: center;
}

/* 发送短信验证码按钮样式 */
.registerOne>:nth-child(2)>:nth-child(1)>:nth-child(2) {

    margin-left: 10px;
    margin-top: 10px;

}

.registerOne>:nth-child(2)>:nth-child(1)>:nth-child(2)>:nth-child(1) {

    height: 40px;

}

/* 用户注册协议协议样式 */
.registerOne>:first-child>:nth-child(3) {
    display: flex;
    align-items: center;

}

.registerOne>:first-child>:nth-child(3)>:nth-child(2) {
    font-size: 14px;
    color: rgba(42, 130, 228, 1);

}

.registerOne>:first-child>:nth-child(3)>:nth-child(2):hover {
    cursor: pointer;

}



/* 忘记密码界面样式 */

.passwordBox {}
</style>

