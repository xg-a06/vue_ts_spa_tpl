<template>
  <div class="test">
    <p>{{ str }}</p>
  </div>
  <img src="/static/logo.svg" />
  <img src="/static/logo.jpeg" />
  <img src="@/assets/images/logo.svg" />
  <img src="@/assets/images/logo.jpeg" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const str = ref('hello world1');
</script>

<style lang="less" scoped>
.test {
  background: url(./assets/images/logo.jpeg) 32px 32px no-repeat;
  background-position: center right;

  /deep/ p {
    color: red;
    font-size: 20px;
  }
}
</style>
