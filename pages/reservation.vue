<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import { useRouter } from 'vue-router';

useSeoMeta({
  title: "F*cking World - Réservation",
  ogTitle: "F*cking World - Réservation",
  description: 'Réservez vos billets pour F*cking World dès maintenant !',
  ogDescription: 'Réservez vos billets pour F*cking World dès maintenant !',
  ogImage: '',
  twitterCard: 'summary_large_image',
})

const router = useRouter();

const currentStep = ref(1);
const form = reactive({
  nom: "",
  prenom: "",
  email: "",
  email_confirmation: "",
  telephone: "",
  quantity: 0,
});

const errorMessage = ref("");
const emailErrorMessage = ref("");
const isNotEnough = computed(() => form.quantity <= 0);

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++;
  }
};

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const updateTotal = (event: Event) => {
  const target = event.target as HTMLInputElement;
  form.quantity = Number(target.value);
};

const validateEmails = () => {
  if (form.email !== form.email_confirmation) {
    emailErrorMessage.value = "Les adresses email ne se correspondent pas.";
    return false;
  }
  emailErrorMessage.value = "";
  return true;
};

const submitForm = async () => {
  if (!validateEmails()) {
    return;
  }

  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    const data = await response.json();

    if (response.ok) {
      router.push({ name: 'paiement', query: { clientSecret: data.clientSecret } });
    } else {
      errorMessage.value = "L'adresse email saisie est invalide.";
    }
  } catch (error) {
    errorMessage.value = "L'adresse email saisie est invalide.";
  }
};
</script>


<template>
  <div class="my-24 mx-2">
    <div class="text-center mb-16">
      <h1 class="font-variant text-4xl lg:text-6xl mb-4" data-aos="fade-up">Réservation</h1>
      <p class="font-neutral-700 text-lg" data-aos="fade-up" data-aos-delay="200">Obtenez vos billets dès maintenant !</p>
    </div>

    <form class="bg-white rounded-2xl lg:max-w-screen-lg mx-auto text-black p-8 lg:p-16" @submit.prevent="submitForm" data-aos="fade-up" data-aos-delay="400">

      <ReservationInformations/>


      <div v-if="currentStep === 1">
        <ReservationStep :currentStep="currentStep" />

        <table class="w-full mb-4">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-left">Tarif</th>
              <th scope="col">Prix</th>
              <th scope="col" class="text-right">Quantité</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarif early</td>
              <td class="text-center">10 €</td>
              <td class="text-right">
                <select class="border-2 shadow px-6 py-3 my-2 rounded-lg" name="quantite" id="quantite" @change="updateTotal($event)" v-model="form.quantity">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="bg-neutral-200 text-right p-2 rounded-lg text-lg mb-4"><p>Total (TTC) : {{ form.quantity * 10 }} €</p></div>

        <div class="flex justify-end">
          <button
              class="rounded-lg px-6 py-3 border-2 font-bold flex w-fit items-center hover:scale-105 ease-in-out transition-all bg-black text-white"
              :class="{ 'opacity-50 cursor-not-allowed': isNotEnough }"
              :disabled="isNotEnough"
              @click="nextStep"
          >Suite</button>
        </div>
      </div>

      <div v-if="currentStep === 2">
        <ReservationStep :currentStep="currentStep" />

        <div class="lg:flex lg:gap-x-3">
          <div class="mb-5 lg:basis-1/2">
            <label for="prenom" class="block mb-2 font-medium">Prénom</label>
            <input v-model="form.prenom" type="text" id="prenom" class="border shadow rounded-lg block w-full p-2.5 placeholder-neutral-400 focus:ring-neutral-500 focus:border-neutral-500" placeholder="Donald" required autocomplete="given-name" />
          </div>

          <div class="mb-5 lg:basis-1/2">
            <label for="nom" class="block mb-2 font-medium">Nom</label>
            <input v-model="form.nom" type="text" id="nom" class="border shadow rounded-lg block w-full p-2.5 placeholder-neutral-400 focus:ring-neutral-500 focus:border-neutral-500" placeholder="Trump" required autocomplete="family-name" />
          </div>
        </div>


        <div class="mb-5">
          <label for="email" class="block mb-2 font-medium">Email</label>
          <input v-model="form.email" type="email" id="email" class="border shadow rounded-lg block w-full p-2.5 placeholder-neutral-400 focus:ring-neutral-500 focus:border-neutral-500" placeholder="donald.trump@gmail.com" required autocomplete="email" />
        </div>

        <div class="mb-5">
          <label for="email_confirmation" class="block mb-2 font-medium">Confirmation email</label>
          <input v-model="form.email_confirmation" type="email" id="email_confirmation" class="border shadow rounded-lg block w-full p-2.5 placeholder-neutral-400 focus:ring-neutral-500 focus:border-neutral-500" placeholder="donald.trump@gmail.com" required />
          <p v-if="emailErrorMessage" class="text-red-500 mt-2">{{ emailErrorMessage }}</p>
        </div>

        <div class="mb-5">
          <label for="telephone" class="block mb-2 font-medium">Numéro de téléphone <span class="text-sm text-neutral-500">(Optionnel)</span></label>
          <input v-model="form.telephone" type="text" id="telephone" class="border shadow rounded-lg block w-full p-2.5 placeholder-neutral-400 focus:ring-neutral-500 focus:border-neutral-500" placeholder="06 01 02 03 04" autocomplete="tel"/>
        </div>

        <div class="flex justify-between">
          <button
              class="rounded-lg px-6 py-3 border-2 font-bold flex w-fit items-center hover:scale-105 ease-in-out transition-all bg-neutral-200 text-black"
              @click="previousStep"
          >Retour</button>
          <button type="submit" class="rounded-lg px-6 py-3 border-2 font-bold flex w-fit items-center hover:scale-105 ease-in-out transition-all bg-black text-white"
          >Suite</button>
        </div>

        <div v-if="errorMessage" class="mt-4 p-4 bg-red-200 text-red-800 rounded">
          <p>{{ errorMessage }}</p>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>