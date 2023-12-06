<template>
  <div v-if="store.cart.length > 0" class="fixed animate-bounce bottom-5 right-8 z-10">
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
      <CartList />
    </div>
  </USlideover>
</template>
<script lang="ts" setup>
import {appStore} from "~/stores/app.store"
const store = appStore()
const openCart = ref(false)

</script>