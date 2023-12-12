<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <div class="links">
    <button @click="download" class="button--green">Download</button>
  </div>
  <!-- ダウンロードされた画像が以下に表示される -->
  <img id="img_url" :src="img_url" />
</template>

<script>
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default {
  img_url: undefined,
  storage: undefined,
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
    this.storage = getStorage(app);
  },
  methods: {
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