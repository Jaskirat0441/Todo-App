import React, { useState } from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import TodoList from './components/TodoList';
import { Todo } from './models/Model';

const App:React.FC= ()=> {

  const [todo,setTodo]= useState<string>("");
  const [todos,setTodos]= useState<Todo[]>([]);


  const handleSubmit=(e:React.FormEvent)=>{
      e.preventDefault();
      // console.log(todo);
      if(todo){
        // setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      // setTodo("");
      setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
      setTodo("");
    }
  }
  console.log(todos);
  return (
    <div className="App">
        <span className="heading">Taskify</span>
      <Inputfield todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
