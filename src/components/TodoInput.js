import React from 'react'
import { useState } from 'react'

const TodoInput = ({addTodo}) => {
  const [title, setTitle] = useState("")

  const handleTodo = (e) =>{
    if(e.key.toLowerCase() === "enter"){
      addTodo(title)
      setTitle("")
    }
  }
  
  return (
   <div className='input-container'>
    <span className='check'></span>
    <input type="text" placeholder='New task...' onChange={(e)=> setTitle(e.target.value)} value={title}
    onKeyDown={(e)=> handleTodo(e)}></input>
   </div>
  )
}

export default TodoInput
