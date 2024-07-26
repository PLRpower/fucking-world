<script setup lang="ts">
useSeoMeta({
  title: "F*cking World - Dress code",
  ogTitle: "F*cking World - Dress code",
  description: 'Bienvenue ou là où tout est possible, où tout est F*cking World !',
  ogDescription: 'Bienvenue ou là où tout est possible, où tout est F*cking World !',
  ogImage: '',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <VerticalLine class="h-28" data-aos="fade-up"/>

  <div class="text-center mb-16 max-w-screen-lg mx-auto bg-black">
    <h1 class="font-variant text-3xl lg:text-6xl mb-8" data-aos="fade-up" data-aos-delay="100">Le concept</h1>
    <p class="font-neutral-700 md:text-xl lg:text-2xl mb-16" data-aos="fade-up" data-aos-delay="200">
      Bienvenue ou là où tout est possible, où tout est F*cking World !<br>
      Ici, on ne se laisse pas abattre par les crises géopolitiques, les catastrophes climatiques ou les inégalités croissantes ; <span class="text-nowrap">on transforme ces défis en un concept unique :</span>
    </p>
  </div>

  <VerticalLine class="h-48" data-aos="fade-up" data-aos-delay="300" />

  <div class="py-16 flex gap-x-8 justify-center">
    <span class="text-9xl font-variant" data-aos="fade-up">4</span>
    <div class="text-left mt-2">
      <h2 data-aos="fade-up" data-aos-delay="200" class="text-4xl">heures</h2>
      <h2 data-aos="fade-up" data-aos-delay="400" class="text-4xl">artistes</h2>
      <h2 data-aos="fade-up" data-aos-delay="600" class="text-4xl">sons</h2>
    </div>
  </div>

  <VerticalLine class="h-48" data-aos="fade-up" data-aos-delay="800" />

  <div class="py-16">
    <div class="flex justify-center gap-x-16 font-variant text-4xl">
      <div class="-translate-y-8">
        <p data-aos="fade-down" data-aos-delay="100" >Electro</p>
      </div>
      <div class="-translate-y-4">
      <p data-aos="fade-down" data-aos-delay="600" >House</p>
      </div>
      <div class="-translate-y-12">
      <p data-aos="fade-up" data-aos-delay="300" >Disco</p>
      </div>
    </div>
    <div class="flex justify-center gap-x-16 font-variant text-4xl mt-4">
      <div class="-translate-y-4">
      <p data-aos="fade-up">Deep House</p>
      </div>
      <p data-aos="fade-up" data-aos-delay="400" >Electro</p>
    </div>
    <div class="flex justify-center gap-x-16 font-variant text-4xl mt-4">
      <div class="translate-y-4">
        <p data-aos="fade-down" data-aos-delay="200" >Techno</p>
      </div>
      <p data-aos="fade-up" data-aos-delay="700" >Funk</p>
      <div class="translate-y-8">
        <p data-aos="fade-up">Tech House</p>
      </div>
    </div>
  </div>

  <VerticalLine class="h-48" data-aos="fade-up" data-aos-delay="800" />

  <div class="py-16 text-center">
    <h2 data-aos="fade-up" data-aos-delay="200" class="text-4xl">Dress code :</h2>
    <p class="font-neutral-700 text-xl lg:text-2xl mb-8" data-aos="fade-up" data-aos-delay="200">Tout est permis ...<br> sauf le manque de créativité !</p>
    <WhiteButton icon="mingcute:dress-fill" class="mx-auto" link="/dress-code" data-aos="fade-up" data-aos-delay="400">Dress code</WhiteButton>
  </div>

  <VerticalLine class="h-48" data-aos="fade-up" data-aos-delay="800" />

  <div class="py-16 text-center flex justify-center gap-x-8 items-center" data-aos="fade-up">
    <Icon name="mingcute:location-fill" class="text-7xl font-variant"></Icon>
    <div>
      <h2 class="text-4xl font-variant">Kooma</h2>
      <p class="mt-2 md:text-lg">Strasbourg</p>
    </div>
  </div>

  <VerticalLine class="h-48" data-aos="fade-up" data-aos-delay="100" />

  <div class="py-16 text-center" data-aos="fade-up">
    <div class="flex justify-center gap-x-8 items-center">
      <p class="text-5xl font-variant" data-aos="fade-up">Before</p>
      <span class="text-8xl font-variant" data-aos="fade-up" data-aos-delay="300">&</span>
      <p class="text-5xl font-variant" data-aos="fade-up" data-aos-delay="600">After</p>
    </div>
    <p class="mt-8 md:text-lg" data-aos="fade-up" data-aos-delay="800">Quelques informations supplémentaires ...</p>
  </div>

  <VerticalLine class="h-48" data-aos="fade-up" data-aos-delay="100" />

  <div class="py-16 text-center">
    <p class="text-7xl font-variant" data-aos="fade-up">10€<span class="text-neutral-400 text-6xl">*</span></p>
    <p class="mt-2 md:text-lg text-neutral-400" data-aos="fade-up" data-aos-delay="200">*Tout les revenus sont versés aux artistes ainsi qu'à la logistique.</p>
    <WhiteButton icon="mingcute:ticket-fill" link="/reservation" class="m-auto mt-8 lg:text-xls" data-aos="fade-up" data-aos-delay="400">
      Get your tickets
    </WhiteButton>
  </div>

</template>

<style scoped>
</style>