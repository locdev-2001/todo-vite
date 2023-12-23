<template>
  <div class="right-side col-3">
    <button class="btn btn-primary mx-2" @click="$event => emit('edit')">Edit</button>
    <button class="btn btn-danger" @click="$event => emit('delete')">Delete</button>
  </div>
</template>
<script setup>
const emit = defineEmits(['edit','delete'])


</script>