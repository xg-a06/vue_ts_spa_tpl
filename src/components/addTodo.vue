<template>
  <div>
    <input v-model="txt" type="text" />
    <button @click="clickHandler">add</button>
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
.a {
  color: aliceblue;
}
</style>
