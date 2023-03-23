import React from 'react'

const Todo = ({todo, handleSetCompleted, handleDelete}) => {
  return (
    <div className='todoItem'>
        <div className='left'>
          {todo.completed ? <div onClick={() => handleSetCompleted(todo.id)}><img src='/checkIcon.svg' alt='check' className='completed'></img></div> : <span className='check' onClick={(e) => handleSetCompleted(todo.id)}></span>}
          <p className={todo.completed ? 'checked' : ''}>{todo.title}</p>
        </div>
        <img src='/closeIcon.svg' alt='close' className='closeIcon' onClick={() => handleDelete(todo.id)}></img>       
    </div>
  )
}

export default Todo
