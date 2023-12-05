<template>
  <UContainer>
    <div class="bg-white rounded-xl pt-5">
      <div class="flex p-4 mx-10 items-center sticky top-0 bg-white justify-between" style="z-index: 1">
        <div class="flex items-center">
          Ordenar por:
          <USelectMenu size="xl" class="ms-2" v-model="sortBy" :options="optionsSelected"/>
        </div>
        <div class="w-[50%]">
          <UInput v-model="search" placeholder="Pesquisar um produto" size="xl"
                  icon="i-heroicons-magnifying-glass-20-solid" trailing/>
        </div>
      </div>
      <div class="mx-auto max-w-2xl px-4 pb-3 sm:px-6  lg:max-w-7xl lg:px-8">
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" v-auto-animate>
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

const productList: ProductType[] = [
  {
    id: 1,
    name: "Delícia Vermelha",
    description: "Bolo de veludo vermelho com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
    price: 120,
    image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Encanto de Limão",
    description: "Bolo de limão com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
    price: 75,
    image: "https://images.pexels.com/photos/4748573/pexels-photo-4748573.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.5,
  },
  {
    id: 3,
    name: "ChocoFest Celestial",
    description: "Bolo de chocolate com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
    price: 220,
    image: "https://images.pexels.com/photos/19202777/pexels-photo-19202777/free-photo-of-bolo-torta-chocolate-delicioso.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Maravilha de Morango",
    description: "Bolo de morango com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
    price: 165,
    image: "https://images.pexels.com/photos/15071192/pexels-photo-15071192/free-photo-of-bolo-torta-delicioso-saboroso.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Baunilha Suprema",
    description: "Bolo de baunilha com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
    price: 120,
    image: "https://images.pexels.com/photos/4109784/pexels-photo-4109784.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Caramelo Divino",
    description: "Bolo de caramelo com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
    price: 120,
    image: "https://images.pexels.com/photos/3071821/pexels-photo-3071821.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 3.5,
  },
  {
    id: 7,
    name: "Explosão de Coco",
    description: "Bolo de coco com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
    price: 170,
    image: "https://images.pexels.com/photos/14242068/pexels-photo-14242068.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
  },
  {
    id: 8,
    name: "Café Cintilante",
    description: "Bolo de café com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
    price: 120,
    image: "https://images.pexels.com/photos/3049426/pexels-photo-3049426.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5,
  }
]

const getProductList = computed(() => {
  if (search.value) {
    return productList.filter(product => product.name.toLowerCase().includes(search.value.toLowerCase()))
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