<template>
  <error-content code="400" desc="Oh~~回调地址不在白名单内，不允许登录~" :src="src"/>
</template>

<script>
import error401 from '@/assets/images/error-page/error-401.svg'
import errorContent from './error-content1.vue'
export default {
  name: 'error_400',
  components: {
    errorContent
  },
  data () {
    return {
      src: error401
    }
  }
}
</script>
