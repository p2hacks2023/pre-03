<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
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
    const auth = getAuth(app);
    const email = "sinken.p2hacks2023@gmail.com";
    const password = "hogehugahoober"
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}
</script>