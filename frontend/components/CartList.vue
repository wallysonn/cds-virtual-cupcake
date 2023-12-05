<template>

  <div class="p-2 mt-5" v-if="store.cart.length === 0">
    <UAlert v-if="isConfirmed" class="mt-5" icon="i-mdi-check-circle" color="green" title="Venda concluída"
            description="Sua venda foi concluída. Verifique seu e-mail para mais detalhes."/>
    <div v-else class="text-center ">
      <h2 class="text-2xl">Seu carrinho está vazio!</h2>
      <p class="opacity-50">Você não selecionou nenhum item</p>
    </div>
  </div>
  <div v-else class="border p-3 rounded-xl mt-5 shadow-md">
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
      <UButton size="lg" @click="confirm" label="Finalizar"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {appStore} from "~/stores/app.store"

const store = appStore()
const isConfirmed = ref(false)
const router = useRouter()

const confirm = () => {
  if (!store.isAuthenticated) {
    router.push('/login')
    return
  }
  isConfirmed.value = true
  store.clearProductsFromCart()
}

watch(() => store.cart, () => {
  if (store.cart.length === 0) {
    if (process.client) {
      setTimeout(() => {
        isConfirmed.value = false
      }, 10000)
    }
  }
})

</script>