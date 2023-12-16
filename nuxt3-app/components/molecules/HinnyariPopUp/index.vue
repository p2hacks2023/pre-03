<template>
    <div class="HinnyariPopUp">
        <div class="wrap">
            <CloseButton class="CloseButton" @click="this.$emit('clickClose')"/>
            <img :src=imgPath alt="ひんやり画像">
            <div class="name">商品名：{{ name }}</div>
            <Evaluation class="Evaluation" :evaluation-sum-value="evaluationSumValue" :evaluation-count="evaluationCount" />
            <GoogleMapButton class="GoogleMapButton" :mapUrl="mapUrl">
                    Google Mapsで開く
            </GoogleMapButton>
        </div>
    </div>
</template>

<script>
export default {
    name: "HinnyariPopUp",
    props: {
        name: {
            type: String,
            required: true,
        },
        imgPath: {
            type: String,
            required: true,
        },
        evaluationSumValue: {
            type: Number,
            required: true,
        },
        evaluationCount: {
            type: Number,
            required: true,
        },
        mapUrl: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

