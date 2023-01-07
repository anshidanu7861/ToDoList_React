import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './componentes/form'
import TodoList from './componentes/todoList'


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //USE EFFECT

  useEffect(()=>{
    getLocalTodos();
  },[])

  useEffect(()=>{
    filterHandler();
    saveLocalTodos()
  }, [todos, status])

  const filterHandler =()=>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo  => todo.completed === true ));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo  => todo.completed === false ));
        break;
        default:
        setFilteredTodos(todos);
        break; 
    }
  };
         
    //Save to Local
    const saveLocalTodos = ()=>{
      localStorage.setItem("todos", JSON.stringify(todos));
    }

  const getLocalTodos = ()=>{
    if(localStorage.getItem("todos").length === 2){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
     let todoLocal = JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal)
    }
  };

  return (
    <div>
      <header>
      <h1>ToDo App </h1>
      </header>
      <Form 
      setStatus={setStatus} 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}/>
      
      <TodoList setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}/>
    </div>
  )
}

export default App
