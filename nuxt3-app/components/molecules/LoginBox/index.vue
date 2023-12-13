<template>
    <div>
        <div>ひんうやりあるばむアカウントでログイン</div>
        <InputBox placeholder="メールアドレス" :value="value" @input="$emit('update:value', $event.target.value)" /> />
        <InputBox type="password" placeholder="パスワード" />
    </div>
</template>

<script>
export default {
    name: "LoginBox",
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

