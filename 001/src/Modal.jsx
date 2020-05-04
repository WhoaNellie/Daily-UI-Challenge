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
        <h4>Get your free Audrey II Clipping!</h4>
        <label htmlFor="name" >Name</label>
        <input type="text" id="name" placeholder="Audrey Fulquard"/>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="mean_green@outerspace.com"/>

        <label htmlFor="blood">Blood Type</label>
        <div className="radio">
            
            <input type="radio" id="a" name="blood"/>
            <label htmlFor="a">A</label>
            
            <input type="radio" id="b" name="blood"/>
            <label htmlFor="b">B</label>
            
            <input type="radio" id="ab" name="blood"/>
            <label htmlFor="ab">AB</label>
            
            <input type="radio" id="o" name="blood"/>
            <label htmlFor="o">O</label>
        </div>
            

        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="407 West 43rd Street, New York, NY 10036"/>
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