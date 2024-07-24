<script setup>
import { onMounted } from 'vue';
import { loadStripe } from '@stripe/stripe-js';
import ReservationInformations from "~/components/ReservationInformations.vue";

onMounted(async () => {
  const stripePromise = loadStripe('pk_test_51Ks6MxGgpz8JSTyFcUkS8SQLWztbs5XbeqPukiLVVl79Hr2fuOEc0swSwJQpb84ydu7uSkjn01PKrdnpWaBFAm6H00X4nJEJZ1');
  const stripe = await stripePromise;

  const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret');

  if (!clientSecret) {
    return;
  }

  const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

  switch (paymentIntent.status) {
    case 'succeeded':
      message.value = 'Payment succeeded!';
      break;
    case 'processing':
      message.value = 'Your payment is processing.';
      break;
    default:
      message.value = 'Something went wrong.';
      break;
  }
});
</script>

<template>
  <div class="my-48 mx-2">
    <div class="text-center mb-16">
      <h1 class="font-variant text-4xl lg:text-6xl mb-4">Réservation</h1>
      <p class="font-neutral-700 text-lg">Obtenez vos billets dès maintenant !</p>
    </div>

    <div class="bg-white rounded-2xl lg:max-w-screen-lg mx-auto text-black p-8 lg:p-16">

      <ReservationInformations/>

      <ReservationStep :currentStep="4" />

      <div id="success" class="max-w-screen-sm mx-auto">
        <p class="text-center font-variant text-3xl mb-2">Réservation réussie !</p>
        <p class="text-center text-lg">
          Rendez vous le 9 octobre 2024 à 19h00 !<br>
          Un email de confirmation avec le code QR va vous être envoyé d'ici quelques minutes (vérifiez vos spams !)
        </p>
        <nuxt-img src="/img/success.svg" alt="Succès" class="mx-auto"/>
        <WhiteButton link="/" class="mx-auto" icon="mingcute:home-3-fill">Retour à l'accueil</WhiteButton>
      </div>

      <div id="waiting">

      </div>

      <div id="error">

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>