<template>
    <div class="PostPopUpMap">
        <Button class="Button" @click="this.$emit('clickOk')">決定</Button>
        <CloseButton class="CloseButton" @click="this.$emit('clickClose')" />
        <Label class="Label">ひんやりスポットを選択</Label>
        <GoogleMap class="GoogleMap" width=330px height=350px @move="move(val)"/>
    </div>
</template>

<script>
export default {
    name: "PostPopUpMap",
    methods: {
        move: function(val) {
            console.log(val);
            this.$emit("move", val);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>