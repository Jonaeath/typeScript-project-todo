import React, { useState } from 'react';
import './App.css';
import InputField from './InputField/InputField';
import TodoList from './TodoList/TodoList';
  
function App() {

  // Define or import the Todo type
  type Todo = {
  id: number;
  todo: string;
  isDone: boolean;
  };

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handelAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  }

console.log(todos)
  return (
    <div className='App'>
      <span className='heading'>Jonaeath</span>
      <InputField todo={todo} setTodo = {setTodo} handelAdd={handelAdd} />
      <TodoList todos = {todos} setTodos = {setTodos}/>
    </div>
  );
}

export default App;
