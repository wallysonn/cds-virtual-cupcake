<template>
  <NuxtLayout name="page">
    <div class="py-5">
      <div class="flex items-center">

        <NuxtImg :src="storeUser.picture" :alt="storeUser.name"
        class="rounded-full "
        />
        <h1 class="text-2xl ms-2">Olá, <strong>{{storeUser.name}}</strong></h1>

      </div>
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
const storeUser = store.user as UserType;


</script>