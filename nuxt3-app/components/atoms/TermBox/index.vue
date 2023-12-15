<template>
  <div class="box">
    <div class="margin_whole">
      <div v-for="term in terms">
        <div class="heading">
          {{ term.heading }}
        </div>
          <ol>
            <div class="margin_article">
              <div v-for="i in Object.keys(term.text).length">       
                <li>
                  {{ term.text[i-1] }}
                </li>          
              </div>
              <div class="margin_article">
                <ol>
                  <div v-for="i in Object.keys(term.indent).length">
                    <li>
                      {{ term.indent[i-1] }}
                    </li>
                  </div>
                </ol>
              </div>
            </div>
          </ol>
        <br/>
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
  }),
}
</script>

<style lang="scss" scoped>@import './index.scss';
</style>