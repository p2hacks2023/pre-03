<template>
  <div class="heading">
    {{ term.heading }}
  </div>
  <br/>
</template>

<script>
import term from '../assets/term.json';
export default {
  name: "TermHeading",
  data: () => ({
    terms: term,
  }),
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>