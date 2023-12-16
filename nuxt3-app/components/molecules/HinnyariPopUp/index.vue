<template>
    <div class="HinnyariPopUp">
        <div class="wrap">
            <CloseButton class="CloseButton" @click="this.$emit('clickClose')" />
            <img :src=imgPath alt="ひんやり画像">
            <div class="name">
                <div class="spotNameTag">商品名：</div>
                <div class="spotName">{{ name }}</div>
            </div>
            <div class="eval">
                <MinimumButton v-if="!isPostUser" @click="isEvaluationInput = true" class="MinimumButton">評価する</MinimumButton>
                <div v-else />
                <Evaluation class="Evaluation" :evaluation-sum-value="evaluationSumValue"
                    :evaluation-count="evaluationCount" />
            </div>
            <GoogleMapButton class="GoogleMapButton" :mapUrl="mapUrl">
                Google Mapsで開く
            </GoogleMapButton>
            <EvaluationInput v-if="isEvaluationInput" 
                @clickClose="isEvaluationInput = false"
                :now-evaluation-count="evaluationCount" 
                :now-evaluation-value="evaluationSumValue" 
                :db="db"
                :document-id="documentId"
                class="EvaluationInput" />
        </div>
    </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default {
    name: "HinnyariPopUp",
    data: () => {
        return {
            isEvaluationInput: false,
            isPostUser: true,
        }
    },
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
        },
        documentId: {
            type: String,
            required: true,
        },
        popUpUserId: {
            type: String,
            required: true,
        },
        isLogin: {
            type: Boolean,
            required: true,
        }
    },
    mounted() {
        const firebaseConfig = {
            apiKey: "AIzaSyDb6Y-8ischpWY57SxMxk3TYD76EDtA9ZY",
            authDomain: "hinnyari-album.firebaseapp.com",
            databaseURL: "https://hinnyari-album.firebaseio.com",
            projectId: "hinnyari-album",
            storageBucket: "hinnyari-album.appspot.com",
            messagingSenderId: "11865309438",
            appId: "1:11865309438:web:6825490f2e93401975e5af",
            measurementId: "G-ETT6D58FR6"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        // Initialize Cloud Firestore and get a reference to the service
        this.db = getFirestore(app);
        // Initialize Firebase Authentication and get a reference to the service
        this.auth = getAuth(app);
        
        if(this.isLogin) {
            setTimeout(() => {this.isPostUser = (this.auth.currentUser.uid === this.popUpUserId);}, 700);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

