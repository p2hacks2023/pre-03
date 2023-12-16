<template>
  <div>
    {{ mainText }}
  </div>
  <br/>
</template>

<script>
export default {
  name: "TermMainText",
  props: {
    mainText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>