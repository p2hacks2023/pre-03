<template>
    <div>
        ひんやりあるばむ
    </div>
    <div class="links">
        <input type="text" id="input-email">
    </div>
    <div class="links">
        <input type="text" id="input-password">
    </div>
    <div class="links">
        <button @click="signin" class="button--green">SignIn</button>
    </div>
    <div class="links">
        <button @click="signinwithgoogle" class="button--green">SignInWithGoogle</button>
    </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    auth: undefined,
    name: "Signin",
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
        signinwithgoogle: function () {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(this.auth, provider);
        },
        signin: function () {
            const emailElement = document.getElementById("input-email");
            const email = emailElement.value;
            const passwordElement = document.getElementById("input-password");
            const password = passwordElement.value;
            createUserWithEmailAndPassword(this.auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("signin complete");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>