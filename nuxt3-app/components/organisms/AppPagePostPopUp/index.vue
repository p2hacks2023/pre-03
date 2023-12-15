<template>
    <div>
        <div class="fade" />
        <PostPopUpMap class="PostPopUpMap" @clickOk="this.$emit('clickOk')" @clickClose="this.$emit('clickClose')" />
    </div>
</template>

<script>
export default {
    name: "AppPagePostPopUp",
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>