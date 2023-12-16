<template>
  <div class="margin">
    {{ indentText }}
  </div>
</template>

<script>
export default {
  name: "TermIndentText",
  props: {
    indentText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>