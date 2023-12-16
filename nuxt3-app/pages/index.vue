<template>
    <div id="App" :class="isSelectMap ? 'noScroll' : ''">
        <div id="header">ひんやりあるばむ</div>
        <div class="post-list">
            <div v-for="(hinnyari, index) in hinnyaris" :key="index">
                <HinnyariBox @click="view(index)" class="HinnyariBox" :name="hinnyari.spotName"
                    :imgPath="'https://firebasestorage.googleapis.com/v0/b/hinnyari-album.appspot.com/o/hinnyaris%2F' + hinnyari.imageUrl + '?alt=media'"
                    :evaluation-sum-value="hinnyari.evaluationValue" :evaluation-count="hinnyari.evaluationCount" />
            </div>
        </div>
        <div v-if="isHinnyariPopUpBox" id="HinnyariPopUpBox">
            <HinnyariPopUp id="HinnyariPopUp" @clickClose="viewClose" :name="selectSpotName"
                :imgPath="'https://firebasestorage.googleapis.com/v0/b/hinnyari-album.appspot.com/o/hinnyaris%2F' + selectImgPath + '?alt=media'"
                :evaluation-sum-value="selectEvaluationValue" :evaluation-count="selectEvaluationCount"
                :popUpUserId="selectUserId"
                :document-id="selectDocumentId"
                :mapUrl="'https://www.google.com/maps/search/?api=1&query=' + selectMapUrl" />
        </div>
        <div v-if="isSelectMap" id="SelectMap">
            <AppPagePostPopUp @clickClose="postPopUpClose" @clickOk="inputSpot" />
        </div>
        <div v-if="isInputSpot" id="InputSpot">
            <GoogleMap class="GoogleMap" :width="width + 'px'" :height="height + 'px'" />
            <div class="fade"></div>
            <Transition>
                <PostPopUp class="PostPopUp" :storage="storage" :auth="auth" :db="db" :latlng="latlng"
                    @clickClose="inputSpotClose" @successPost="allPopUpClose" />
            </Transition>
        </div>
        <PostButton id="PostButton" @click="postPopUp" />
        <Menu class="Menu" />
    </div>
</template>


<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "App",
    data: () => {
        return {
            hinnyaris: [],
            hinnyarisId: [],
            unsubscribe: undefined,
            auth: undefined,
            db: undefined,
            storage: undefined,
            width: 0,
            height: 0,
            latlng: undefined,
            isSelectMap: false,
            isInputSpot: false,
            isHinnyariPopUpBox: false,
            selectSpotName: "",
            selectImgPath: "",
            selectEvaluationValue: 0,
            selectEvaluationCount: 0,
            selectDocumentId: "",
            selectUserId: "",
            mapUrl: "",
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
        console.log("sucess: " + this.storage);
        // this.getDatas();
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
        this.listenHinnyari();
    },
    methods:
    {
        listenHinnyari: function () {
            this.unsubscribe = onSnapshot(collection(this.db, "hinnyaris"), (querySnapshot) => {
                this.hinnyaris = [];
                querySnapshot.forEach((doc) => {
                    this.hinnyaris.push(doc.data());
                    this.hinnyarisId.push(doc.id);
                });
            });
        },
        // 自動更新されるようになったのでgetDatasは不必要
        // getDatas: async function () {
        //     const querySnapshot = await getDocs(collection(this.db, "hinnyaris"));
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         console.log(doc.id, " => ", doc.data());
        //         this.hinnyaris.push(doc.data());
        //     });
        // },
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
            this.isHinnyariPopUpBox = true;
            this.selectSpotName = this.hinnyaris[index].spotName;
            this.selectImgPath = this.hinnyaris[index].imageUrl;
            this.selectEvaluationValue = this.hinnyaris[index].evaluationValue;
            this.selectEvaluationCount = this.hinnyaris[index].evaluationCount;
            this.selectMapUrl = this.hinnyaris[index].mapUrl;
            this.selectUserId = this.hinnyaris[index].userid;
            this.selectDocumentId = this.hinnyarisId[index];
        },
        viewClose: function () {
            this.isHinnyariPopUpBox = false;
        },
        allPopUpClose: function () {
            this.isSelectMap = false;
            this.isInputSpot = false;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
