<template>
  <div>
    {{ heading }}
  </div>
</template>

<script>
export default {
  name: "TermHeading",
  props: {
    heading: {
      type: String,
      required: true
    }
  },
  mounted() {
    console.log(this.heading);
  }
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>