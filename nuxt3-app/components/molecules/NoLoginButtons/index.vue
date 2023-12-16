<template>
    <div class="Buttons ">
        <div>
            <Button class="Button">
                <router-link to="/Login"  style="color:#FCFCFC; text-decoration: none;">
                    Login
                </router-link>
            </Button>
            <Button class="Button">
                <router-link to="/Signin" style="color:#FCFCFC; text-decoration: none;">
                    新規作成
                </router-link>
            </Button>
        </div>
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