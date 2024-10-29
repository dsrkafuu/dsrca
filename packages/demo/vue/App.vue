<template>
  <div>{{ greeting }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const greeting = ref('Hello Vue 3');

onMounted(() => {
  console.log('hello world');
});
</script>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
