<template>
    <div class="LoginBox">
        <div class="wrap">
            <div class="label">ひんやりあるばむアカウントを作成</div>
            <InputBox class="InputBox" placeholder="メールアドレス" @onchange="(val) => { console.log(val) }" />
            <InputBox class="InputBox" type="password" placeholder="パスワード" @onchange="(val) => { console.log(val) }" />
            <Button class="Button">新規作成</Button>
            <hr />
            <GoogleAuthButton class="GoogleAuthButton" />
        </div>
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

