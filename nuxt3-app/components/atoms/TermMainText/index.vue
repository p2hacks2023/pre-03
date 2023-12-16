<template>
  <div>
    <li>
      {{ mainText }}
    </li>
  </div>
</template>

<script>
export default {
  name: "TermMainText",
  props: {
    mainText: {
      type: String,
      required: true
    }
  },
  mounted() {
    // console.log(this.mainText);
  }
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>