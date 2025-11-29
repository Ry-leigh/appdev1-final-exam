import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,                   
  headers: { "Content-Type": "application/json" },
});

export default api;

export const getTodosAPI = () => {
  return api.get("/todos", { params: { _limit: 10 } })
            .then(res => res.data);
};

export const addTodoAPI = (todo) => {
  return api.post("/todos", todo)
            .then(res => res.data);
};

export const updateTodoAPI = (todo) => {
  return api.put(`/todos/${todo.id}`, todo)
            .then(res => res.data);
};

export const deleteTodoAPI = (id) => {
  return api.delete(`/todos/${id}`)
            .then(() => id);
};