<template>
  <div class="opinion-box">
    <textarea :placeholder="placeholder"/>
  </div>
</template>

<script setup>
defineProps({
  placeholder: {
    type: String,
    default: 'ご意見、ご要望をお書きください。'
  },
  value: {
    type: String,
    default: ''
  }
});
</script>

<script>
export default {
  name: "OpinionBox",
}
</script>


<style lang="scss" scoped> @import './index.scss';
</style>