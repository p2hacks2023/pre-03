<template>
    <div>
    </div>
    <div class="links">
        <button @click="download" class="button--green">Download</button>
    </div>
    <!-- ダウンロードされた画像が以下に表示される -->
    <img id="img_url" :src="img_url" />
    <input type="file" @change="upload" />
    <!-- アップロードされた画像が以下に表示される -->
    <img v-if="img_url" :src="img_url" />
</template>


<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
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
}
</script>