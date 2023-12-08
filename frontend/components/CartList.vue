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
          <InputNumber v-model="product.qtd" />
        </td>
        <td class="w-[80px] p-2">R$ {{ product.price * (product.qtd || 1) }}</td>
        <td class="w-[40px]">
          <UButton @click="store.removeProductFromCart(product)" icon="i-heroicons-trash" size="xs"
                   variant="ghost" color="red"/>
        </td>
      </tr>
    </table>

    <div class="text-right px-2 pt-2 font-light border-t mt-2" v-if="discount">- R$ {{ discount  }}</div>
    <div class="text-right px-2 pt-2 font-semibold border-t mt-2">Total: R$ {{ store.cartTotalPrice - discount  }}</div>

    <div class="mt-5 flex items-center justify-between">
      <div class="flex">
        <UInput size="lg" v-model="coupon" class="font-bold" placeholder="Cupom de desconto" />
        <UButton variant="soft" @click="validateCoupon" :loading="validatingCoupon" class="ms-2" color="gray" label="Validar Cupom" />
      </div>
      <UButton icon="i-mdi-check" size="lg" @click="confirm" label="Finalizar"/>
    </div>
    <UAlert variant="soft" icon="i-mdi-ban" color="red" class="mt-5" v-if="couponValidationError" :description="couponValidationError" />
  </div>
</template>
<script lang="ts" setup>
import {appStore} from "~/stores/app.store"
import { validate } from '~/services/coupon.service'

const store = appStore()
const isConfirmed = ref(false)
const router = useRouter()
const discount = ref(0)
const validatingCoupon = ref(false)
const couponValidationError = ref('')
const coupon = ref('')

const validateCoupon = async () => {
  validatingCoupon.value = true
  couponValidationError.value = ''
  try {

    const ret = await validate(coupon.value)
    discount.value = ret.data.discount

  } catch(e) {
    console.log(e)
    couponValidationError.value = 'Cupom inválido'
    discount.value = 0
  } finally {
    validatingCoupon.value = false

  }
}

const confirm = () => {
  if (!store.isAuthenticated) {
    router.push('/login')
    return
  }
  store.saveOrder(discount.value)
  router.push('/profile')
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