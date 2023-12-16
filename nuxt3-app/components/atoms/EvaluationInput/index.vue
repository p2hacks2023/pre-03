<template>
    <div class="EvaluationInput">
        <CloseButton @click="this.$emit('clickClose')" class="CloseButton" />
        <div class="text">
            ひんやり具合を<br />
            評価しましょう！
        </div>
        <div class="input">
            <div class="stars-box">
                <NuxtRating class="stars" @rating-selected="setRating" :read-only="false" :ratingValue="1"
                    :rating-size="'50px'" />
            </div>
            <Button @click="send" class="Button"><v-btn :loading="isSending" style="background-color:#FFFFFF00; box-shadow: 0 0 0 black; color: #FCFCFC;">送信</v-btn></Button>
        </div>
    </div>
</template>

<script>
import { reloadNuxtApp } from "nuxt/app";
import { doc, updateDoc } from "firebase/firestore";

export default {
    name: 'EvaluationInput',
    props: {
        db: {
            default: undefined,
            required: true,
        },
        documentId: {
            type: String,
            required: true,
        },
        nowEvaluationValue: {
            type: Number,
            required: true,
        },
        nowEvaluationCount: {
            type: Number,
            required: true,
        }
    },
    data: () => {
        return {
            ratingVal: 1,
            isSending: false,
        }
    },
    methods: {
        evaluateHinnyari: async function (val) {
            const washingtonRef = doc(this.db, "hinnyaris", this.documentId);

            await updateDoc(washingtonRef, {
                evaluationCount: this.nowEvaluationCount+1,//+1する
                evaluationValue: this.nowEvaluationValue + val//ずっと足す
            });
        },
        setRating: function (val) {
            this.ratingVal = val;
            // console.log(val);
        },
        send: async function () {
            this.isSending = true;
            await this.evaluateHinnyari(this.ratingVal);
            console.log(this.ratingVal);
            setTimeout(() => {
                reloadNuxtApp();    
            }, 5000);
            reloadNuxtApp();
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>