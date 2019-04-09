import React from 'react';

// Globally available javascript object, you can use it where YOU want it.
const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;