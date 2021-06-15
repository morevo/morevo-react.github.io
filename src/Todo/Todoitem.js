import React from "react";
import PropTypes from "prop-types";
import TodoClose from "./Todoclose";
let styles = {
  li: {
    padding: "0.4rem 0",
    margin: "0.5rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #6a696b",
    borderRadius: "15px",
  },

  strong: {
    margin: "0 0.3rem 0 0",
  },

  newInput: {
    width: "17px",
    height: "17px",
    borderRadius: "7px",
    margin: "0 0.4rem",
  },

  liSpan: {
    display: "flex",
    alignItems: "center",
  },
  
  change: {
    background: "red",
  }
};

function TodoItem({ item, index }) {
  // Если мне нужно получить сразу элемент не оборачивая его в объект в параметрах функции, тогда я пишу название элемента в {} скобках
  return (
    <li style={styles.li}>
      <span style={styles.liSpan}>
        <span className="container">
          <input id={index + 1} className="todoitem__input" type="checkbox" name="checkbox" value="yes" />
        <label htmlFor={index + 1} className="todoitem__new-input" style={styles.newInput}></label>
        </span>
        <strong style={styles.strong}>{index + 1}. </strong>
        {item.title}
      </span>

      <TodoClose />
    </li>
  );
}

// 31 {/* Добавим также валидацию для компонента Todoitem.js. Загружаем библиотеку prop-types также в файл TodoItem, Удаляем export default перед объявлением функции, добавляем в конец файла, пишем свойства для функции TodoItem.propTypes, и определяем элементы. item: PropTypes.object.isRequired - item это объект, который необходимый, требуемый для работы этого компонента TodoItem. И index: PropTypes.number.isRequired - index это тип number, который необходимый для работы этого компонента TodoItem */}
// 33 {/* Теперь поработаем над шаблоном каждого из элементов <li>, превратим их во что-то более красивое, переходим в компонент Todoitem, и задаем некоторую структуру, в тэге <li></li> будет лежать тэг span, внутри span будет лежать элемент input с type="checkbox". Кладём все элементы внутри <li> внутрь тэга <span>, а после тэга <span> в <li> мы будем показывать тэг <button> а внутри него будет лежать специальный html символ - &times; который добавляем крестик */}
TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
