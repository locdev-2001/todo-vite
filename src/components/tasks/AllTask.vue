<template>
  <div class="todo-list"  v-if="tasks.length && show">
    <Tasks v-for="task in tasks"
           :task="task"
           :key="task.id"
           @updated="$event=>$emit('updated',$event)"
           @markTaskAsCompleted = "$event=>$emit('markTaskAsCompleted',$event)"
           @delete="$event=>$emit('delete',$event)"
    />
  </div>
</template>

<script setup>
import Tasks from "./Tasks.vue"
defineProps({
  tasks: Array,
  show: {
    type:Boolean,
    default:true
  }
})
</script>