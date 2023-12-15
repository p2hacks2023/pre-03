<template>
    <div id="App" :class="isSelectMap ? 'noScroll' : ''">
        <div id="header">ひんやりあるばむ</div>
        <div class="post-list">
            <div v-for="n in 5">
                <div v-for="(hinnyari, index) in hinnyaris" :key="index">
                    <HinnyariBox @click="view(index)" class="HinnyariBox" :name="hinnyari.spotName"
                        :imgPath="'images/testImage.jpg'" :evaluation-sum-value="hinnyari.evaluationValue"
                        :evaluation-count="hinnyari.evaluationCount" />
                </div>
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
                <PostPopUp class="PostPopUp" @clickClose="inputSpotClose" />
            </Transition>
        </div>
        <PostButton id="PostButton" @click="postPopUp" />
        <Menu class="Menu" />
    </div>
</template>


<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
    name: "App",
    data: () => {
        return {
            hinnyaris: [],
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
        this.getDatas();
    },
    methods: {
        handleResize: function () {
            // resizeのたびにこいつが発火するので、ここでやりたいことをやる
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        },
        getDatas: async function () {
            const querySnapshot = await getDocs(collection(this.db, "hinnyaris"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                this.hinnyaris.push(doc.data());
            });
        },
        download: function () {
            const filename = "いも.jpg";
            const pathReference = ref(this.storage, 'hinnyaris/' + filename);
            getDownloadURL(pathReference)
                .then((url) => {
                    // This can be downloaded directly:
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = (event) => {
                        const blob = xhr.response;
                    };
                    xhr.open('GET', url);
                    xhr.send();

                    // Or inserted into an <img> element
                    const img = document.getElementById('img_url');
                    // img.src = url;
                })
                .catch((error) => {
                    // Handle any errors
                });
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
