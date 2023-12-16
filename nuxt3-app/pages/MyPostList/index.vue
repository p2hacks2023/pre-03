<template>
    <div>
        <div v-if="isLogin">
            <div class="post-list">
                <div v-for="(hinnyari, index) in myHinnyaris" :key="index">
                    <HinnyariDeleteBox @deleteClick="deleteHinnyari(index)" class="HinnyariBox" :name="hinnyari.spotName"
                        :imgPath="'https://firebasestorage.googleapis.com/v0/b/hinnyari-album.appspot.com/o/hinnyaris%2F' + hinnyari.imageUrl + '?alt=media'"
                        :evaluation-sum-value="hinnyari.evaluationValue" :evaluation-count="hinnyari.evaluationCount" />
                </div>
            </div>
        </div>
        <div v-else>
            <NoLoginButtons />
        </div>
        <Menu class="Menu" />
    </div>
    <div class="links">
        <button @click="logout" class="button--green">Logout</button>
    </div>
</template>

<script>
import { reloadNuxtApp } from "nuxt/app";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";

export default {
    name: "MyPostList",
    data: () => {
        return {
            isLogin: false,
            auth: undefined,
            db: undefined,
            myHinnyaris: [],
            myHinnyarisId: [],
        }
    },
    async mounted() {
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
        setTimeout(this.checkLogin, 700);
    },
    methods: {
        checkLogin: function () {
            this.isLogin = this.auth.currentUser !== null;
            console.log(this.isLogin);
            if(this.isLogin) {
                this.getDatas();
            }
        },
        logout: async function () {
            await signOut(this.auth).then(() => {
                console.log("logout success");
            }).catch((error) => {
                console.log("logout error");
                // An error ocurred
                // ...
            });
            this.checkLogin();
        },
        getDatas: async function () {
            console.log("getData");
            const q = query(collection(this.db, "hinnyaris"), where("userid", "==", this.auth.currentUser.uid))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.myHinnyarisId.push(doc.id);
                this.myHinnyaris.push(doc.data());
            });
        },
        deleteHinnyari: async function(index) {
            console.log(this.myHinnyarisId[index]);
            const docname = this.myHinnyarisId[index];
            await deleteDoc(doc(this.db, "hinnyaris", docname));
            this.myHinnyaris.splice(index, 1);
            this.myHinnyarisId.splice(index, 1);
            // console.log(this.myHinnyarisId[index]);
        },
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>