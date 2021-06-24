import React from "react";
import "../styles/modal.less";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({isOpen: true})}>Open modal</button>

        {this.state.isOpen && (
          <section className="modal">
            <div className="modal__inner">
              <h1>Modal Title</h1>
              <p>Some information about Todo list</p>
              <button onClick={() => this.setState({isOpen: false})}>Close modal</button>
            </div>
          </section>
        )}
      </React.Fragment>
    );
  }
}
