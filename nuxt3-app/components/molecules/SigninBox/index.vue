<template>
    <div class="LoginBox">
        <div class="wrap">
            <div class="label">ひんやりあるばむアカウントを作成</div>
            <InputBox class="InputBox" placeholder="メールアドレス" @onchange="(val) => { this.email = val }" />
            <InputBox class="InputBox" type="password" placeholder="パスワード" @onchange="(val) => { this.password = val }" />
            <Button @click="signin" class="Button">新規作成</Button>
            <hr />
            <GoogleAuthButton @click="signinwithgoogle" class="GoogleLoginButton" />
        </div>
    </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword } from "firebase/auth";
export default {
    name: "LoginBox",
    data: () => {
        return {
            auth: undefined,
            email: "",
            password: "",
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
        // Initialize Firebase Authentication and get a reference to the service
        this.auth = getAuth(app);
    },
    methods: {
        signinwithgoogle: async function () {
            const provider = new GoogleAuthProvider();
            await signInWithRedirect(this.auth, provider);
            this.$router.push('/MyPostList');
            setTimeout(() => {this.$router.push('/MyPostList');}, 1000);
        },
        signin: async function () {
            let flag = false;
            // console.log(this.auth);
            await createUserWithEmailAndPassword(this.auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("signin complete");
                    // ...
                    flag = true;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    alert("メールアドレス・パスワードが正しくありません。");
                });
                if(flag) {
                    this.$router.push('/MyPostList');
                }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

