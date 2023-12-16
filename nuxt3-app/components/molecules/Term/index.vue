<template>
    
  <TermBox>
    <div v-for="term in terms">
      <TermHeading :heading="term.heading" />
      <div v-for="text in term.text">
        <TermMainText :mainText="text.mainText"><p>あ</p></TermMainText>
        <TermIndentText :indentText="text.indentText"><p>い</p></TermIndentText>
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