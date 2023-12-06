<template>
  <NuxtLayout name="page">

    <div class="py-5">
      <h2 class="text-3xl font-semibold">Formulário de contato</h2>
      <p class="font-light">Nosso horário de atendimento é de 8:00 às 18:00 de segunda a sábado</p>

      <UForm @submit="submit" :state="data" class="m-auto mt-10 w-[60%]">

        <UAlert v-if="confirmed" class="mb-5" color="green" icon="i-mdi-check" title="Contato enviado"
                description="Recebemos seu contato e entraremos em contato o mais breve possível"/>

        <UFormGroup label="Nome completo:" required class="mb-5">
          <UInput size="lg" v-model="data.name" required placeholder="Digite seu nome completo"/>
        </UFormGroup>

        <UFormGroup label="E-mail:" required class="mb-5">
          <UInput size="lg" v-model="data.email" type="email" required placeholder="Informe o seu melhor e-mail"/>
        </UFormGroup>

        <UFormGroup label="Mensagem:" required class="mb-5">
          <UTextarea size="lg" v-model="data.message" autoresize required
                     placeholder="Descreva com muitos detalhes qual sua solicitação"/>
        </UFormGroup>

        <div class="text-center">
          <UButton icon="i-heroicons-arrow-right" type="submit" label="Enviar" size="lg"/>
        </div>

      </UForm>

    </div>

  </NuxtLayout>
</template>
<script setup lang="ts">
const confirmed = ref(false)
const data = ref({
  name: '',
  email: '',
  message: ''
})

const submit = () => {
  confirmed.value = true
  data.value = {
    name: '',
    email: '',
    message: ''
  }
}

</script>