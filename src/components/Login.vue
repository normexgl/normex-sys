<template>
  <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
</template>

<script>
import { Auth } from 'aws-amplify-vue'

export default {
    name: 'Login',
    components: Auth,
    data () {
    return {
      authConfig: ''
    }
  }
}
</script>