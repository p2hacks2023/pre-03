<template>
    <div class="Menu">
        <router-link to="/">
            <font-awesome-icon :icon="['fas', 'house']" class="icon home" />
        </router-link>
        <router-link to="/MyPostList">
            <div class="circle icon">
                <font-awesome-icon :icon="['fas', 'user']" class="user" />
            </div>
        </router-link>
        <router-link to="/Game">
            <font-awesome-icon :icon="['fas', 'gamepad']" class="icon game" />
        </router-link>
    </div>
</template>
  
<script>
export default {
    name: "Menu"
}
</script>
  
<style lang="scss" scoped>
@import './index.scss';
</style>