<template>
  <div>
    <div class="bg-img">
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
@media screen and (min-width: 500px) {
  div {
    width: 100vw;
    height: 100vh;
  }

  .bg-img {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url("~/assets/images/background-image.jpg");
    background-size: cover;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }

  main {
    width: 500px;
    position: absolute;
    right: calc(50vw - 500px / 2);
  }
}
</style>