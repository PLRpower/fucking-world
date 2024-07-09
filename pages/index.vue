<script setup>

</script>

<template>
  <h1 id="random" class="mt-24 text-5xl text-center lg:text-9xl">F*cking World</h1>
  <h3 class="text-3xl text-center lg:text-5xl">09.10.24</h3>
  <Button icon="mingcute:ticket-fill" link="https://google.com" class="m-auto mt-16 lg:text-xl">
    Get your tickets
  </Button>
  <div style="height: 300px">
    <img src="/assets/img/eclipse.png" alt="Eclipse" class="eclipse-image -z-10 absolute">
  </div>
  <h2 class="text-center text-3xl">Event by</h2>
  <div class="flex flex-col justify-center items-center mt-4 gap-2">
    <p class="flex w-fit items-center">
      <Icon name="ph:disco-ball-fill" class="text-3xl me-2"/>
      Climate Change(s)
    </p>
    <img src="assets/img/kooma.png" alt="Kooma" class="h-12">
    <p>Fluo</p>
  </div>

</template>

<style scoped>
.eclipse-image {
  animation: rotate 100s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>