<template>
  <div class="todo-list"  v-if="tasks.length && show">
    <Tasks v-for="task in tasks"
           :task="task"
           :key="task.id"
           @updated="handleUpdateTask"
           @markTaskAsCompleted = "handleMarkCompleted"
           @delete="handleDelete"
    />
  </div>
</template>

<script setup>
import {useTaskStore} from "@/stores/task.js";
import Tasks from "./Tasks.vue"

const store = useTaskStore()

const {handleUpdateTask, handleMarkCompleted, handleDelete} = store


defineProps({
  tasks: Array,
  show: {
    type:Boolean,
    default:true
  }
})
</script>