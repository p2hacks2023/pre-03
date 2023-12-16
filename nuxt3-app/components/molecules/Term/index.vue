<template>
  <TermBox>
    <div v-for="term in terms">
      <TermHeading :heading="term.heading"/>
      <div v-for="text in term.text">
        <div v-if="text.mainText">
          <TermMainText :mainText="text.mainText"/>
        </div>
        <div v-else>
          <TermIndentText :indentTexts="text.indentText"/>
        </div>
      </div>
    </div>
  </TermBox>
</template>

<script>
import terms from './term.json';

export default {
name: "Home",
data: () => {
  return {
      terms: terms,
  }
},
mounted() {
  // console.log(this.terms[1].heading);
},
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>