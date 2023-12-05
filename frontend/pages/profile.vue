<template>
  <NuxtLayout name="page">
    <div class="py-5">
      <h1 class="text-2xl">Olá, <strong>{{store.user.name}}</strong></h1>
      <div class="mt-5" v-if="store.cart.length > 0">
        <h2>Conclua sua compra e aproveite o frete grátis para toda cidade</h2>
        <CartList />
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import {appStore} from "~/stores/app.store";
const store = appStore();


</script>