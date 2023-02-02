import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../models/Model'
import "./style.css"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
  
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      inputRef.current?.focus();
    }, [edit]);
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };
     const handleDelete = (id: number) => {
       setTodos(
        todos.filter((todo)=> todo.id!=id))
       };

       const handleEdit=(e:React.FormEvent,id:number)=>{
                e.preventDefault();
       
        setTodos(todos.map((todo) => (todo.id === id ? {...todo,todo:editTodo}: todo)))
        setEdit(!edit);
       }
    return (

        <form className="single-todo"  onSubmit={(e) => handleEdit(e, todo.id)}>
           {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todo-single-text"
              ref={inputRef}
            />
          ) : todo.isDone ? (
            <s className="todo-single-text">{todo.todo}</s>
          ) : (
            <span className="todo-single-text">{todo.todo}</span>
          )}
            <div>
                <span className="icons" onClick={() => {
                    if(!edit && !todo.isDone ){
                    setEdit(!edit)}
                    }}><AiFillEdit />
                </span><span className="icons"  onClick={() => handleDelete(todo.id)}><AiFillDelete />
                </span><span className="icons" onClick={() => handleDone(todo.id)}><MdDone /></span>
            </div>
        </form>

    )
}

export default SingleTodo