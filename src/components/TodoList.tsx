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
    {todos.length>0 ? <div>TodoList</div> : "" }
    <div className="todos">
    {
        todos?.map((todo)=>(
              <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
        ))
    }
    </div>
    </>
  )
}

export default TodoList