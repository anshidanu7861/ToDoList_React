import React from "react";
import ToDo from "./todo"; 


const TodoList = ({todos, setTodos, filteredTodos})=>{
    return (
        <div className="todo-container">
        <ul className="todo-list">
        {filteredTodos.map(todo=>(
          <ToDo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text}/>
        ))}
        </ul>
      </div>
    )
}

export default TodoList;