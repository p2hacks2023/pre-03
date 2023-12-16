<template>
  <div class="margin">
    <ol>
      <div v-for="indentText in indentTexts">
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
    indentTexts: {
      type: Array,
      required: true
    }
  },
  mounted() {
    // console.log(this.indentText);
  }
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>