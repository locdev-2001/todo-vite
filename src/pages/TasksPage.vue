<template>
  <div class="container">
    <Toast></Toast>
    <div class="row">
      <div class="col-md-12">
        <div class="card card-white">
          <div class="card-body">
                <NewTask @added="handleAddedTask"></NewTask>
<!--            list of uncompleted tasks-->

                <AllTask :tasks="uncompletedTasks" @updated="handleUpdateTask" @markTaskAsCompleted="handleMarkCompleted"  @delete="handleDelete"></AllTask>
<!--            show toggle button -->

                <div class="text-center my-3" v-show="showToggleCompletedBtn">
                  <button class="btn btn-sm btn-secondary" @click="$event => showCompletedTasks = !showCompletedTasks">
                    <span v-if="!showCompletedTasks">Show Completed</span>
                    <span v-else>Hide Completed</span>
                  </button>
                </div>
<!--            list of completed task-->
                <AllTask :tasks="completedTasks" :show="completedTasksIsVisible && showCompletedTasks" @updated="handleUpdateTask" @markTaskAsCompleted="handleMarkCompleted" @delete="handleDelete"></AllTask>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {computed, onMounted, ref} from 'vue'
import { storeToRefs } from 'pinia'
import {allTasks, createTask, updateTask, completeTask, removeTask} from "../http/task-api.js";
import AllTask from "../components/tasks/AllTask.vue"
import NewTask from "../components/tasks/NewTask.vue"
import {useToast} from 'primevue/usetoast'
import {useTaskStore} from "@/stores/task.js";

const store = useTaskStore()
const { task } = storeToRefs(store);
const toast = useToast();


const tasks= ref([]);
onMounted(async ()=>{
  const {data} = await allTasks();
  tasks.value = data.data
  console.log(task.value)
})
const uncompletedTasks= computed(()=> tasks.value.filter(task=>!task.is_completed))
const completedTasks= computed(()=> tasks.value.filter(task=>task.is_completed))
const showToggleCompletedBtn = computed(()=> uncompletedTasks.value.length > 0 && completedTasks.value.length > 0)
const completedTasksIsVisible = computed(
    ()=> uncompletedTasks.value.length === 0 || completedTasks.value.length > 0
)
const showCompletedTasks = ref(false)

const handleAddedTask= async (newTask)=>{
    const {data : createdTask} = await createTask(newTask);
    tasks.value.unshift(createdTask.data);
}


const handleUpdateTask = async (task)=>{
  const {data : updatedTask} = await  updateTask(task.id,{
    name:task.name
  })
  const currentTask = tasks.value.find(item =>item.id === task.id)
  currentTask.name = updatedTask.data.name;
  toast.add({
    summary:"updated",
    life:4000,
    severity:"success",
    detail:"update successfully"
  })
}

const handleMarkCompleted = async (task)=>{
  const {data : completedTask } = await completeTask(task.id,{
    is_completed: task.is_completed
  })
  const currentTask = tasks.value.find(item =>item.id === task.id)
  currentTask.is_completed = completedTask.data.is_completed;
}

const handleDelete = async (task)=>{
  await removeTask(task.id)
  const currentTask = tasks.value.findIndex(item=>item.id===task.id);
  tasks.value.splice(currentTask,1)
}

</script>



<style>

</style>