import React from 'react';
import logo from './logo.svg';
import './App.css';
import DynamicForm from './DynamicForm';
import formControls from './formControls';
import validations from './validations';

function App() {
  return (
    <DynamicForm fields={formControls} validations={validations} />
  );
}

export default App;
