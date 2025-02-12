import React, { useState } from 'react'
import useTodo from '../contexts/TodoContext';

function TodoForm() {
    const [todo,setTodo] = useState('')
    const {addTodo} = useTodo();

    const add =(e) =>{
        e.preventDefault();
         addTodo({id:Date.now(),text:todo,isDone:false});
         setTodo("")
    }

  return (
    <form onSubmit={add}>
    <input type="text" value={todo} className="w-xl bg-white border-2 border-r-0 rounded-xl p-2" 
    onChange={(e)=>setTodo(e.target.value) }/>
    <button className="px-6 py-2 bg-amber-600 cursor-pointer border-2 rounded-xl border-l-0">Add</button>
  </form>
  )
}

export default TodoForm