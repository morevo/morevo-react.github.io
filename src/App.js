import React, { useEffect } from "react";
import TaskList from "./Todo/Tasklist";
import Context from "./context";
import Loader from "./Todo/Loader";
//import Modal from "./Modal/Modal";

const AddTask = React.lazy(() => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(import("./Todo/AddTask.js"));
    }, 3000);
  });
});

function App() {
  let [tasks, setTasks] = React.useState([]);
  let [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((tasks) => {
        setTimeout(() => {
          setLoading((loading = false));
          setTasks(tasks);
        }, 2000);
      });
  }, []);

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function addTask(title) {
    setTasks(
      tasks.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTask }}>
      <div className="todo">
        <div className="todo__inner">
          <h1 className="todo__title">Todo list</h1>
          {/* <Modal /> */}
          <React.Suspense fallback={<p> Loading... </p>}>
            <AddTask onCreate={addTask} />
          </React.Suspense>
          {loading && <Loader />}
          {tasks.length ? (
            <TaskList tasks={tasks} onToggle={toggleTask} />
          ) : loading ? null : (
            <h2 className="todolist__clear">No active tasks</h2>
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;