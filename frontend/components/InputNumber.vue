<template>
  <div class="border flex items-center justify-between p-1 rounded">
    <UButton variant="ghost" class="rounded-full" size="xs" icon="i-mdi-minus" @click="decrement"/>
    <span class="px-2 min-w-[40px]">{{ currentValue }}</span>
    <UButton variant="ghost" class="rounded-full" size="xs" icon="i-mdi-plus" @click="increment"/>
  </div>
</template>
<script lang="ts" setup>

const currentValue = ref(0)

const props = defineProps<{
  modelValue: number
}>()

watch(() => props.modelValue, (value) => {
  currentValue.value = value
}, { immediate: true, deep: true  })


const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const increment = () => {
  let v = currentValue.value + 1
  emit('update:modelValue', v)
  currentValue.value = v
}

const decrement = () => {
  let v = currentValue.value - 1
  if (v <= 0) v = 1
  emit('update:modelValue', v)
  currentValue.value = v
}

</script>