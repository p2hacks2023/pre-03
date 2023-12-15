<template>
  <div class="box">
    <div class="margin">
      <div v-for="term in terms">
        <div class="heading">
          {{ term.heading }}
        </div>
        <div v-for="text in term.text">
          {{ text.main1 }}
          {{ text.indent1 }}
        </div>
        <br/><br/>
      </div>
    </div>
  </div>
</template>

<script>
import term from '../assets/term.json';
export default {
  name: "TermBox",
  data: () => ({
    terms: term,
    texts: term.text
  })
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>