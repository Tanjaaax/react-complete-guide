import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  // ComponentDidMount & ComponentDidUpdate
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    const timer = setTimeout(() => {
      alert('Saved date to cloud!');
    }, 1000);
    return () => {
      clearTimeout(timer);
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
  // useEffect()

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); 
  }
  if (props.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button 
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
}

export default cockpit;