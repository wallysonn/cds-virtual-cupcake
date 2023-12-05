<template>

  <nav :class="menuClass" class="flex text-gray-300 items-center  justify-between  p-6 lg:px-0" aria-label="Global">

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
      <NuxtLink to="/" class="text-sm font-semibold leading-6">Loja</NuxtLink>
      <NuxtLink to="/about" class="text-sm font-semibold leading-6">Quem somos</NuxtLink>
      <NuxtLink to="/contact" class="text-sm font-semibold leading-6">Dúvidas? Fale com a gente</NuxtLink>
    </div>

    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <NuxtLink v-if="!store.isAuthenticated" to="/login" class="text-sm font-semibold leading-6">Entrar
        <UIcon name="i-mdi-arrow-right"/>
      </NuxtLink>

      <NuxtLink to="/profile" v-else class="flex items-center">
        <UAvatar class="mr-2" :src="store.user?.picture"/>
        <span>{{ store.user?.name }}</span>
      </NuxtLink>

    </div>

  </nav>

  <Cart/>

</template>
<script lang="ts" setup>
import {appStore} from "~/stores/app.store";

const store = appStore();
const props = defineProps({
  menuClass: {
    type: String,
    default: ""
  }
})
</script>
