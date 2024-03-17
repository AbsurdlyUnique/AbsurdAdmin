<template>
  <div class="flex flex-col justify-center items-center h-screen space-y-4">
    <p class="text-4xl text-white">Absurd Admin</p>
    <p class="text-xs text-gray-500">made with ❤️ by developers for developers</p>
    <UCard class="w-full max-w-sm px-8 py-10">
      <template #header>
        <h2 class="text-3xl font-bold text-center">Login</h2>
      </template>
      <UForm @submit="handleLogin" class="space-y-4">
        <UFormGroup label="Username" name="text">
          <UInput size="lg" v-model="loginForm.username" type="text" placeholder="Username" class="w-full" />
        </UFormGroup>
        <UFormGroup label="Password" name="password">
          <UInput size="lg" v-model="loginForm.password" type="password" placeholder="Password" class="w-full" />
        </UFormGroup>
        <div class="flex justify-center">
          <UButton size="lg" class="w-full flex items-center justify-center" type="submit" variant="solid">Log In
          </UButton>
        </div>
        <div class="text-center">
          <a href="/register" class="text-sm text-blue-500 hover:underline">Create New Account</a>
        </div>
      </UForm>
    </UCard>
    <p class="text-xs text-gray-500">Build 1.0.0</p>
    <UButton to="https://discord.gg/Ew7au9wQXu" label="join the community" icon="i-heroicons-chat-bubble-oval-left" size="sm" color="primary" square variant="solid" />
    <UButton to="https://www.paypal.com/donate/?hosted_button_id=8A5H59WBBGYYQ" label="Donate to help us grow" icon="i-heroicons-heart" size="sm" color="primary" square variant="solid" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loginForm = ref({
  username: '',
  password: '',
});

function handleLogin(event) {
  event.preventDefault();
  // Implement your login logic here
  console.log('Login details:', loginForm.value);
  // Redirect to dashboard or show error message based on login success/failure
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
