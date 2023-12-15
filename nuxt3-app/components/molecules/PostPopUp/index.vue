<template>
    <div class="PostPopUp">
        <CloseButton class="CloseButton" @click="this.$emit('clickClose')" />
        <div class="select-img">
            <div class="mini-buttons">
                <div class="select-file">
                    <input type="file" @change="setImage" />
                    <MinimumButton>画像を選択</MinimumButton>
                </div>
                <!-- <MinimumButton>スポット選択へ戻る</MinimumButton> -->
            </div>
            <img :src="imageUrl" alt="選択画像">
        </div>
        <InputBox class="InputBox" placeholder="商品名・スポット名" @onchange="(val) => { this.spotName = val }" />
        <Button class="Button" @click="post">投稿</Button>
    </div>
</template>

<script>
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { reloadNuxtApp } from "nuxt/app";

export default {
    name: "PostPopUp",
    props: {
        storage: {
            default: undefined,
        },
        auth: {
            default: undefined,
        },
        db: {
            default: undefined,
        },
    },
    data: () => {
        return {
            image: undefined,
            imageUrl: undefined,
            spotName: "",
        }
    },
    mounted() {
        console.log("bad: "+this.storage);
    },
    methods: {
        setImage: function(prop) {
            this.image = prop.target.files[0];
            this.imageUrl =  URL.createObjectURL(this.image);
        },
        post: async function () {
            const imgPath = this.auth.currentUser.uid + "_" + Date.now();
            await this.upload(imgPath);
            await this.addData(imgPath);
            console.log(this.image);
            console.log("success post");
            reloadNuxtApp();
        },
        addData: async function (imageUrl) {
            await addDoc(collection(this.db, "hinnyaris"), {
                evaluationCount: 0,
                evaluationValue: 0,
                imageUrl: imageUrl,
                mapUrl: "test",
                spotName: this.spotName,
                userid: this.auth.currentUser.uid,
            });
        },
        upload: async function (imagePath) {
            //アップロードしたい画像の情報を取得。
            const file = this.image;
            const storageRef = ref(this.storage, 'hinnyaris/' + imagePath);

            await uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>