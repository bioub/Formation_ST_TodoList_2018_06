import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export function getListFromApi() {
  return axios.get(`${baseUrl}/api/todos`).then(({ data }) => data);
}

export function addToApi(todo) {
  return axios.post(`${baseUrl}/api/todos`, todo).then(({ data }) => data);
}

export function removeFromApi(todo) {
  return axios
    .delete(`${baseUrl}/api/todos/${todo._id}`)
    .then(({ data }) => data);
}

export function updateApi(todo) {
  return axios
    .patch(`${baseUrl}/api/todos/${todo._id}`, todo)
    .then(({ data }) => data);
}
