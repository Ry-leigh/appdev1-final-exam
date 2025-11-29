import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      <div class="todo">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </ul>
  );
}

export default TodoList
