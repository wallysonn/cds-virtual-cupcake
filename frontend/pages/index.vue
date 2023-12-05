<template>

  <div class="relative h-screen">
    <div class="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
    <div class="bg-cover bg-center h-screen opacity-30" :style="{
    'background-image': `url(${restaurantImageBg})`,
  }">

    </div>
    <div class="absolute top-0 right-0 left-0">
      <HeaderSection></HeaderSection>
    </div>
  </div>
</template>
<script setup lang="ts">
import restaurantImageBg from '@/assets/images/bg/restaurant-bg.jpeg'
</script>