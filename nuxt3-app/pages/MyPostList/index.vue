<template></template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
    name: "MyPostList",
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
    logout: function () {
        signOut(this.auth).then(() => {
            console.log("logout success");
        }).catch((error) => {
            // An error ocurred
            // ...
        });
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>