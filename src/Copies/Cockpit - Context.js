import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  // ComponentDidMount & ComponentDidUpdate
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout(() => {
    //   alert('Saved date to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  // useEffect can be called multiple times.
  // useEffect runs after every rendercycle.
  // useEffect()

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1){
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
}

export default React.memo(cockpit);