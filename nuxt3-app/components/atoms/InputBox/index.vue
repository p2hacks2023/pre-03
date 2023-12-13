<template>
    <div class="input-box">
        <input :placeholder="placeholder"/>
    </div>
</template>
  
<script setup>
defineProps({
    placeholder: {
        type: String,
        default: ''
    }
});
</script>

<script>
export default {
    name: "InputBox",
}
</script>
  


<style lang="scss" scoped> @import './index.scss';
</style>