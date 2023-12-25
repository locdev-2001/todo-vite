<template>
  <div class="container">
    <Toast></Toast>
    <div class="row">
      <div class="col-md-12">
        <div class="card card-white">
          <div class="card-body">
                <NewTask/>
<!--            list of uncompleted tasks-->

                <AllTask :tasks="uncompletedTasks"></AllTask>
<!--            show toggle button -->

                <div class="text-center my-3" v-show="showToggleCompletedBtn">
                  <button class="btn btn-sm btn-secondary" @click="showCompletedTasks = !showCompletedTasks">
                    <span v-if="!showCompletedTasks">Show Completed</span>
                    <span v-else>Hide Completed</span>
                  </button>
                </div>
<!--            list of completed task-->
                <AllTask :tasks="completedTasks" :show="completedTasksIsVisible && showCompletedTasks"></AllTask>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {computed, onMounted, ref} from 'vue'
import { storeToRefs } from 'pinia'
import AllTask from "../components/tasks/AllTask.vue"
import NewTask from "../components/tasks/NewTask.vue"

import {useTaskStore} from "@/stores/task.js";



// store pinia
const store = useTaskStore()
const { completedTasks, uncompletedTasks} = storeToRefs(store);
const {fetchAllTasks } = store



onMounted(async ()=>{
  await fetchAllTasks()
})
// const uncompletedTasks= computed(()=> tasks.value.filter(task=>!task.is_completed))
// const completedTasks= computed(()=> tasks.value.filter(task=>task.is_completed))
const showToggleCompletedBtn = computed(()=> uncompletedTasks.value.length > 0 && completedTasks.value.length > 0)
const completedTasksIsVisible = computed(
    ()=> uncompletedTasks.value.length === 0 || completedTasks.value.length > 0
)
const showCompletedTasks = ref(false)

</script>



<style>

</style>