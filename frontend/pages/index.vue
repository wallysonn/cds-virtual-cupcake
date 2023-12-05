<template>

  <div class="relative h-screen">
    <div class="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
    <div class="bg-cover bg-center h-screen" :style="{
    'background-image': `url(${restaurantImageBg})`,
  }">

    </div>
    <div class="absolute top-0 right-0 left-0">
      <HeaderSection />
      <ProductList/>
      <Footer />
    </div>

  </div>

</template>
<script setup lang="ts">
import restaurantImageBg from '@/assets/images/bg/restaurant-bg.jpeg'

</script>