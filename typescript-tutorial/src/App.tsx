import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField'
import {Todo} from './model'

const App :React.FC =() => {
  const[todo, setTodo] = useState<string>("");
  const[todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
  } ; 
  console.log(todo);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={function (e: React.FormEvent): void {
        throw new Error('Function not implemented.');
      } }></InputField>
    </div>
  );
}
 
export default App;
