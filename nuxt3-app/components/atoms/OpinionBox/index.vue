<template>
  <div class="opinion-box">
    <textarea
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
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


<style lang="scss" scoped> @import './index.scss';
</style>