<!-- molucules -->
<template>
  <div class="box">
    <div class="margin_whole">
      <br>
      <TermHeading :heading="term.heading"/>      
      <br>
      <TermMainText v-for="(text, index) in term.text" :key="index" :text="text"/>
      <br>
      <TermIndent v-for="(indent, index) in term.indent" :key="index" :indent="indent"/>
    </div>
  </div>
</template>

<script>
import TermHeading from '~/components/atoms/TermHeading/index.vue';
import TermMainText from '~/components/atoms/TermMainText/index.vue';
import TermIndent from '~/components/atoms/TermIndent/index.vue';

export default {
  components: {
    TermHeading,
    TermMainText,
    TermIndent,
  },
  name: 'Term',
  props: {
    terms: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped> @import './index.scss';
</style>

