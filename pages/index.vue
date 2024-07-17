<script>
export default {
  mounted() {
    const words = document.querySelectorAll('.slide-word');
    let currentIndex = 0;

    words[currentIndex].classList.add('show');

    setInterval(() => {
      words[currentIndex].classList.remove('show');
      words[currentIndex].classList.add('hide');
      words[(currentIndex + 2) % words.length].classList.remove('hide');


      currentIndex = (currentIndex + 1) % words.length;

      words[currentIndex].classList.remove('hide');
      words[currentIndex].classList.add('show');

    }, 2000);

    const textContainer = document.getElementById('text-container');

    setTimeout(() => {
      textContainer.classList.add('moving-text');
    }, 1000);
  }
}
</script>

<template>
  <h1 id="random" class="mt-24 text-5xl text-center lg:text-9xl">F*cking<br/>World</h1>
  <h3 class="text-2xl text-center lg:text-5xl">09.10.24</h3>
  <Button icon="mingcute:ticket-fill" link="/reservation" class="m-auto mt-16 lg:text-xl">
    Get your tickets
  </Button>
  <div style="position: absolute; top:0; width: 100%">
    <img src="/public/img/eclipse.webp" alt="Eclipse" class="eclipse-image -z-10 absolute">
  </div>

  <div class="flex flex-col justify-center items-center mt-4 gap-4">
    <h2 class="text-center text-3xl mt-48">Events by</h2>
    <p class="flex w-fit items-center">
      <Icon name="ph:disco-ball-fill" class="text-3xl me-2"/>
      Climate Change(s)
    </p>
    <img src="/public/img/kooma.webp" alt="Kooma" class="h-12">
    <p>Fluo</p>
  </div>

  <div class="max-w-3xl mx-auto text-4xl font-variant flex my-24 ms-4">
    <p class="me-2">F*ck</p>
    <div class="slide-container">
      <span class="slide-word">this</span>
      <span class="slide-word">that</span>
      <span class="slide-word">you</span>
      <span class="slide-word">the F*cking world</span>
      <span class="slide-word">off … and dance!</span>
    </div>
  </div>

  <div class="lg:flex my-24 gap-x-4 mb-4 text-5xl">
    <div class="basis-1/2 flex flex-col gap-y-4 mb-4 lg:mb-0">
      <MainImage letter="F">
        <img src="/public/img/2.webp" alt="1" class="w-full">
      </MainImage>
      <MainImage letter="U">
        <img src="/public/img/4.webp" alt="2" class="w-full">
      </MainImage>
      <MainImage letter="C">
        <img src="/public/img/6.webp" alt="3" class="w-full">
      </MainImage>
      <MainImage letter="K">
        <img src="/public/img/7.webp" alt="4" class="w-full">
      </MainImage>
    </div>
    <div class="basis-1/2 flex flex-col gap-y-4">
      <MainImage letter="I">
        <img src="/public/img/1.webp" alt="5" class="w-full">
      </MainImage>
      <MainImage letter="N">
        <img src="/public/img/5.webp" alt="6" class="w-full">
      </MainImage>
      <MainImage letter="G">
        <img src="/public/img/3.webp" alt="7" class="w-full">
      </MainImage>
    </div>
  </div>

  <div class="my-24">
    <div id="text-container" class="text-4xl font-bold moving-text font-variant">
      F*cking world !
    </div>
    <Button icon="mingcute:ticket-fill" link="/reservation" class="m-auto mt-16 lg:text-xl">
    Get your tickets
  </Button>
  </div>

</template>

<style scoped>
</style>