import React, { useState } from "react";
import ReactDOM from "react-dom";

function Modal({
  isShowing,
  setIsShowing,
  sOrR
}) {
  const [submitState, setSubmitState] = useState(false);

  function handleClose() {
    setSubmitState(false);
    setIsShowing(false);
  }

  if (isShowing && sOrR === "signUp") {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="mask" onClick={() => handleClose()}></div>
        {(submitState ? 
        <aside className="modal thanks">
            <h4>Thank you!</h4>
            <p>Your clipping is on her way!</p>
            <button className="close" onClick={() => handleClose()}>X</button>
        </aside>
        :
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
            <button className="submit" onClick={() => setSubmitState(true)}>
                Submit
              </button>
              
        </aside>)}
      </React.Fragment>,
      document.getElementById("modal-root")
    );
  } else if(isShowing && sOrR === "return"){
    return ReactDOM.createPortal(<React.Fragment>
<div className="mask" onClick={() => handleClose()}></div>
        <aside className="modal thanks">
            <h4>We're Sorry</h4>
            <p>We're not accepting returns right now. If you're having problems with your clipping, please, whatever they offer you <em>don't feed the plants.</em></p>
            <button className="close" onClick={() => handleClose()}>X</button>
        </aside>
    </React.Fragment>, document.getElementById("modal-root"))
  }else{
    return null;
  }
}


export default Modal;