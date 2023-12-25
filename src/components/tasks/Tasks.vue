<template>
  <div class="todo-item d-flex justify-content-between align-items-center" :class="completedTask">
    <div class="left-side d-flex justify-content-between align-items-center col-1">
      <div class="checker">
        <span class=""><input type="checkbox" :checked="task.is_completed" @change="markTaskAsCompleted"></span>
      </div>
    </div>
    <div class="content fs-6 text-truncate" :class="openedEdit" @dblclick="openEdit">
      <div class="relative" v-if="isEdit">
        <input class="editable-task form-control" type="text"
               @keyup.esc="closeEdit" v-focus
               @keyup.enter="updateTask"
               v-model="editingTask"
        >
      </div>
      <span v-else>{{task.name}}</span>
    </div>
<!---->

    <TaskActions @edit="openEdit" @delete="handleDelete" v-show="!isEdit"></TaskActions>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useToast} from 'primevue/usetoast'
import TaskActions from "./TaskActions.vue";

const toast = useToast();

const props = defineProps({
  task: Object
})
const completedTask = computed(()=>props.task.is_completed ? "completed" : "")

const isEdit = ref(false)
const editingTask = ref(props.task.name)

const emit = defineEmits(['updated','markTaskAsCompleted','delete'])
//edit task
const openEdit = () =>{
    isEdit.value = true
}
const openedEdit = computed(()=>isEdit.value === true ? "col-11" : "col-8")
//close edit task
const closeEdit = ()=>{
    isEdit.value = false
    editingTask.value = props.task.name
}

const vFocus = {
  mounted:(el) => el.focus()
}

const updateTask = event =>{
  const updatedTask = {...props.task, name:event.target.value}
  emit('updated',updatedTask)
  closeEdit()
  editingTask.value = event.target.value // rewrite editing task
  toast.add({
    summary:"updated",
    life:4000,
    severity:"success",
    detail:"update successfully"
  })
}
// mark task as completed
const markTaskAsCompleted = event =>{
  const updatedTask = {...props.task , is_completed : !props.task.is_completed }
  emit('markTaskAsCompleted', updatedTask)
  toast.add({
    summary:"completed",
    life:4000,
    severity:"success",
    detail:"completed successfully"
  })
}
//box notice delete task
const handleDelete = () =>{
  if(confirm('Are you sure?')){
    emit('delete',props.task)
    toast.add({
      summary:"deleted",
      life:4000,
      severity:"success",
      detail:"deleted successfully"
    })
  }
}


</script>
<style>

</style>