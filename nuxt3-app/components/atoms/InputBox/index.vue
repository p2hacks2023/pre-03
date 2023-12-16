<template>
    <div>
        <input :maxlength="maxlength==null ? '' : maxlength" :type="type" :placeholder="placeholder" v-model="value" @change="this.$emit('onchange', value)" />
    </div>
</template>

<script>
export default {
    name: "InputBox",
    data: () => {
        return {
            value: undefined,
        }
    },
    props: {
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: ""
        },
        maxlength: {
            type: Number,
            required: false,
            default: null,
        }
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>