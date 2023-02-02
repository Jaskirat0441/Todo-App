import React from 'react'
import { Todo } from '../models/Model'
import SingleTodo from './SingleTodo'

interface Props{
    todos:Array<Todo>
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList : React.FC<Props>=({todos,setTodos}) => {
  return (
    <>
    <div>TodoList</div>
    {
        todos.map((todo)=>{
            <SingleTodo todo={todo} key={todo.id}/>
        })
    }
    </>
  )
}

export default TodoList