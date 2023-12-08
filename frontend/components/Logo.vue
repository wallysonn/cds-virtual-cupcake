<template>
  <div class="flex flex-col">
    <img class="w-[30%]" :src="imageLoge" alt="Cupcake"/>
    <h2 class="font-bold text-gray-300" v-if="!hideText">Cupcake Store</h2>
  </div>
</template>
<script setup lang="ts">
import imageLoge from '@/assets/images/logo.png'
const props = defineProps({
  hideText: {
    type: Boolean,
    default: false
  }
})
</script>
