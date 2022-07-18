<template>
  
</template>
<script setup>
import { useStore } from "../store/minVuex"

  function handleLogin () {
    fromRef.value.validate(async valid => {
      if (valid) {
        loading.value = true
        const {code, meagess} = await useStore.login(loginForm)
        loading.value = false
        if (code === 0) {
          router.replace(toPath || '/')
        } else {
          meagess({
            meagess: '登陆失败',
            type: 'error'
          })
        }
      } else {
        console.log('error sumbit')
        return false
      }
    })
  }
</script>