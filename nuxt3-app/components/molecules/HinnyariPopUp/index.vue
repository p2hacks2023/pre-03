<template>
    <div>
        <CloseButton />
        <img :src=imgPath alt="ひんやり画像">
        <div>商品名：{{ name }}</div>
        <Evaluation :evaluation-sum-value="evaluationSumValue" :evaluation-count="evaluationCount" />
        <GoogleMapButton />
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
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

