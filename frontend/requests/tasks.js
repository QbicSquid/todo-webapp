import { axiosInstance, apiRequest } from './core/axios'

export const getAllTasks = async (userId, token ) => {
  return await apiRequest(() =>
    axiosInstance.get(`/api/task/user/${userId}`, {
      headers: { Authorization: 'Bearer ' + token },
    })
  )
}

export const setTaskStatus = async ({ token, taskId, status }) => {
  return await apiRequest(() =>
    axiosInstance.put('/api/task/', { id: taskId, done: status}, {
      headers: { Authorization: 'Bearer ' + token },
    })
  )
}

export const newTask = async ({ token, description }) => {
  return await apiRequest(() =>
    axiosInstance.post('/api/task/', { description }, {
      headers: { Authorization: 'Bearer ' + token },
    })
  )
}
