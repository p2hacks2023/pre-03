<template>
    <div class="EvaluationInput">
        <div class="text">
            ひんやり具合を<br />
            評価しましょう！
        </div>
        <div class="input">
            <div class="stars-box">
                <NuxtRating class="stars" :read-only="false" :ratingValue="1" :rating-size="'30px'" />
            </div>
            <Button class="Button">送信</Button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EvaluationInput'
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>