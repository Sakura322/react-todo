import React, { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import CreateTodo from "./CreateTodo";

function App() {
  const initialstate = "";
  const [todo, setTodo] = React.useState(initialstate);
  const [todos, setTodos] = React.useState([]);
  let currentTodo = todo.todovalue;
  let count = todos.length;

  function getTodo(e) {
    const todovalue = e.target.value;
    setTodo((prev) => ({
      ...prev,
      todovalue,
    }));
    console.log(todo);
  }

  function createTodo() {
    setTodos((prev) => [...prev, currentTodo]);

    setTodo(initialstate);
    document.querySelector("input").value = "";
  }

  function createTodoKey(e) {
    if (e.key === "Enter") createTodo();
  }

  return (
    <div className="todo-container">
      <div className="input-container">
        <h1>To Do App</h1>

        <input
          type="text"
          className="input"
          onChange={getTodo}
          onKeyDown={createTodoKey}
        />
        <AiFillCloseCircle className="submit-icon" onClick={createTodo} />
        <p>
          You have {count} uncompleted{" "}
          {count !== 0 && count > 1 ? "tasks" : "task"}
        </p>
      </div>

      <div className="todos">
        <h2>--- To do ---</h2>
        <div className="my-todos">
          {todos.map((item, index) => {
            return (
              <CreateTodo
                key={index}
                todo={item}
                todos={todos}
                setTodos={setTodos}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
