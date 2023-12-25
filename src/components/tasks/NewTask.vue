<template>
    <input @keydown.enter="addNewTask" type="text" class="form-control add-task" placeholder="New Task ... Press Enter to Save">
</template>

<script setup>
import {reactive} from "vue";
import {useTaskStore} from "@/stores/task.js";

const store = useTaskStore();
const {handleAddedTask} = store

const newTask = reactive({
  name:String,
  is_completed:{
    type:Boolean,
    default:false
  }
})

const addNewTask = async (event) =>{
  if (event.target.value.trim()){
    newTask.name = event.target.value
    event.target.value = "";
    await handleAddedTask(newTask)
  }
}





</script>