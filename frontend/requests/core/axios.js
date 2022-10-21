import axios from 'axios'
import { toast } from 'react-toastify'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BE_DOMAIN,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const apiRequest = async (request) => {
  const response = request()
    .then((res) => ({
      ...res.data,
      success: true,
    }))
    .catch((error) => {
      const message = error.response.data.message
      toast.error(message)
      return {
        success: false,
        message: message,
      }
    })
  return response
}
