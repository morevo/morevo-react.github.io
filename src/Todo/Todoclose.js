import React from "react";

export default function TodoClose() {
  return (
    <button type="button" className="modal__close" data-exit="close">
      <div className="modal__pleace-img">
        <svg className="modal__close-img">
          <use className="modal__close-img-icon" xlinkHref="#close"></use>
        </svg>
      </div>
    </button>
  );
}
