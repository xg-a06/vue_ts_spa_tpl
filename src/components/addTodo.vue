<template>
  <div>
    <el-input v-model="txt" class="test" placeholder="input todo" />
    <el-button type="primary" @click="clickHandler">add</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '@/store';

const txt = ref('');

const { addTodo } = useTodoStore();

const clickHandler = () => {
  addTodo({ name: txt.value, completed: false });
  txt.value = '';
};
</script>

<style scoped>
.test {
  width: 200px;
}
</style>
