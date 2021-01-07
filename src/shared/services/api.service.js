import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_API_URL

const axiosHeaders = {
  Accept: 'application/json',
}

const createOptions = {
  baseURL,
  headers: axiosHeaders
}

const apiService = axios.create(createOptions);

export default apiService
