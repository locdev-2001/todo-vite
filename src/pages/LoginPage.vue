<template>
  <main style="min-height:50vh; margin-top:2rem">
    <h1>login</h1>
    <button class="btn btn-primary" @click="handleClick">Login</button>
  </main>
</template>
<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
const handleClick = ()=> {
  router.push({name: 'tasks'})
}

</script>