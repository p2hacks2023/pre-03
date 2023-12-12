<template>
    <div class="input-box">
        <input :type="type" :placeholder="placeholder" :value="value" @input="$emit('update:value', $event.target.value)" />
    </div>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    }
});
</script>

<style lang="scss" scoped> @import './index.scss';
</style>