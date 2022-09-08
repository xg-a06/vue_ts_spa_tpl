<template>
  <div>
    <span>{{ todo.name }}</span>
    <input v-model="todo.completed" type="checkbox" />
    <button @click="deletekHandler">delete</button>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from '@/store';
import { useTodoStore } from '@/store';

interface Props {
  todo: Todo;
}
const { todo } = defineProps<Props>();

const { removeTodo } = useTodoStore();
const deletekHandler = () => removeTodo(todo.id);
</script>

<style scoped>
.a {
  color: aliceblue;
}
</style>
