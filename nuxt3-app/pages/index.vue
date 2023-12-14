<template>
<<<<<<< HEAD
    <div id="App">
        <div id="header">ひんやりあるばむ</div>
        <div class="post-list">
            <div v-for="n in 5">
                <div v-for="hinnyari in hinnyaris">
                    <HinnyariBox class="HinnyariBox" :name="hinnyari.spotName" :imgPath="'images/testImage.jpg'"
                        :evaluation-sum-value="hinnyari.evaluationValue" :evaluation-count="hinnyari.evaluationCount" />
                </div>
            </div>
        </div>
        <PostButton id="PostButton"/>
        <Menu />
=======
    <div>
        <HinnyariPopUp class="HinnyariPopUp" :name="'hogehoge'" :imgPath="'images/testImage.jpg'" :evaluation-sum-value="10" :evaluation-count="4" />
>>>>>>> feat/HinnyariPopUpComponent
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
        // Initialize Cloud Firestore and get a reference to the service
        this.storage = getStorage(app);
        this.getDatas();
    },
    methods: {
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
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
