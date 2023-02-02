import React from 'react'
import { Todo } from '../models/Model'

interface Props{
    todo:Todo
}

const SingleTodo :React.FC<Props>=({todo}) => {
  return (
   
  <li>{todo.todo}</li>
  )
}

export default SingleTodo