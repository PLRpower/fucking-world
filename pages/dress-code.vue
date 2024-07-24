<script setup lang="ts">

import DressCodeImage from "~/components/DressCodeImage.vue";
</script>

<template>
  <div class="my-48">
    <div class="text-center mb-16">
      <h1 class="font-variant text-3xl lg:text-6xl mb-16">Dress code</h1>
      <p class="font-neutral-700 text-xl lg:text-2xl mb-16">Tout est permis ...<br> sauf le manque de créativité !</p>
      <p class="font-neutral-700 text-xl lg:text-2xl">Sources d'inspiration pour celles et ceux<br> qui manquent toutefois d'imagination : </p>
    </div>
    <DressCodeImage title="Burning-man">
      <nuxt-img src="/img/burning-man.webp" loading="lazy" alt="Burning man" class="w-full"/>
    </DressCodeImage>
    <DressCodeImage title="Heroes of WW2">
      <nuxt-img src="/img/heroes.webp" loading="lazy" alt="Heroes of WW2" class="w-full"/>
    </DressCodeImage>
    <DressCodeImage title="Woodstock">
      <nuxt-img src="/img/woodstock.webp" loading="lazy" alt="Woodstock" class="w-full"/>
    </DressCodeImage>
    <DressCodeImage title="Walt Disney">
      <nuxt-img src="/img/walt-disney.webp" loading="lazy" alt="Walt Disney" class="w-full"/>
    </DressCodeImage>
    <DressCodeImage title="Science-fiction">
      <nuxt-img src="/img/science-fiction.webp" loading="lazy" alt="Science-fiction" class="w-full"/>
    </DressCodeImage>
    <DressCodeImage title="Mad max">
      <nuxt-img src="/img/mad-max.webp" loading="lazy" alt="Mad max" class="w-full"/>
    </DressCodeImage>
    <DressCodeImage title="Dune">
      <nuxt-img src="/img/dune.webp" loading="lazy" alt="Dune" class="w-full"/>
    </DressCodeImage>
    <DressCodeImage title="Le parrain">
      <nuxt-img src="/img/le-parrain.webp" loading="lazy" alt="Le parrain" class="w-full"/>
    </DressCodeImage>
    <DressCodeImage title="Pop culture">
      <nuxt-img src="/img/pop-culture.webp" loading="lazy" alt="Pop culture" class="w-full"/>
    </DressCodeImage>
    <DressCodeImage title="God save the King/Queen">
      <nuxt-img src="/img/god-save.webp" loading="lazy" alt="God save the King/Queen" class="w-full"/>
    </DressCodeImage>
    <DressCodeImage title="Cultures populaires">
      <nuxt-img src="/img/cultures-populaires.webp" loading="lazy" alt="Cultures populaires" class="w-full"/>
    </DressCodeImage>
  </div>
</template>

<style scoped>
</style>