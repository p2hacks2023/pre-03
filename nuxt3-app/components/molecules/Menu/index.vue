<template>
    <div class="Menu">
        <router-link to="/">
            <div class="side-icon">
                <font-awesome-icon :icon="['fas', 'house']" class="icon home" />
            </div>
        </router-link>
        <router-link to="/MyPostList">
            <div class="circle icon">
                <font-awesome-icon :icon="['fas', 'user']" class="user" />
            </div>
        </router-link>
        <router-link to="/Game">
            <div class="side-icon">
                <font-awesome-icon :icon="['fas', 'gamepad']" class="icon game" />
            </div>
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