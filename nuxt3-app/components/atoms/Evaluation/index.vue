<template>
    <div class="Evaluation">
        <div>
            <span v-for="n in evalIntValue" :key="n">★</span>
            <span v-for="n in (5 - evalIntValue)" :key="n">☆</span>
        </div>
        <div class="evalVal">（<span class="evalVal">{{ evalValue }}</span>）</div>
    </div>
</template>

<script>
export default {
    name: 'Evaluation',
    props: {
        evaluationSumValue: {
            type: Number,
            required: true,
        },
        evaluationCount: {
            type: Number,
            required: true,
        }
    },
    data: () => {
        return {
            evalValue: 0,
            evalIntValue: 0,
        }
    },
    mounted() {
        const val = this.evaluationSumValue / this.evaluationCount;
        this.evalValue = Math.round(val * 100) / 100;
        this.evalIntValue = Math.floor(val);
    }
}
</script>


<style lang="scss" scoped>
@import './index.scss';
</style>