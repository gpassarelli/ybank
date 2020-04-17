import applyCaseMiddleware from 'axios-case-converter'
import axios from 'axios'
import Accounts from './accounts'

// Create a custom axios instance
const $axios = applyCaseMiddleware(axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8000/api/'
}))
export const accounts = Accounts($axios)

export const repositories = { accounts }
export default repositories
