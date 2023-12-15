<template>
    <div id="App" :class="isSelectMap ? 'noScroll' : ''">
        <div id="header">ひんやりあるばむ</div>
        <div class="post-list">
            <div v-for="n in 5">
                <div v-for="hinnyari in hinnyaris">
                    <HinnyariBox class="HinnyariBox" :name="hinnyari.spotName" :imgPath="'images/testImage.jpg'"
                        :evaluation-sum-value="hinnyari.evaluationValue" :evaluation-count="hinnyari.evaluationCount" />
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
            <GoogleMap class="GoogleMap" :width="width+'px'" :height="height+'px'" />
            <div></div>
        </div>
        <PostButton id="PostButton" @click="postPopUp" />
        <Menu />
    </div>
</template>


<script>


export default {
<<<<<<<<< Temporary merge branch 1
    name: "Home",
    db: undefined,
    storage: undefined,
    img_url: undefined,
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
    },
    methods: {
        addData: function () {
            // Add a new document in collection "cities"
            addDoc(collection(this.db, "hinnyaris"), {
                // count: を加算するやつ書く
                evaluationValue: 1,
                imageUrl: "test",
                mapUrl: "test",
                objectName: "test",
                spotName: "test"
            });
        },
        getDatas: async function () {
            const querySnapshot = await getDocs(collection(db, "hinnyaris"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        },
        delete: async function () {
            const docname = "2QKnhbHen7RPO6hEwUzI";
            await deleteDoc(doc(this.db, "hinnyaris", docname));
        },
        upload: function (props) {
            //アップロードしたい画像の情報を取得。
            const file = props.target.files[0];
            //画像ファイルのURLを取得。
            this.img_url = URL.createObjectURL(file);// いらないけど、ファイルurlはたぶんdbに格納するので取っておく
            const storageRef = ref(this.storage, 'hinnyaris/' + file.name);
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
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
                    img.src = url;
                })
                .catch((error) => {
                    // Handle any errors
                });
        }

    }
=========
    name: "Home"
>>>>>>>>> Temporary merge branch 2
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
