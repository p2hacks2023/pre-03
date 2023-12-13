<template>
    <div>
        <div>
            <div v-for="hinnyari in hinnyaris">

            </div>
        </div>
        <Menu />
    </div>
</template>

<script>
export default {
    name: "App",
    data: () => {
        return {
            hinnyaris: [],
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>