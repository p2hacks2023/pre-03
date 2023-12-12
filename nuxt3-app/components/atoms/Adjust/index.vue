<template>
  <div class="adjust">
    <textarea ref="textarea" :placeholder="placeholder" :value="value" @input="adjustHeight" />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const placeholder = ref('ご意見、ご要望をお書きください。');
const value = ref('');
const textarea = ref(null);

const adjustHeight = () => {
  nextTick(() => {
    textarea.value.style.height = 'auto'; 
    textarea.value.style.height = `${textarea.value.scrollHeight}px`;
  });
};

onMounted(adjustHeight);
</script>


<style lang="scss" scoped> @import './index.scss';
</style>