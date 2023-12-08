<template>
  <UContainer>
    <div class="bg-white rounded-xl pt-5">
      <div class="lg:flex lg:p-4 mx-4 lg:mx-10 items-center lg:sticky top-0 backdrop-blur bg-opacity-90 bg-white justify-between" style="z-index: 1">
        <div class="flex items-center">
          <span class="hidden lg:flex">Ordenar por:</span>
          <USelectMenu size="xl" class="lg:ms-2 mb-2 lg:mb-0 w-full lg:w-auto" v-model="sortBy" :options="optionsSelected"/>
        </div>
        <div class="w-full lg:w-[50%]">
          <UInput v-model="search" placeholder="Pesquisar um produto" size="xl"
                  icon="i-heroicons-magnifying-glass-20-solid" trailing/>
        </div>
      </div>
      <div class="mx-auto max-w-2xl px-4 pb-3 sm:px-6  lg:max-w-7xl lg:px-8">
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in getProductListSorted" :key="product.id" class="group relative shadow p-3 flex flex-col">
            <UBadge class="absolute border-none top-4 left-4">
              <UIcon name="i-heroicons-star" class="mr-1"/>
              {{ product.rating }}
            </UBadge>
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
              <nuxt-img :src="product.image" :alt="product.name"
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
            <div class="mt-4 flex flex-col justify-between flex-1">
              <div class="flex justify-between mb-1">
                <h3 class="text-sm font-bold text-gray-700 ">{{ product.name }}</h3>
                <p class="text-sm min-w-[80px] text-right font-medium text-gray-900">R$ {{ product.price }}</p>
              </div>
              <p class="text-sm font-light text-gray-500 truncate" :title="product.description">
                {{ product.description }}</p>
            </div>

            <div class="text-center mt-5 flex justify-between items-center">
              <UButton variant="ghost" color="gray" label="Detalhes" @click="openDetail(product)"/>
              <UIcon v-if="store.isInCart(product)" class="text-primary text-xl" name="i-mdi-check-circle"/>
              <UButton v-else icon="i-heroicons-plus" @click="addProductToCart(product)" variant="soft" color="primary"
                       label="Quero este"/>
            </div>
          </div>


        </div>
      </div>
    </div>
    <USlideover v-model="detailOpen">
      <div class="p-4 h-[100%] shadow-xl">
        <div class="flex flex-col justify-between">
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <h1 class="font-semibold">{{ productSelected.name }}</h1>
              <UButton variant="ghost" size="xl" color="gray" icon="i-heroicons-x-mark-solid"
                       @click="detailOpen=false"/>
            </div>
            <div class="mt-5 mb-5">
              {{ productSelected.description }}
            </div>
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200  border">
              <nuxt-img :src="productSelected.image" :alt="productSelected.name"
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <UBadge class="border-none mt-5">
                <UIcon name="i-heroicons-star" class="mr-1"/>
                {{ productSelected.rating }}
              </UBadge>
              <span class="font-bold">R$ {{ productSelected.price }}</span>

            </div>
            <UButton icon="i-heroicons-plus"
                     @click="store.addProductToCart(productSelected as ProductType); detailOpen = false" size="lg" block
                     class="mt-5" label="Quero este"/>
          </div>
        </div>
      </div>
    </USlideover>

  </UContainer>
</template>

<script lang="ts" setup>
import {appStore} from "~/stores/app.store"

const store = appStore()
const productSelected = ref<ProductType | null>(null) as Ref<ProductType | null>
const detailOpen = ref(false)
const optionsSelected = [
  {
    label: 'Mais relevantes',
    value: 'relevant'
  },
  {
    label: 'Mais barato',
    value: 'cheap'
  }
]
const sortBy = ref(optionsSelected[0])
const search = ref('')

const openDetail = (product: ProductType) => {
  productSelected.value = product
  detailOpen.value = true
}

const addProductToCart = (product: ProductType) => {
  store.addProductToCart(product)
}


const getProductList = computed(() => {
  const productList = store.getAllProducts as ProductType[]
  if (search.value) {
    let searchValue = search.value.toLowerCase()
    return productList.filter(product => product.name.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue))
  }
  return productList
})

const getProductListSorted = computed(() => {
  if (sortBy.value.value === 'cheap') {
    return getProductList.value.sort((a, b) => a.price - b.price)
  }
  return getProductList.value.sort((a, b) => b.rating - a.rating)
})

</script>