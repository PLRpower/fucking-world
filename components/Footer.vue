<script setup lang="ts">

</script>

<template>

    <div class="rounded-lg shadow bg-neutral-950 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <nuxt-link href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse bg-black p-4 rounded-2xl">
            <img src="/public/img/logo.webp" class="h-8" alt="F*cking world" />
          </nuxt-link>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-neutral-400">
            <li>
              <nuxt-link to="/" class="hover:underline me-4 md:me-6">Accueil</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#" class="hover:underline me-4 md:me-6">Infos</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/reservation" class="hover:underline me-4 md:me-6">Réservation</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#" class="hover:underline">Contact</nuxt-link>
            </li>
          </ul>
        </div>
        <hr class="my-6 sm:mx-auto border-neutral-700 lg:my-8" />
        <span class="block text-sm sm:text-center text-neutral-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">F*cking World</a>. Tous droits réservés. Site web crée par le Studio Osalys.</span>
      </div>
    </div>

</template>

<style scoped>

</style>