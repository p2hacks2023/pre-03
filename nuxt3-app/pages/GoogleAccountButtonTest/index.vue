<template>
  <br>
  <GoogleLoginButton></GoogleLoginButton>
  <br>
  <GoogleAuthButton></GoogleAuthButton>
</template>

<script>
import GoogleLoginButton from '~/components/atoms/GoogleLoginButton/index.vue';
import GoogleAuthButton from '~/components/atoms/GoogleAuthButton/index.vue';

export default {
  components: {
    GoogleLoginButton,
    GoogleAuthButton
  },
  name: 'GoogleAccountButtonTest'
}
</script>

<style lang="scss" scoped> @import './index.scss';
</style>