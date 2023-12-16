<!-- atoms -->
<template>
  <div class="indent">
    {{ indent }}
  </div>
  <br>
</template>

<script>
export default {
  name: "TermIndent",
  props: {
    indent: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>