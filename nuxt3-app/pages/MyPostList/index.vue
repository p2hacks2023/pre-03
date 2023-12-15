<template>
  <div>
    <div v-if="isLogin">

    </div>
    <div v-else>
      
    </div>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default {
  name: "MyPostList",
  data: () => {
    return {
      db: undefined,
      isLogin: false,
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
  },
  methods: {
    getDatas: async function () {
      // 自分のデータだけとってくるようにあとで変更！
      const querySnapshot = await getDocs(collection(db, "hinnyaris"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>