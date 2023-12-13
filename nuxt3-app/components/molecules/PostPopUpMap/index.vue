<template>
    <div>
        <Label class="Label">ひんやりスポットを選択</Label>
        <GoogleMap class="GoogleMap" width=330px height=350px />
        <Button class="Button">決定</Button>
    </div>
</template>

<script>
export default {
    name: "PostPopUpMap",
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>