<script>
</script>

<template>

  <form class="max-w-sm mx-auto">
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
      <input type="email" id="email" class="border text-sm rounded-lg block w-full p-2.5 bg-neutral-700 border-neutral-600 placeholder-neutral-400 text-white focus:ring-neutral-500 focus:border-neutral-500" placeholder="name@flowbite.com" required />
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-white">Your password</label>
      <input type="password" id="password" class="border text-sm rounded-lg block w-full p-2.5 bg-neutral-700 border-neutral-600 placeholder-neutral-400 text-white focus:ring-neutral-500 focus:border-neutral-500" required />
    </div>
    <div class="flex items-start mb-5">
      <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border rounded focus:ring-3 bg-neutral-700 border-neutral-600 focus:ring-neutral-600 ring-offset-neutral-800 focus:ring-offset-neutral-800" required />
      </div>
      <label for="remember" class="ms-2 text-sm font-medium text-neutral-300">Remember me</label>
    </div>
    <button type="submit" class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-neutral-600 hover:bg-neutral-700 focus:ring-neutral-800">Submit</button>
  </form>


</template>

<style scoped>
</style>