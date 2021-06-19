import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function CloseTask({ task }) {
  const { removeTask } = useContext(Context);
  return (
    <button type="button" className="modal__close" data-exit="close">
      <div
        className="modal__pleace-img"
        onClick={removeTask.bind(null, task.id)}
      >
        <svg className="modal__close-img">
          <use className="modal__close-img-icon" xlinkHref="#close"></use>
        </svg>
      </div>
    </button>
  );
}

export default CloseTask;

CloseTask.propTypes = {
  task: PropTypes.object.isRequired,
};
