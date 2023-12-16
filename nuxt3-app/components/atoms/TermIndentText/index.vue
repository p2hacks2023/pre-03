<template>
  <div class="margin">
    <slot/>
    {{ indentText }}
  </div>
</template>

<script>
export default {
  name: "TermIndentText",
  props: {
    indentText: {
      type: Array,
      required: true
    }
  },
  mounted() {
    console.log(this.indentText);
  }
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>