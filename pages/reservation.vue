<script>
export default {
  data() {
    return {
      currentStep: 1,
      form: {
        nom: "",
        prenom: "",
        email: "",
        email_confirmation: "",
        telephone: "",
        quantity: 0,
      },
    };
  },
  computed: {
    isNotEnough() {
      return this.form.quantity <= 0;
    },
  },
  methods: {
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    updateTotal(event) {
      this.quantity = event.target.value;
    },
    async submitForm() {
      try {
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        });

        const data = await response.json();

        if (response.ok) {
          this.$router.push({ name: 'paiement', query: { clientSecret: data.clientSecret } });
        }
      } catch (error) {
      }
    }
  }
};
</script>

<template>
  <div class="my-48 mx-2">
    <div class="text-center mb-16">
      <h1 class="font-variant text-4xl lg:text-6xl mb-4">Réservation</h1>
      <p class="font-neutral-700 text-lg">Obtenez vos billets dès maintenant !</p>
    </div>

    <form class="bg-white rounded-2xl lg:max-w-screen-lg mx-auto text-black p-8 lg:p-16" @submit.prevent="submitForm">

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
      </div>
    </form>
  </div>


</template>

<style scoped>
</style>