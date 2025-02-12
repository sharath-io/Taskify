import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => setTodos((prev) => [...prev, todo]);

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  const updateTodo = (id, todo) =>
    setTodos((todos) => todos.map((task) => (task.id === id ? todo : task)));

  const toggleTodo = (id) =>
    setTodos((todos) =>
      todos.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );

  return (
    <TodoProvider value={{ addTodo, removeTodo, updateTodo, toggleTodo }}>
      <div className="flex flex-col justify-center items-center gap-3 w-full  mx-auto my-[2rem] py-7 rounded-x">
        <h1 className="text-4xl font-bold m-b">Taskify</h1>
        <TodoForm />
      </div>
      <div>
        {todos.map((task) => (
          <div key={task.id}>{task.text}</div>
        ))}
      </div>
    </TodoProvider>
  );
}

export default App;
