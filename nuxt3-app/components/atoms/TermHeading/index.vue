<template>
  <div class="fontSize">
    あいうえお
    {{ heading }}
  </div>
  <br/>
</template>

<script>
export default {
  name: "TermHeading",
  props: {
    heading: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>