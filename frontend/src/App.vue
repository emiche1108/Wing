<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <RouterView /> <!-- ページ内容がここに表示される -->
</template>



<style scoped>
.title {
  font-family: "Arial", sans-serif;  /* フォント変更 */
  font-size: 2rem;  /* 文字サイズ */
  font-weight: bold;  /* 太字 */
  color: #42b983;  /* 文字色 */
  text-align: center;  /* 中央揃え */
  margin-top: 20px;
}


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
