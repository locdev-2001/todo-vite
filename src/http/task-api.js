import api from "@/http/api.js";
const resources = "/tasks"

export const allTasks = ()=> api.get(resources)

export const createTask = task => api.post(resources,task)
export const updateTask = (id,task) => api.put(`${resources}/${id}`,task)

export const removeTask = (id)=> api.delete(`${resources}/${id}`)
export const completeTask = (id,task) => api.patch(`${resources}/${id}/complete`,task)