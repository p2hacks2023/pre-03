<template>
    <div class="HinnyariBox">
        <img :src="imgPath" alt="ひんやり画像">
        <div>
            <p>{{ name }}</p>
            <Evaluation :evaluation-sum-value="evaluationSumValue" :evaluation-count="evaluationCount" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'HinnyariBox',
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
    },
}
</script>


<style lang="scss" scoped>
@import './index.scss';
</style>