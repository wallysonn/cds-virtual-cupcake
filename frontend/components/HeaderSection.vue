<template>
  <UContainer>
    <Menu />
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-12 sm:py-18 lg:py-26">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <Logo />
        </div>
        <div class="text-center">

            <h1 class="text-4xl font-bold animate-bounce tracking-tight text-gray-300 sm:text-6xl">
              Hoje é dia de promoção!
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-300 bg-primary p-2 rounded-full animate-pulse">
              Na compra de 2 cupcakes, você ganha 1 de graça!
            </p>

        </div>
      </div>
    </div>
  </UContainer>

</template>
<script setup lang="ts">
import Logo from "~/components/Logo.vue";

</script>