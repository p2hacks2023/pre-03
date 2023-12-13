<template>
    <div>
        <input :type="type" :placeholder="placeholder" v-model="str" @onchange="emitEvent" />
    </div>
</template>

<script setup>
const inputValue = ref(''),
export default {
    name: "InputBox",
    props: {
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: ""
        },
    },
    methods: {
        emitValue() {
            // 親コンポーネントにイベントを発行し、入力値をデータとして渡す
            this.$emit('onchange', inputValue.value);
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>