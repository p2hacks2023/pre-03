<template>
    <div>
        <div v-if="isCheckLogin">
            <div class="sub-menu-btn" @click="isMenu = !isMenu">
                <i />
                <i />
                <i />
            </div>
            <div class="sub-menu" :class="isMenu ? 'sub-menu-true' : ''">
                <ul>
                    <li>
                        <routerLink to="/Contact">お問い合わせ</routerLink>
                    </li>
                    <hr />
                    <li>
                        <routerLink to="/Term">利用規約</routerLink>
                    </li>
                    <hr v-if="isLogin" />
                    <li v-if="isLogin" @click="isMenu = !isMenu">
                        <a @click="logout" class="logout-button" style="color:rgb(255, 40, 40);">Logout</a>
                    </li>
                </ul>
            </div>
            <div v-if="isLogin">
                <div class="profile">
                    <div>
                        <div class="icon">
                            <font-awesome-icon :icon="['fas', 'user']" class="user" />
                        </div>
                        <div class="email">{{ email }}</div>
                    </div>
                </div>
                <div class="post-list">
                    <div v-for="(hinnyari, index) in myHinnyaris" :key="index">
                        <HinnyariDeleteBox @deleteClick="deleteHinnyari(index)" class="HinnyariBox"
                            :name="hinnyari.spotName"
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
        <div v-else class="loading-page">
            <p>Loading...</p>
        </div>
    </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";

export default {
    name: "MyPostList",
    data: () => {
        return {
            isLogin: false,
            isCheckLogin: false,
            auth: undefined,
            db: undefined,
            myHinnyaris: [],
            myHinnyarisId: [],
            storage: undefined,
            email: "",
            isMenu: false,
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
                this.email = this.auth.currentUser.email;
            }
            this.isCheckLogin = true;
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
                // console.log(doc.id, " => ", doc.data());
                this.myHinnyarisId.push(doc.id);
                this.myHinnyaris.push(doc.data());
            });
        },
        deleteHinnyari: async function (index) {
            console.log(this.myHinnyarisId[index]);

            const desertRef = ref(this.storage, "hinnyaris/" + this.myHinnyaris[index].imageUrl);
            deleteObject(desertRef).then(() => {
                // File deleted successfully
            }).catch((error) => {
                // an error occurred
            });

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