<template>
  <UContainer>
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center  justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">

        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Product</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
              aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-12 sm:py-18 lg:py-26">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <Logo />
        </div>
        <div class="text-center">

            <h1 class="text-4xl font-bold animate-bounce tracking-tight text-gray-900 sm:text-6xl">
              Hoje é dia de promoção!
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Na compra de 2 cupcakes, você ganha 1 de graça!
            </p>

          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#"
               class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
              started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span
                aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </UContainer>

</template>
<script setup lang="ts">
import Logo from "~/components/Logo.vue";
</script>