import React from 'react'

const Filter = ({clearComplete, todos}) => {

  const completedTodos = todos.filter(todo => todo.completed === true);
  const total = todos.length - completedTodos.length;

  return (
    <div className='filters-container'>
      <p>{total} items left</p>
      <button className='clear' onClick={clearComplete}>Clear Completed</button>      
    </div>
  )
}

export default Filter
