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
        <button @click="login" class="button--green">LogIn</button>
    </div>
    <div class="links">
        <button @click="loginwithgoogle" class="button--green">LogInWithGoogle</button>
    </div>
</template>



<script>
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default {
    auth: undefined,
    name: "Login",
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
            const emailElement = document.getElementById("input-email");
            const email = emailElement.value;
            const passwordElement = document.getElementById("input-password");
            const password = passwordElement.value;

            signInWithEmailAndPassword(this.auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("login complte");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        },
        loginwithgoogle: function () {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(this.auth, provider);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>