<template>
    <div>
        <div class="fade" />
        <PostPopUpMap class="PostPopUpMap" @clickOk="this.$emit('clickOk')" @clickClose="this.$emit('clickClose')" @move="move(val)" />
    </div>
</template>

<script>
export default {
    name: "AppPagePostPopUp",
    methods: {
        move: function(val) {
            console.log("Map: "+val);
            this.$emit('move', val);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>