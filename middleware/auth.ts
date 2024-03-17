export default defineNuxtRouteMiddleware((to, from) => {
   const userIsLoggedIn = false;

   if(!userIsLoggedIn && to.path !== '/login') {
      return navigateTo('/login')
   }
});