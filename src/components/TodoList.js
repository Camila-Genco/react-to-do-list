import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, handleSetCompleted, handleDelete}) => {
  return (
    <div>
      {todos.length < 1 ? "" :
      <div className='list-container'>
        {todos.map((todo)=>{
        return (       
          <Todo key={todo.id} todo={todo} handleSetCompleted={handleSetCompleted} handleDelete={handleDelete} />         
        )
      })}
      </div>}      
    </div>
  )
}

export default TodoList
