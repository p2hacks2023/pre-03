<template>
  <div class="text">
    {{ text }}
  </div>
  <br>
</template>

<script>
export default {
  name: "TermMainText",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>