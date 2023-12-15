<template>
    <div id="App" :class="isSelectMap ? 'noScroll' : ''">
        <div id="header">ひんやりあるばむ</div>
        <div class="post-list">
            <div v-for="(hinnyari, index) in hinnyaris" :key="index">
                <HinnyariBox @click="view(index)" class="HinnyariBox" :name="hinnyari.spotName"
                    :imgPath="'https://firebasestorage.googleapis.com/v0/b/hinnyari-album.appspot.com/o/hinnyaris%2F'+hinnyari.imageUrl+'?alt=media'"
                    :evaluation-sum-value="hinnyari.evaluationValue"
                    :evaluation-count="hinnyari.evaluationCount" />
            </div>
        </div>
        <div v-if=false id="HinnyariPopUpBox">
            <HinnyariPopUp v-if="isHinyariPopUp" id="HinnyariPopUp" :name="'hogehoge'" :imgPath="'images/testImage.jpg'"
                :evaluation-sum-value="10" :evaluation-count="4" />
        </div>
        <div v-if="isSelectMap" id="SelectMap">
            <AppPagePostPopUp @clickClose="postPopUpClose" @clickOk="inputSpot" />
        </div>
        <div v-if="isInputSpot" id="InputSpot">
            <GoogleMap class="GoogleMap" :width="width + 'px'" :height="height + 'px'" />
            <div class="fade"></div>
            <Transition>
                <PostPopUp class="PostPopUp" :storage="storage" :auth="auth" :db="db" @clickClose="inputSpotClose" />
            </Transition>
        </div>
        <PostButton id="PostButton" @click="postPopUp" />
        <Menu class="Menu" />
    </div>
</template>


<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "App",
    data: () => {
        return {
            hinnyaris: [],
            auth: undefined,
            db: undefined,
            storage: undefined,
            width: 0,
            height: 0,
            isSelectMap: false,
            isInputSpot: false,
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.width = window.innerWidth;
        this.height = window.innerHeight;

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
        // Initialize Cloud Firestore and get a reference to the service
        this.storage = getStorage(app);
        console.log("sucess: "+this.storage);
        this.getDatas();
        // Initialize Firebase Authentication and get a reference to the service
        this.auth = getAuth(app);
        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                // ...
            } else {
                console.log("signed out!");
                // User is signed out
                // ...
            }
        });
    },
    methods: {
        evaluateHinnyari: async function () {
            const washingtonRef = doc(this.db, "hinnyaris", "");

            await updateDoc(washingtonRef, {
                count: 1,//+1する
                evaluationValue: 1//ずっと足す
            });
        },
        getDatas: async function () {
            const querySnapshot = await getDocs(collection(this.db, "hinnyaris"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                this.hinnyaris.push(doc.data());
            });
        },
        delete: async function () {
            const docname = "2QKnhbHen7RPO6hEwUzI";
            await deleteDoc(doc(this.db, "hinnyaris", docname));
        },
        postPopUp: function () {
            this.isSelectMap = true;
        },
        postPopUpClose: function () {
            this.isSelectMap = false;
        },
        inputSpot: function () {
            this.isSelectMap = false;
            this.isInputSpot = true;
        },
        inputSpotClose: function () {
            this.isSelectMap = true;
            this.isInputSpot = false;
        },
        view: function (index) {
            console.log(index);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
