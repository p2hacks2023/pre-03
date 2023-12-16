<template>
    <div>
        <a :href="mapUrl" target="_blank">
            <slot />
        </a>
    </div>
</template>

<script>
export default {
    name: "GoogleMapButton",
    props: {
        mapUrl: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>