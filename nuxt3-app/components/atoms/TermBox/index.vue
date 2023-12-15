<template>
  <div class="margin">
          <div v-for="term in terms">
            <div class="heading">
              {{ term.heading }}
            </div>
            <p>{{ term.text }}</p>
            <br/>
            </div>
  </div>
</template>

<script>
import term from '../assets/term.json';
export default {
  name: "TermBox",
  data: () => ({
    terms: term,
  })
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>