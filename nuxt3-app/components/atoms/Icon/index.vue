
import type { RouterLink } from 'vue-router';
<template>
    <div>
        <RouterLink to="/">
            <img src="~/assets/images/icon-clear.png" />
        </RouterLink>
    </div>
</template>

<style scoped>
img {
    position: fixed;
    top: 10px;
    left: 10px;
    width: 80px;
    height: auto;
}

@media screen and (min-width: 500px) {
    img {
        left: calc((100vw - 500px) / 2 + 10px);
    }
}
</style>

<script>
export default {
    name: 'Icon'
}
</script>