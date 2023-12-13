<template>
    <div class="input-box-test">
        <br>
        <InputBox placeholder="アカウント名を入力"/>
        <br>
        <InputBox placeholder="パスワードを入力"/>
        <br>
        <InputBox placeholder="商品名・スポット名"/>
        <br>
        <InputBox placeholder="初期値"/>
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