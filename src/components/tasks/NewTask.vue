<template>
    <input @keydown.enter="addNewTask" type="text" class="form-control add-task" placeholder="New Task ... Press Enter to Save">
</template>

<script setup>
import {reactive} from "vue";

const newTask = reactive({
  name:String,
  is_completed:{
    type:Boolean,
    default:false
  }
})
const emit = defineEmits(['added'])
const addNewTask = event=>{
  if (event.target.value.trim()){
    newTask.name = event.target.value
    event.target.value = "";
    emit('added',newTask)
  }
}





</script>