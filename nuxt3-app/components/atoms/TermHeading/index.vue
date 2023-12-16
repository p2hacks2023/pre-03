<!-- atoms -->
<template>
<<<<<<< HEAD
  <div class="heading">
=======
  <div>
>>>>>>> 39b02b85ae922041ab700d5b183d919c19287691
    {{ heading }}
  </div>
  <br />
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

<style lang="scss" scoped>
@import './index.scss';
</style>