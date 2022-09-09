<template>
  <div>
    <input v-model="filter" type="radio" name="radio" value="all" />
    <span>all</span>
    <input v-model="filter" type="radio" name="radio" value="completed" />
    <span>completed</span>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/store';

const { filter } = storeToRefs(useTodoStore());
</script>

<style scoped></style>
