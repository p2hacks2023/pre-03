<template>
    <div class="input-box-test">
        <InputBox type="アカウント" :placeholder="'アカウント名を入力'" @onchange="getData(val)" />
    </div>
</template>

<script>
export default {
    name: "InputBoxTest",
    methods: {
        getData(val) {
            console.log(val);
        }
    }
}
</script>

<style lang="scss" scoped> @import './index.scss';
</style>