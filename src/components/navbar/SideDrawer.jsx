import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import './SideDrawer.css';

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={1000}
      classNames="slide-in-right"
      mountOnEnter
      unmountOnExit
    >
      <aside
        className={`side-drawer ease-out ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById('overlays'));
};

export default SideDrawer;
