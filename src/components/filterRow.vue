<template>
  <div>
    <el-radio-group v-model="filter" class="ml-4">
      <el-radio label="all" size="large">All</el-radio>
      <el-radio label="completed" size="large">Completed</el-radio>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/store';

const { filter } = storeToRefs(useTodoStore());
</script>

<style scoped></style>
