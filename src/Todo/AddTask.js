import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTask({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }
  return (
    <form action="form" className="form" onSubmit={submitHandler}>
      <div className="form__inner">
        <label htmlFor="enterText" className="form__label">
          Task
        </label>
        <input
          {...input.bind}
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