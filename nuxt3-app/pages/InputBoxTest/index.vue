<template>
    <div class="input-box-test">
        <br>
        <InputBox type="アカウント" :placeholder="'アカウント名を入力'" :value="''"
            @input="$emit('update:value', $event.target.value)" />
        <br>
        <InputBox type="パスワード" :placeholder="'パスワードを入力'" :value="''"
            @input="$emit('update:value', $event.target.value)" />
        <br>
        <InputBox type="商品名・スポット名" :placeholder="'商品名・スポット名'" :value="''"
            @input="$emit('update:value', $event.target.value)" />
            <br>
        <InputBox type="初期値" :placeholder="'初期値'" :value="''"
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