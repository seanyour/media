<template>
    login
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {verifyCaptcha} from "api/user";

onMounted(() => {
  verify();
})

const verify = async () => {
  const res = await verifyCaptcha('1234');
  console.log()
}
</script>