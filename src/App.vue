<template>
  <!-- <img src="/static/logo.svg" />
  <img src="/static/logo.jpeg" />
  <img src="@/assets/images/logo.svg" />
  <img src="@/assets/images/logo.jpeg" /> -->
  <RouterView />
</template>

<script setup lang="ts"></script>

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
