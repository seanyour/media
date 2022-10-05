<template>
  <div class="loginBox">
    <el-form :model="loginForm" ref="loginFormRef" :rules="loginFormRules">

      <el-form-item prop="nickname">
        <el-input v-model="loginForm.nickname" clearable placeholder="请输入用户名">
          <template #prefix>
            <i-ep-user />
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="loginForm.password" clearable show-password placeholder="请输入密码">
          <template #prefix>
            <i-ep-lock />
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="captcha">
        <el-input class="captcha" v-model="loginForm.captcha" clearable placeholder="请输入验证码"/>
        <img :src="captchaUrl" @click="resetCaptcha">
      </el-form-item>

      <div class="buttons">
        <el-button type="primary" @click="submit">确定</el-button>
        <el-button>重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {verifyCaptcha} from "api/user";
import {FormRules} from "element-plus";

onMounted(() => {
  // verify();
});

const loginForm = reactive({
  nickname: '',
  password: '',
  captcha: ''
});

const loginFormRef = ref();

const loginFormRules = reactive<FormRules>({
  nickname: [{required: true, message: '请输入用户名！', trigger: 'blur'}],
  password: [{required: true, message: '请输入密码！', trigger: 'blur'}],
  captcha: [{required: true, message: '请输入验证码！', trigger: 'blur'}]
});

const captchaUrl = ref('/api/auth/captcha');

const resetCaptcha = () => captchaUrl.value = captchaUrl.value + '?' + Math.random();

const verify = async () => {
  const res = await verifyCaptcha('1234');
  console.log()
}
</script>

<style scoped lang="scss">
.loginBox {
  width: 450px;
  height: 450px;
  padding: 15px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  box-shadow: 0px 0px 25px #cac6c6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  align-items: center;

  .captcha {
    width: 350px;
  }

  .buttons {
    text-align: center;
  }
}
</style>