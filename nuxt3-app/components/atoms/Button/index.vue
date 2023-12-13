<template>
    <div class="button">
        ボタン
        <slot />
    </div>
</template>

<script>
export default {
    name: "Button"
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>