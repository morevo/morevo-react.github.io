import React from "react";
import TaskList from "./Todo/Tasklist";
import Context from "./context";
import AddTask from "./Todo/AddTask";

function App() {
  let [tasks, setTasks] = React.useState([
    { id: 1, completed: false, title: "Learn TypeScript" },
    { id: 2, completed: false, title: "Learn React" },
    { id: 3, completed: false, title: "Learn JavaScript" },
    { id: 4, completed: false, title: "Daily to learn some interesting" },
    { id: 5, completed: false, title: "Get an offer on web. dev." },
  ]);

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
    setTasks(tasks.concat([{
      title,
      id: Date.now(),
      completed: false,
    }]))
  }

  return (
    <Context.Provider value={{ removeTask }}>
      <div className="todo">
        <div className="todo__inner">
          <h1 className="todo__title">Todo list</h1>
          <AddTask onCreate={addTask}/>
          {tasks.length ? (
            <TaskList tasks={tasks} onToggle={toggleTask} />
          ) : (
            <h2 className="todolist__clear">No active tasks</h2>
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

// 39 {/* Теперь в компоненте App, я заношу данный метод onToggle в компонент TodoList из Компонента App */}
// 40 {/* Создаем в Компоненте App новую функцию с произвольным названием например toggleTodo, создаем эту функцию, она будет принимать в себя некоторые id */}
// 44 {/* В toggleTodo мы передаем onToggle */}
// 45 {/* Мы значем что в toggleTask(id) у нас приходит id (как параметр) из TodoItem, проверим это в console.log(id), и действительно выводится id того чекбокса на который мы кликнули,теперь мы можем изменить состояние(state), для этого мы можем обратиться к массиву tasks, и просто изменить его, просто переопределяем массив tasks c помощью метода map, где на каждой итерации мы принимаем объект task, и дальше спрашиваем, если task.id будет равен id который пришел из Компонента TodoItem, по которому мы кликнули, тогда мы будем менять поле task.completed на противоположный, и возвращать после этого наш task объект {id: x, completed: x, title: "Learn TypeScript"}*/}
// 45 {/* Теперь посмотрим что в Компоненте TodoItem у нас меняется значение todo, просто выведем в консоль наш task объект с изменёнными данными*/}
// 46 (TodoItem copy) {/* В данный момент если мы будем нажимать на checkbox, у нас ничего не будет меняться(перерендериваться) наш task.complated */}
// 47 {/* Но на самом деле, таким образом state(состояние) мы не можем задавать, ничего меняться не будет */}
// 48 {/* То есть для того чтобы определить state за которым будет следить реакт, для того чтобы перерендеривать наш шаблон, и добавлять динамики приложению, мы должны определять по другому. Мы не може просто завести какую-то переменную, и менять её состояние */}
// 49(useState) {/* Для того чтобы менять состояние в React нам нужно воспользоваться специальной функцией в React которая называется useState - это хуки */}
// 50 {/* Идея такая, заводим переменную "state" в App Компоненте, которая будет результатом работы React'a и его функции React.useState, в функцию useState мы передаем некоторое начальное состояние которое мы хотим задать именно для данного state(состояния), для этого переносим весь наш массив tasks в первый аргумент useState. */}
// 51 {/* Теперь у нас есть некоторые ошибки, и сейчас нам нужно поработать с переменной state которая является React.useState. Как нам получить state, и что вообще возвращает функция useState ? */}
// 52 {/* Функция useState всегда нам возвращает массив состоящий всегда из двух элементов,первый элемент массива это непосредственно само состояние, то есть по умолчанию оно будет равно данному дефолтному значению - нашему массиву tasks. А второй элемент это функция, которая позволяет изменять данное состояние для того чтобы реакт видел эти изменения, и для того чтобы было более комфортно с этим было работать, мы можем написать деструктуризацию массива, где первым параметром мы будем принимать state, в нашем случае это массив (tasks), а второй переменной будет функция, которую обычно называют через префикс set с помощью которой мы будет изменять состояние (setTasks).  */}
// 53 {/* Теперь, в функции toggleTask мы можем воспользоваться методом setTasks для того чтобы изменить состояние нашего массива, и для этого мы просто вызовем метод setTasks куда передадим новое значение(состояние). То есть tasks.map мы передаем в setTasks, он нам вернёт новый массив который изменит массив tasks */}
// 54 {/* И сейчас после того как мы кликаем по checkbox'ам, они появляються в console.log и меняют свое состояние свойства task.complated, и перерендеривается. То есть мы меняем полностью состояние, и мы видим полностью эти изменения, тем самым мы правильно изменяем это состояние */}
// 55 {/* Теперь нам необходимо отобразить то, что мы выполнили Todo, и для этого добавить определённый класс, создаем в state.less новый класс который будет называться .done {}, и у него будет свойство text-decoration: line-through(текст зачернтуый), и далее нам этот класс необходимо добавлять в компоненте todoItem в зависимости от его поля completed */}
// 60 {/* Если же в начальном state в useState указать у tasks.completed true вместо false, тогда класс будет меняться наоборот, когда true, тогда зачеркнутый, когда false тогда обычный, но наш checkbox не обозначается как выделенный, это нужно исправить. Переходим в TodoItem  */}
// 66 {/* В Компоненте App мы подключаем наш созданный Компонент import Context from "./context"*/}
// 67 {/* Так как React.createContext() - это необычный объект в React, для того чтобы мне передавать определённые функции сквозь другие компоненты, мне необходимо обернуть весь шаблон ( return() ) в App в специальный компонент который называется <Context.Provider> </Context.Provider>, <- именно таким образом. То есть я весь JSX нашего компонента оборачиваю в <Context.Provider> </Context.Provider> */}
// 68 {/* Дальше как свойство в <Context.Provider value={{}}> я могу указать свойство value которое принимает в себя объект value={{}} - Первые фигурные скобки указывают что это как бы что мы там пишем JavaScript, а вторые, внутренние обозначают за тот объект который мы передаем. */}
// 69 {/* И в этот объект value={{*}} Я могу передавать в принципе что угодно, могу передавать state, function, что угодно. И нам нужно реализовать функционал по удалению определенного task'a, задачи */}
// 70 {/* Поэтому в Компоненте App выше return я создам функцию removeTask, в которую я передам параметр id, в нем будет лежать id того task'a который мне нужно удалить.  */}
// 71 {/* Далее в функцию removeTask я передам setTasks из useState, которая будет задавать состояние нашего крестика (useState позволяет нам менять состояние) */}
// 72 {/* Дальше пробежимся по массиву с помощью метода filter, где на каждой итерации я буду получать объект task, и дальше буду сравнивать, если task.id не будет равен параметру функции id, тогда мы оставляем элемент в массиве setTasks( tasks.filter( (task) => task.id !== id)), если же он совпадает, то он удалится - Это самый простой способ чтобы удалить элемент. Если task.id !== id, не будут равны, тогда мы фильтруем эти элементы, возвращаем, оставляем, иные все удаляем */}
// 73 {/* Теперь у нас есть функция removeTask, и мы её можем передать в качестве значения value{{removeTask}} в Компонент Todoclose -> Todoclose */}
// 82 {/* Для того чтобы написать что нету активных задач после удаления всех tasks. Находим Компонент TodoList, и там где мы его выводим, мы также можем добавить определённые условия  */}
// 83 {/* Для того чтобы обратиться к javaScript внутри шаблона JSX, мы указываем внутри return() фигурные скобки {}, и дальше спрашиваем - если в массиве и в его поле length tasks.length (Есть что-то отличное от нуля ), то тогда мы будем выводить наш Компонент TodoList, а иначе мы будет указывать через тэг и тернарный оператор <h2 className="todolist__">No active tasks</h2> что нету активных задач */}
// 84 {/* Следующий этап, это добавить формочку которая позволит нам добавлять новые tasks */}
// 85 {/* Для этого нам приходиться создавать новый компонент AddTask.js, и создаем там обычную функцию, без экспорта  */}
// 93 {/* Теперь в компоненте App нам нужно передавать этот метод onCreate, который будет передавать данные в наш массив, а внутри создадим метод addTask*/}
// 94 {/* Мы знаем что мы принимаем в функцию некоторый title, пишем параметр title*/}
// 95 {/* Для того чтобы изменить наш state мы также здесь вызываем метод setTasks, куда передаем наш массив tasks, и чтобы добавить нам нужный элемент, мы можем вызвать метод concat, куда вначале передаем массив и в него объект [{}], и этот объект в последствии добавиться в массив tasks */}
// 96 {/* Здесь у нас будет поле title которое будет совпадать со значением title, создадим id со значением например Date.now(), и completed: false*/}