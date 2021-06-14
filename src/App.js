import React from "react";
import TodoList from "./Todo/Todolist";

function App() {
  let tasks = [
    { id: 1, completed: false, title: "Learn TypeScript" },
    { id: 2, completed: false, title: "Learn React" },
    { id: 3, completed: false, title: "Learn JavaScript" },
    { id: 4, completed: false, title: "Daily to learn some interesting" },
    { id: 5, completed: false, title: "Get an offer on web. dev." },
  ];
  return (
    <div className="todo">
      <div className="todo__inner">
        <h1 className="todo__title">Todo list</h1>
        <TodoList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
