import {ref, reactive, computed} from 'vue'
import {defineStore} from 'pinia';
import {allTasks, completeTask, createTask, removeTask, updateTask} from "../http/task-api.js"

export const useTaskStore  = defineStore('taskStore',()=>{
    const tasks = ref([])
    const uncompletedTasks = computed(()=> tasks.value.filter(task=>!task.is_completed))
    const completedTasks = computed(()=> tasks.value.filter(task=>task.is_completed))
    const fetchAllTasks = async () =>{
        const {data} = await allTasks();
        tasks.value = data.data
    }
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
    return {
        tasks, completedTasks, uncompletedTasks, fetchAllTasks, handleAddedTask, handleMarkCompleted, handleUpdateTask, handleDelete
    }
})