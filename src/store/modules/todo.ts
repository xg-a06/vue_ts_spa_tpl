import { defineStore } from 'pinia';
import { ref, reactive, computed } from 'vue';

export interface Todo {
  id: number;
  name: string;
  completed: boolean;
}
type Filter = 'all' | 'completed';

let id = 1;

export const useTodoStore = defineStore('todo', () => {
  const filter = ref<Filter>('all');
  const todoItems = reactive<Todo[]>([]);

  const addTodo = (todo: Omit<Todo, 'id'>) => {
    todoItems.push({ id: id++, ...todo });
  };

  const updateTodo = (id: number, value: boolean) => {
    const todo = todoItems.find(todo => todo.id === id);
    if (todo) {
      todo.completed = value;
    }
  };

  const removeTodo = (id: number) => {
    const index = todoItems.findIndex(item => item.id === id);
    todoItems.splice(index, 1);
  };

  const todos = computed(() => {
    switch (filter.value) {
      case 'all':
        return todoItems;
      case 'completed':
        return todoItems.filter(todo => todo.completed);
      default:
        return todoItems;
    }
  });

  return {
    filter,
    todos,
    addTodo,
    updateTodo,
    removeTodo,
  };
});
