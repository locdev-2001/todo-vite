<template>
  <h1>login</h1>
  <button class="btn btn-primary" @click="handleClick">Login</button>
</template>
<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
const handleClick = ()=> {
  router.push({name: 'tasks'})
}

</script>