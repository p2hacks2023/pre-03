<template>
  <div class="opinion-box-test">
    <br>
    <OpinionBox placeholder="ご意見、ご要望をお書きください。"/>
  </div>
</template>

<script>
import OpinionBox from '~/components/atoms/OpinionBox/index.vue';

export default {
  components: {
    OpinionBox
  },
  name: "OpinionBoxTest",
}
</script>

<style lang="scss" scoped> @import './index.scss';
</style>