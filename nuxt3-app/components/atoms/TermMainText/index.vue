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
      type: Array,
      required: true
    }
  },
  mounted() {
    console.log(this.mainText);
  }
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>