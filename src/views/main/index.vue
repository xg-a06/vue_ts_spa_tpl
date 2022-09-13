<template>
  <div>
    <AddTodo />
    <TodoList />
    <FilterRow />
  </div>
</template>

<script setup lang="ts">
import AddTodo from '@/components/addTodo.vue';
import TodoList from '@/components/todoList.vue';
import FilterRow from '@/components/filterRow.vue';
</script>

<style scoped></style>
