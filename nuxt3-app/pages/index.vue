<template>
    <div>
        ひんやりあるばむ
        <Term/>
    </div>
</template>

<script>
import Term from '~/components/molecules/Term/index.vue';

export default {
    components: {
    Term,
    },
    name: "Home"
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

