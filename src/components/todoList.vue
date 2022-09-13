<template>
  <div>
    <ul v-for="item in todoStore.todos" :key="item.id">
      <TodoItem :todo="item" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import TodoItem from './todoItem.vue';
import { useTodoStore } from '@/store';

const todoStore = useTodoStore();
</script>

<style scoped></style>
