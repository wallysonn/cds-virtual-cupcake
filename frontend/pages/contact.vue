<template>
  <NuxtLayout name="page">

    <div class="py-5">
      <h2 class="text-3xl font-semibold">Formulário de contato</h2>
      <p class="font-light">Nosso horário de atendimento é de 8:00 às 18:00 de segunda a sábado</p>

      <UForm @submit="submit" ref="form" :schema="contactValidator" :state="data" class="m-auto mt-10 w-[60%]">

        <UAlert v-if="errorMessage" class="mb-5" color="red" icon="i-mdi-ban" title="Ocorreu um erro" :description="errorMessage" />

        <UAlert v-if="confirmed" class="mb-5" color="green" icon="i-mdi-check" title="Contato enviado"
                description="Recebemos seu contato e entraremos em contato o mais breve possível"/>

        <UFormGroup label="Nome completo:" required name="name"  class="mb-5">
          <UInput size="lg" v-model="data.name"  placeholder="Digite seu nome completo"/>
        </UFormGroup>

        <UFormGroup label="E-mail:" required name="email" class="mb-5">
          <UInput size="lg" v-model="data.email" type="email"  placeholder="Informe o seu melhor e-mail"/>
        </UFormGroup>

        <UFormGroup label="Mensagem:" required name="message" class="mb-5">
          <UTextarea size="lg" v-model="data.message" autoresize
                     placeholder="Descreva com muitos detalhes qual sua solicitação"/>
        </UFormGroup>

        <div class="text-center">
          <UButton :loading="sending" icon="i-heroicons-arrow-right" type="submit" label="Enviar" size="lg"/>
        </div>

      </UForm>

    </div>

  </NuxtLayout>
</template>
<script setup lang="ts">
import { sendContact } from '~/services/contact.service'
import { contactValidator } from '~/validators/contact.validator'
const form = ref(null)
const confirmed = ref(false)
const sending = ref(false)
const errorMessage = ref('')
const data = ref({
  name: '',
  email: '',
  message: ''
})

const submit = async () => {
  try {

    sending.value = true
    errorMessage.value = ''
    confirmed.value = false

    await sendContact(data.value.name, data.value.email, data.value.message)
    confirmed.value = true
    data.value = {
      name: '',
      email: '',
      message: ''
    }
  } catch(e) {
    console.log(e)
    errorMessage.value = e.message || 'Ocorreu um erro ao enviar o contato'
  } finally {
    sending.value = false
  }
}

</script>