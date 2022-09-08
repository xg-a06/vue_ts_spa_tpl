import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const count = 1;

  return {
    count,
  };
});
