import axios from 'axios'

// 👉 Configure axios base URL for your Spring Boot backend
const API_BASE_URL = 'http://localhost:8080'

// 👉 Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 👉 Export the configured axios instance
export default apiClient
