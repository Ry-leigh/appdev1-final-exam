import { useDispatch } from "react-redux"
import { updateTodo, deleteTodo } from "../features/todos/todosSlice"

function TodoItem ({ todo }) {
  const dispatch = useDispatch()

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  }

  return (
    <li>
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button onClick={handleDelete}>delete</button>
      <button onClick={() => {toggleComplete}}>check</button>
    </li>
  )
}

export default TodoItem
