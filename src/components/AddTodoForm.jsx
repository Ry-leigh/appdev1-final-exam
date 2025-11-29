import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todos/todosSlice"

function AddTodoForm () {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (title.trim() === "") return
    dispatch(addTodo(title))
    setTitle("")
  }

  return (
    <form>
      <input value={title} onChange={(e) => setTitle(e.target.value)} className="todo-input" type="text" placeholder="Add a task." />
      <button onClick={handleAdd} className="todo-btn" type="submit">
          I Got This!
      </button>
    </form>
  )
}

export default AddTodoForm
