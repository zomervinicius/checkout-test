import axios from 'axios'

const api = axios.create({
  baseURL: '/api-teste-front'
})
export default api
