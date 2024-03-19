<template>
  <div class="bg"></div>
</template>

<script setup>
import {defineOptions} from 'vue'

defineOptions({
    inheritAttrs: false
})
</script>

<style scoped>
.bg {
    width: 100px;
    height: 100px;
    background-color: brown;
}
</style>