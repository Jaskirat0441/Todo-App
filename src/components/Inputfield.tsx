import React from 'react'
import "./style.css"

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleSubmit:(e: React.FormEvent) => void;
}

const Inputfield :React.FC<Props>=({todo,setTodo,handleSubmit}) => {
  return (
    <form
      className="input-form"
      onSubmit={(e) => {handleSubmit(e)
      }}
    >
      <input
        type="text"
        placeholder="Enter a Todo"
        className="input-box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input-submit">
        GO
      </button>
    </form>
  )
}

export default Inputfield