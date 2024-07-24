<script setup lang="ts">
useSeoMeta({
  title: "F*cking World - Paiement",
  ogTitle: "F*cking World - Paiement",
  description: 'Paiement sécurisé pour votre réservation à F*cking World !',
  ogDescription: 'Paiement sécurisé pour votre réservation à F*cking World !',
  ogImage: '',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="my-48 mx-2">
    <div class="text-center mb-16">
      <h1 class="font-variant text-4xl lg:text-6xl mb-4">Réservation</h1>
      <p class="font-neutral-700 text-lg">Obtenez vos billets dès maintenant !</p>
    </div>

    <div class="bg-white rounded-2xl lg:max-w-screen-lg mx-auto text-black p-8 lg:p-16">

      <ReservationInformations/>

      <ReservationStep :currentStep="3" />

      <Checkout/>

    </div>
  </div>
</template>
