import React from "react";
import PropTypes from "prop-types";
import TaskClose from "./Taskclose";
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
    borderRadius: "20px",
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

function TaskItem({ task, index, changeTitle}) {
  let classes = []; 
  if(task.completed) {
    classes.push("done");
  }
  return (
    <li style={styles.li}>
      <span style={styles.liSpan}>
        <span className="container">
          <input id={index + 1} type="checkbox" onChange={() => changeTitle(task.id)} checked={task.completed}/>
        <label htmlFor={index + 1} className="todoitem__new-input" style={styles.newInput}></label>
        </span>
        <strong style={styles.strong}>{index + 1}. </strong>
        <span className={classes.join(" ")}>{task.title}</span>
      </span>
    
      <TaskClose task={task}/>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number,
  changeTitle: PropTypes.func.isRequired,
};

export default TaskItem;
