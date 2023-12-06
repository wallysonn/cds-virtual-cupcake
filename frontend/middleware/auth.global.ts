import {appStore} from "~/stores/app.store";

export default defineNuxtRouteMiddleware((to, from) => {
    const store = appStore();
    console.log(to.path)
    if (to.path === "/profile" && !store.isAuthenticated)  return navigateTo('/login')

})