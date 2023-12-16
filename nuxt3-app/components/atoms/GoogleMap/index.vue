<template>
    <div>
        <!-- <iframe :width="width" :height="height" src="http://127.0.0.1:8080//t/GoogleMaps.html" class="map"></iframe> -->
        <iframe :width="width" :height="height" src="https://portfolio.kcat.dev/t/GoogleMaps.html" class="map"></iframe>
    </div>
</template>

<script>
export default {
    name: "GoogleMap",
    props: {
        width: {
            type: String,
            required: true,
        },
        height: {
            type: String,
            required: true,
        }
    },
    mounted() {
        window.addEventListener("message", (response) => {
            if (response.data.type === "object") {
                const latlng = response.data.data.latlng;
                // localStorage.setItem("lat", latlng.lat+"");
                // localStorage.setItem("lng", latlng.lng+"");
                setTimeout(this.move(latlng.lat, latlng.lng), 300);
            }
        });
        navigator.geolocation.getCurrentPosition(this.success);
    },
    methods: {
        move(lat, lng) {
            console.log("move point");
            console.log(lat + "," + lng);
            localStorage.setItem("latlng", (lat + "," + lng))
            // this.$emit("move", (lat + "," + lng));
        },
        success(pos) {
            let coords = pos.coords;

            let latlng = {
                lat: coords.latitude,
                lng: coords.longitude
            }
            // localStorage.setItem("lat", latlng.lat+"");
            // localStorage.setItem("lng", latlng.lng+"");
            this.$emit("move", (latlng.lat + "," + latlng.lng));
            console.log("Nuxt");
            console.log(latlng);
            const iframeElement = document.querySelector("iframe");
            const message = {
                type: "Object",
                data: {
                    latlng: latlng,
                }
            }
            setTimeout(500, () => { iframeElement.contentWindow.postMessage(message, "*") });
        }
    }

}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>