import React from "react";
import TaskItem from "./Taskitem";
import PropTypes from "prop-types";
let styles = {
  ul: {
    margin: "0 auto",
    padding: "1rem",
    listStyle: "none",
    fontSize: "1rem",
  },
};

function TaskList(props) {
  return (
    <ul style={styles.ul}>
      {props.tasks.map((task, index) => (
        <TaskItem task={task} index={index} key={task.id} changeTitle={props.onToggle}/>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,

}

export default TaskList;