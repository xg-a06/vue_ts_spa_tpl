<template>
  <div>
    <el-checkbox v-model="todo.completed" :label="todo.name" size="large" />
    <el-button type="danger" :icon="Delete" circle @click="deletekHandler" />
  </div>
</template>

<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue';
import type { Todo } from '@/store';
import { useTodoStore } from '@/store';

interface Props {
  todo: Todo;
}
const { todo } = defineProps<Props>();

const { removeTodo } = useTodoStore();
const deletekHandler = () => removeTodo(todo.id);
</script>

<style scoped></style>
