<template>

  <nav class="flex text-gray-300 items-center  justify-between  p-6 lg:px-0" aria-label="Global">
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
      <NuxtLink to="/contact" class="text-sm font-semibold leading-6">Entrar <UIcon name="i-mdi-arrow-right" /></NuxtLink>
<!--      <UChip :text="store.cart.length" :show="store.cart.length > 0" size="2xl" color="red">-->
<!--        <UButton icon="i-mdi-cart" @click="openCart = true" variant="ghost" color="secondary"/>-->
<!--      </UChip>-->

    </div>

    <div v-if="store.cart.length > 0" class="fixed animate-bounce bottom-5 right-8">
      <UChip :text="store.cart.length" size="2xl" color="red">
        <UButton icon="i-mdi-cart" @click="openCart = true" size="xl" color="primary"/>
      </UChip>
    </div>

    <USlideover v-model="openCart" :ui="{
      'width': 'w-screen max-w-xl'
    }">
      <div class="p-4 h-[100%] shadow-xl">
        <div class="flex items-center justify-between">
          <h1 class="font-semibold">Carrinho</h1>
          <UButton variant="ghost" size="xl" color="gray" icon="i-heroicons-x-mark-solid" @click="openCart=false"/>
        </div>
        <div class="text-center p-2 mt-5" v-if="store.cart.length === 0">
          <h2 class="text-2xl">Seu carrinho está vazio!</h2>
          <p class="opacity-50">Você não selecionou nenhum item</p>
        </div>
        <div class="border p-3 rounded-xl mt-5 shadow-md" v-else>
          <table class="w-full text-sm text-left">
            <thead>
            <tr>
              <th>Produto</th>
              <th>Qtd</th>
              <th>Total</th>
              <th></th>
            </tr>
            </thead>
            <tr v-for="product in store.cart">
              <td>{{ product.name }}</td>
              <td class="w-[80px] text-center p-2">
                <UInput type="number" v-model="product.qtd" placeholder="Total"></UInput>
              </td>
              <td class="w-[80px] p-2">R$ {{ product.price * (product.qtd || 1) }}</td>
              <td class="w-[40px]">
                <UButton @click="store.removeProductFromCart(product)" icon="i-heroicons-trash" size="xs"
                         variant="ghost" color="red"/>
              </td>
            </tr>
          </table>
          <div class="text-right px-2 pt-2 font-semibold border-t mt-2">R$ {{ store.cartTotalPrice }}</div>
          <div class="mt-5 text-right">
            <UButton size="lg" label="Finalizar"/>
          </div>
        </div>

      </div>
    </USlideover>
  </nav>

</template>
<script lang="ts" setup>
import {appStore} from "~/stores/app.store"

const store = appStore()

const openCart = ref(false)

</script>