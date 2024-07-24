<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>

    <footer>
      <Footer />
    </footer>

  </div>
</template>