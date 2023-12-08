import {appStore} from "~/stores/app.store";

export default defineNuxtRouteMiddleware((to, from) => {
    const store = appStore();
    if (to.path === "/profile" && !store.isAuthenticated)  return navigateTo('/login')

})