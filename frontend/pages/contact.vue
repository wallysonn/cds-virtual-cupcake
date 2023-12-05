<template>
  <NuxtLayout name="page">

    <div class="py-5">
      <h2 class="text-3xl font-semibold">Formulário de contato</h2>
      <p class="font-light">Nosso horário de atendimento é de 8:00 às 18:00 de segunda a sábado</p>

      <UForm class="m-auto mt-10 w-[60%]">
        <UFormGroup label="Nome completo:" required class="mb-5">
          <UInput size="lg" required placeholder="Digite seu nome completo" />
        </UFormGroup>

        <UFormGroup label="E-mail:" required class="mb-5">
          <UInput size="lg" required placeholder="Informe o seu melhor e-mail" />
        </UFormGroup>

        <UFormGroup label="Mensagem:" required class="mb-5">
          <UTextarea size="lg" autoresize required placeholder="Descreva com muitos detalhes qual sua solicitação" />
        </UFormGroup>

        <div class="text-center">
          <UButton icon="i-heroicons-arrow-right" type="submit" label="Enviar" size="lg" />
        </div>

      </UForm>

    </div>

  </NuxtLayout>
</template>
<script setup lang="ts">
</script>