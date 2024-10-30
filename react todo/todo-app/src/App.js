import { useState } from 'react';
import './App.css';
import AddTodo from './component/AddTodo';
import TodosList from './component/TodosList';

function App() {
  return (

    <div className="App">
      <h1 className="main-title">Todo application</h1>
      <AddTodo />
      <br/>
      <TodosList />
    </div>
  );
}

export default App;
