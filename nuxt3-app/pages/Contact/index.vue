<template>
    <div class="Contact">
        <div class="page-title">Contact</div>
        <div class="inquiry-forms">
            <div class="forms">
                <p>ニックネーム</p>
                <input type="text" id="fromContactName">
            </div>
            <div class="forms">
                <p>メールアドレス</p>
                <input type="email" id="fromContactMail" :value="email">
            </div>
            <div class="forms">
                <p>お問い合わせ内容</p>
                <textarea id="fromContactContent"></textarea>
            </div>
            <Button @click="send">送信</Button>
        </div>
    </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default {
    name: 'Contact',
    data: () => {
        return {
            isLogin: false,
            isCheckLogin: false,
            auth: undefined,
            db: undefined,
            myHinnyaris: [],
            myHinnyarisId: [],
            storage: undefined,
            email: "",
            isMenu: false,
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
        // Initialize Firebase Authentication and get a reference to the service
        this.auth = getAuth(app);

        setTimeout(this.checkLogin, 700);

        emailjs.init('2ormQroNbdWEwc7sv');
    },
    methods: {
        checkLogin: function () {
            this.isLogin = this.auth.currentUser !== null;
            console.log(this.isLogin);
            if (this.isLogin) {
                this.email = this.auth.currentUser.email;
            }
            this.isCheckLogin = true;
        },
        send: function() {
            // console.log("send");
            const name = document.getElementById("fromContactName");
            const mail = document.getElementById("fromContactMail");
            const msg = document.getElementById("fromContactContent");

            const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            // console.log(name.value, mail.value, msg.value);

            if (name.value == "") {
                alert("※お名前、またはニックネームを入力してください。");
            }
            else if (mail.value == "") {
                alert("※メールアドレスを入力してください。");
            }
            else if (!check.test(mail.value)) {
                alert("※メールアドレスを正しく入力してください。");
            }
            else if (msg.value == "") {
                alert("※お問い合わせ内容を入力してください。");
            }
            else {
                emailjs.send("service_iszh0a2", "template_n7sgqbu", {
                    user_name: name.value,
                    user_email: mail.value,
                    message: msg.value,
                });
                alert("お問い合わせを受け付けました。");
                name.value = "";
                mail.value = "";
                msg.value = "";
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
