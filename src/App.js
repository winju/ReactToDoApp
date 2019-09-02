import React from 'react';
import './App.css';
// import './bootstrap.css';
import './bootstrap/css/bootstrap.min.css'
import TodoApp from './components/todo/ToDoApp';


function App() {
  return (
    <div className="App">
      {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link> */}
        <TodoApp/>
    </div>
  );
}

export default App;
