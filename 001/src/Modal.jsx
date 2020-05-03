import React from "react";
import ReactDOM from "react-dom";

function Modal({
  isShowing,
  setIsShowing,
  sOrR
}) {
  function handleClose() {
    setIsShowing(false);
  }

  if (isShowing) {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="mask" onClick={() => handleClose()}></div>
        <aside className="modal">
        <h4>Get a free Audrey II Clipping</h4>
        <button className="submit" onClick={() => handleClose()}>
            Submit
          </button>
          
        </aside>
      </React.Fragment>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}


export default Modal;