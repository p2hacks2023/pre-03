<template>
    <div>
        <div>
            <div class="mini-buttons">
                <MinimumButton>画像を選択</MinimumButton>
                <MinimumButton>スポット選択へ戻る</MinimumButton>
            </div>
            <img :src="imgPath" alt="選択画像">
            <InputBox placeholder="商品名・スポット名" @onchange="(val) => {console.log(val)}"/>
            <Button>投稿</Button>
        </div>
    </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
    name: "PostPopUp",
    data: () => {
        return {
            imgPath: "",
        }
    },
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
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>