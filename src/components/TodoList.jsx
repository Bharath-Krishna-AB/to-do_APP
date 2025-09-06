import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos,toggleTodo,deleteTodo}) {
  return (
    <div>
       <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo =>{
          return (
            <TodoItem {...todo} key={todo.key} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList