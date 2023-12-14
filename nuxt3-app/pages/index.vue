<template>
    <div>
        ひんやりあるばむ
    </div>
</template>


<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
    name: "Home",
}

</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
