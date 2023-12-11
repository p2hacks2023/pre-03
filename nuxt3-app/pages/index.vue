<template>
    <div>
        <div id="map"></div>
        <ul>
            <li>lat: <span id="lat"></span></li>
            <li>lng: <span id="lng"></span></li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "Home",
    mounted() {
    },
    methods: {
        getClickLatLng(lat_lng, map) {
            // 座標を表示
            document.getElementById('lat').textContent = lat_lng.lat();
            document.getElementById('lng').textContent = lat_lng.lng();

            // マーカーを設置
            var marker = new google.maps.Marker({
                position: lat_lng,
                map: map
            });

            // 座標の中心をずらす
            // http://syncer.jp/google-maps-javascript-api-matome/map/method/panTo/
            map.panTo(lat_lng);
        }
    }
}
</script>

<style scoped src="./index.css"></style>

