<template>
  <NuxtLayout name="page">

    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Acesse sua
          conta</h2>
        <p class="font-light text-justify">Acompanhe seus pedidos, faça uma nova compra e aproveite nosso espaço
          exclusivo para assinantes <b>Premium</b>.</p>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <UForm class="space-y-6">
          <UFormGroup label="Login">
            <UInput size="xl" placeholder="E-mail, CPF ou CNPJ " type="email"/>
          </UFormGroup>
          <UFormGroup label="Senha">
            <UInput size="xl" placeholder="Mínimo de 6 caracteres" type="password"/>
          </UFormGroup>

          <UButton icon="i-heroicons-arrow-right" label="Entrar" block size="xl"/>

        </UForm>

        <UDivider class="mt-5" label="ou"/>
        <UButton size="xl" block class="mt-5" :disabled="!isReady" @click="() => login()" variant="soft" color="gray"
                 icon="i-mdi-google" label="Entrar com Google"/>

      </div>
    </div>

  </NuxtLayout>
</template>
<script setup lang="ts">
import {verifyCodeFromGoogle} from '~/services/auth.service'
import {
  useCodeClient,
  type ImplicitFlowSuccessResponse,
  type ImplicitFlowErrorResponse
} from "vue3-google-signin";
const router = useRouter()

const handleOnSuccess = async (response: ImplicitFlowSuccessResponse) => {
  console.log("Access Token: ", response.access_token);
  console.log("ID Token: ", response.code);
  //Busca o usuário no banco de dados
  try {
    const ret = await verifyCodeFromGoogle(response.code)
    console.log(ret)
    await router.push('/profile')
  } catch (error) {
    console.log(error)
  }
};

const handleOnError = (errorResponse: ImplicitFlowErrorResponse) => {
  console.log("Error: ", errorResponse);
};

const {isReady, login} = useCodeClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,
});


</script>