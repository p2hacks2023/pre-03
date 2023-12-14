<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
<<<<<<< HEAD
</template>
=======
</template>

<script>
function initMap() {
    // マップの初期化
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 36.38992, lng: 139.06065 }
    });

    // クリックイベントを追加
    map.addListener('click', function (e) {
        this.getClickLatLng(e.latLng, map);
    });
}
</script>
>>>>>>> feat/GoogleMapComponent
