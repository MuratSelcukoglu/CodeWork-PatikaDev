import React from 'react';
import Router from './Router';
import MyProvider from './context/Provider';

function Wrapper() {
  return (
    <MyProvider>
      <Router />
    </MyProvider>
  );
}
export default Wrapper;
