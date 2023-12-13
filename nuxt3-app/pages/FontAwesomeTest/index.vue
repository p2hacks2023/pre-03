<template>
    <div>
        <!-- https://fontawesome.com/search -->
        <!-- free版ではBrands IconとClassic Iconが利用可能。-->
        
        <font-awesome-icon :icon="['fas', 'house']" style="height: 100px"/>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" style="width: 10%"/>
        <font-awesome-icon :icon="['fas', 'user']" />
        <font-awesome-icon :icon="['fas', 'circle-plus']" style="{color: 'red'}"/>
        <font-awesome-icon :icon="['far', 'image']" />
        <font-awesome-icon :icon="['fas', 'bars']" size="2x"/>
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['far', 'star']" />
        <font-awesome-icon :icon="['far', 'circle-xmark']" />
        <font-awesome-icon :icon="['fas', 'arrow-up']" />
        <font-awesome-icon :icon="['fas', 'paperclip']" />
        <font-awesome-icon :icon="['fas', 'arrow-up-from-bracket']" />
        <font-awesome-icon :icon="['far', 'circle-user']" />
        <font-awesome-icon :icon="['fas', 'gear']" style="height: 100px"/>
        <font-awesome-icon :icon="['fas', 'trash']" />
        <font-awesome-icon :icon="['fas', 'bookmark']" />
        <font-awesome-icon :icon="['far', 'bookmark']" />
        <font-awesome-icon :icon="['far', 'folder-open']" />
        <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
        <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
    </div>
</template>

<script>
export default {
    name: "FontAwesomeTest",
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>