<template>
    <div>
        <router-link to="/Login" class="Buttons Button1">
            <Button class="Button">Login</Button>
        </router-link>
        <router-link to="/Signin" class="Buttons Button2">
            <Button class="Button">新規作成</Button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "NoLoginButtons"
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>