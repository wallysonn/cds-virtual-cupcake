<template>
  <NuxtLayout name="page">
    <div class="py-5">
      <div class="flex items-center">

        <NuxtImg :src="storeUser.picture" :alt="storeUser.name"
                 class="rounded-full "
        />
        <h1 class="text-2xl ms-2">Olá, <strong>{{ storeUser.name }}</strong></h1>

      </div>
      <div class="mt-5" v-if="store.cart.length > 0">
        <h2>Conclua sua compra e aproveite o frete grátis para toda cidade</h2>
        <CartList/>
      </div>

      <div class="mt-5">
        Minhas compras
        <div class="border rounded p-3 mt-2" v-for="order in store.orders">
          <h1 class="font-bold">Compra #{{order.id}}</h1>
          <p class="border-b mb-5 py-2">Desconto: R$ {{order.discount}}</p>
          <table class="w-full mt-2 text-sm text-left">
            <thead>
            <tr>
              <th>Produto</th>
              <th>Qtd</th>
              <th>Total</th>
              <th></th>
            </tr>
            </thead>
            <tr v-for="product in order.products">
              <td>{{ product.name }}</td>
              <td class="w-[80px] text-center p-2">
                {{ product.qtd }}
              </td>
              <td class="w-[80px] p-2">R$ {{ product.price * (product.qtd || 1) }}</td>
            </tr>
          </table>

        </div>
      </div>

    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import {appStore} from "~/stores/app.store";

const store = appStore();
const storeUser = store.user as UserType;


</script>