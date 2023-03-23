import './App.css';
import Filter from './components/Filter';
import Title from './components/Title';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
 
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Wash the dishes',
      completed: true,
    },
    {
      id: 2,
      title: 'Walk the dog',
     completed: false,
    },
    {
      id: 3,
      title: 'Study for the exam',
      completed: false,
    },
    {
      id: 4,
      title: 'Finish project',
      completed: false,
    }
  ])

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length -1].id : 1;
    const newTodo = {
      id: lastId + 1,
      title, 
      completed: false
    }
    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

  const handleSetCompleted = (id) =>{
    const updatedList = todos.map(todo => {
      if (todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(updatedList)
  }

  const handleDelete = (id) =>{
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  }

  const clearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
  };

  return (
    <div className='container'>
      <Title/>
      <TodoInput addTodo={addTodo}/>
      <div className='todo-list'>
      <TodoList todos={todos} handleSetCompleted={handleSetCompleted} handleDelete={handleDelete}/>
      <Filter clearComplete={clearComplete} todos={todos}/> 
      </div>
    </div>
  );
}

export default App;
