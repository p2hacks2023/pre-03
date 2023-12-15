<template>
  <div class="box">
      <div class="scrollbar">
        <div class="scrollbar__box">
          <div v-for="term in terms">
            <div class="heading">
              {{ term.heading }}
            </div>
            <p>{{ term.text }}</p>
            <br/>
          </div>
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
  })
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>