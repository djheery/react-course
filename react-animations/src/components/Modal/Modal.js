import React from "react";
import Transition from "react-transition-group/Transition";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      // These are available functions for animations
      // You can execute code to happen at each of these timings
      onEnter={() => console.log('onEnter')}
      onEntering={() => console.log('onEntering')}
      onEntered={() => console.log('onEntered')}
      onExit={() => console.log('onExit')}
      onExiting={() => console.log('onExiting')}
      onExited={() => console.log('onExited')}
    >
      {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
