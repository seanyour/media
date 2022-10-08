<template>
  <div w="300px" h="300px" pos="absolute top-1/2 left-1/2" transform="~ -translate-x-1/2 -translate-y-1/2">
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
        <el-input class="!w-200px" v-model="loginForm.captcha" clearable placeholder="请输入验证码"/>
        <img :src="captchaUrl" @click="resetCaptcha">
      </el-form-item>

      <div text="center">
        <el-button type="primary" @click="submitForm">确定</el-button>
        <el-button>重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {verifyCaptcha, login} from "api/user";
import {FormInstance, FormRules} from "element-plus";

onMounted(() => {
  // verify();
});

const loginForm = reactive({
  nickname: '',
  password: '',
  captcha: ''
});

const loginFormRef = ref<FormInstance>();

const loginFormRules = reactive<FormRules>({
  nickname: [{required: true, message: '请输入用户名！', trigger: 'blur'}],
  password: [{required: true, message: '请输入密码！', trigger: 'blur'}],
  captcha: [{required: true, message: '请输入验证码！', trigger: 'blur'}]
});

const captchaUrl = ref('/api/auth/captcha');

const resetCaptcha = () => captchaUrl.value = captchaUrl.value + '?' + Math.random();

const submitForm = () => {
  loginFormRef.value?.validate(async (isValid) => {
    if (!isValid) return;
    const data = await verifyCaptcha(loginForm.captcha);
    if (data.code && data.pass){
      const result = await login(loginForm.nickname,loginForm.password);
      if (result.code){
        console.log(result)
      }
    }
  })
}

</script>