<template>
  <div>
    <div v-for="(mainText, index) in mainText" :key="index">
      <li>
        {{ mainText }}
      </li>
    </div>
    <br/>
  </div>
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