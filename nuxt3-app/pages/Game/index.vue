<template>
    <div>
        <div v-if="isCheckLogin">
            <div v-if="isLogin">
                白熊のゲームページ
            </div>
            <div v-else>
                <NoLoginButtons />
            </div>
        </div>
        <div v-else class="loading-page">
            <p>Loading...</p>
        </div>
        <Menu class="Menu" />
    </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";

export default {
    name: "Game",
    data: () => {
        return {
            isLogin: false,
            isCheckLogin: false,
            auth: undefined,
            db: undefined,
            evaluationSum: 0,
            storage: undefined,
            myHinnyaris: [],
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

        this.storage = getStorage();

        setTimeout(this.checkLogin, 700);
    },
    methods: {
        checkLogin: function () {
            this.isLogin = this.auth.currentUser !== null;
            console.log(this.isLogin);
            if (this.isLogin) {
                this.getDatas();
            }
            this.isCheckLogin = true;
        },
        getDatas: async function () {
            console.log("getData");
            const q = query(collection(this.db, "hinnyaris"), where("userid", "==", this.auth.currentUser.uid))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                this.evaluationSum += doc.data().evaluationValue;
            });
            console.log(this.evaluationSum);
        },
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>