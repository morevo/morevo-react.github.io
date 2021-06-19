import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTask({ onCreate }) {
  const [value, setValue] = useState(""); // useState, начальное состояние элемента value

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }
  return ( // Вешаем на форму обработчик событий onSubmit, после submit, клика по кнопке, мы переходим в функцию, и выполняем там проверку, если value из input'a не пустое, тогда передаем его в функцию которая находится в app.js, и после этого вызываем состояние пустой строки, setValue("");
    <form action="form" className="form" onSubmit={submitHandler}> 
      <div className="form__inner">
        <label htmlFor="enterText" className="form__label">
          Task
        </label>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)} // Передаем в useState функцию изменения, таргет именно на инпуте. То есть в value лежит текст введённый в инпут, передаем в setValue функцию, которая меняем value который лежит в const [value, setValue], 
          className="form__input form__padding"
          type="text"
          name="text"
          id="enterText"
          placeholder="Enter task"
        />
        <button className="form__button form__padding" type="submit">
          Add new task
        </button>
      </div>
    </form>
  );
}

export default AddTask;

AddTask.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

// 85 AddTask {/* Для этого нам приходиться создавать новый компонент AddTask.js, и создаем там обычную функцию, без экспорта. Создаем форму, внутри input, button, и добавляем этот компонент в App.js */}
// 86 {/* Теперь нам нужно оживить эту форму, импортируем наш хук useState в форму. Создадим переменную например value и setValue [value, setValue]*/}
// 87 {/* И начальное состояние этого value будет пустой строкой const [value, setValue] = useState("") */}
// 88 {/* Теперь нам необходимо привязать значение [value, setValue] к input, то есть мы будем указывать value={value} как значение value, и дальше, чтобы следить за input'om, мы можем указать свойство onChange. в onChange мы передаем колбэк event, и дальше чтобы изменить состояние value, мы будем вызывать функцию setValue, со значением event.target.value */}
// 89 {/* Далее добавим рабочие события на форму, событие называется onSubmit, и там мы будем вызывать метод, который будет называться например submitHandler */}
// 90 {/* Теперь этот метод submitHandler нам необходимо создать как обычную функцию, он в себя будет принимать тот же параметр event, у которого мы можем отменить дефолтное поведение */}
// 91 {/* И теперь делаем там небольшую валидацию внутри функции, если у нас будет input пустой, value.trim(), то тогда мы ничего не будем делать (trim удаляем лишние пробелы) */}
// 92 {/* А если в инпуте что-то есть, тогда мы будем будем обращаться к свойству например onCreate, куда я буду передавать значение value. А onCreate мы будем передавать сюда как параметр */}

/* Form */ // ...In process
// Импортируем сюда useState через import
// Создаем переменную useState
// Потом привязываем данное значение useState - value к input, input value={value} чтобы передавать их из input в useState как состояние
// Для слежения за инпутом мы создаем свойство onChange, куда мы должны передать колбэк
// И далее чтобы изменить состояние value, мы будем вызывать функцию setValue со значением event.target.value, event.target отслеживает элемент на котором произошло событие
// Далее добавим обработчик события на форму, обработчик называется onSubmit, и там мы будем вызывать метод submitHandler, отменяем стандартное поведение формы
// Создаем метод submitHandler, он принимает по умолчанию event, у которого мы отменяем дефолтное поведение, для того чтобы страница не перезагружалась
// И делаем валидацию на проверку input'a, если input пустой, то тогда мы ничего не будем делать
// А если в нем что-то будет, тогда if (value.trim()) { ...In process

/* event.target.value отслеживает элемент на котором произошло событие */
// event.target это отсылка к объекту, на котом сработало событие. Или другими словами, он указывает на HTML элемент на котором сработало событие. Событие в нашем случае это клик. Объект на котором отработало событие это <input/>. ** label рассматривается, как часть объекта input — поэтому мы видимо их обоих**.