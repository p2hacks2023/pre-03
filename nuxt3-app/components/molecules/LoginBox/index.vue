<template>
    <div class="LoginBox">
        <div class="wrap">
            <div class="label">ひんやりあるばむアカウントでログイン</div>
            <InputBox class="InputBox" placeholder="メールアドレス" @onchange="(val) => { this.email = val }" />
            <InputBox class="InputBox" type="password" placeholder="パスワード" @onchange="(val) => { this.password = val }" />
            <Button @click="login" class="Button">Login</Button>
            <Button class="Button">
                <routerLink to="/Signin" style="color:#FCFCFC; text-decoration: none;">
                    新規作成
                </routerLink>
            </Button>
            <hr />
            <GoogleLoginButton @click="loginWithGoogle" class="GoogleLoginButton" />
        </div>
    </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default {
    name: "LoginBox",
    data: () => {
        return {
            email: "",
            password: "",
        }
    },
    auth: undefined,
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
        // Initialize Firebase Authentication and get a reference to the service
        this.auth = getAuth(app);
    },
    methods: {
        login: function () {
            signInWithEmailAndPassword(this.auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("login complte");
                    // ...
                    this.$router.push('/MyPostList');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + ", " + errorMessage);
                    alert("メールアドレス・パスワードが正しくありません。");
                });
        },
        loginWithGoogle: async function () {
            console.log(this.auth);
            const provider = new GoogleAuthProvider();
            await signInWithRedirect(this.auth, provider);
            this.$router.push('/MyPostList');
            setTimeout(() => {this.$router.push('/MyPostList');}, 1000);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>