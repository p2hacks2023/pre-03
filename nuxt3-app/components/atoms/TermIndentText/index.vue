<template>
  <div class="margin">
    <ol>
      <div v-for="(indentText, index) in indentText" :key="index">
        <li>
          {{ indentText }}
        </li>
      </div>
      <br/>
    </ol>
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