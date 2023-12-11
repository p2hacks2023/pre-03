<template>
    <div class="input-box-test">
        <InputBox type="アカウント" :placeholder="'アカウント名を入力'" :value="value"
            @input="$emit('update:value', $event.target.value)" />
        <InputBox type="パスワード" :placeholder="'パスワードを入力'" :value="value"
            @input="$emit('update:value', $event.target.value)" />
    </div>
</template>

<script>
import InputBox from '~/components/atoms/InputBox/index.vue';

export default {
    components: {
        InputBox
    },
    name: "InputBoxTest",
}
</script>

<style lang="scss" scoped> @import './index.scss';
</style>