<template>
    <div>
        ひんやりあるばむ
    </div>
    <div class="links">
        <button @click="signin" class="button--green">SignIn</button>
    </div>
</template>



<script>
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default {
    auth: undefined,
    name: "Home",
    mounted(){
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
        signin: function () {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(this.auth, provider);
        }
    }
}
</script>

<style scoped src="./index.css"></style>

