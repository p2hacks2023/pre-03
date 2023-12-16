<template>
    
        <TermBox>
            <div v-for="(term, index) in terms" :key="index">
            <TermHeading :heading="term.heading" />
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

