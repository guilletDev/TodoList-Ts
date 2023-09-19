// Se debe tipar los eventos (e) :React.FormEvent<HTMLFormElement> 
// Form  (e:React.FormEvent<HTMLFormElement>):void
// Input (e:React.FormEvent<HTMLInputElement>):void

import { useState } from "react"

interface props {
    createTodo: (text:string) => void,
    
}

export const Form = ({createTodo}:props)=>{

    const [todoText, setTodoText] = useState<string>('')

    const submitHandler = (e:React.FormEvent<HTMLFormElement>):void=>{
        e.preventDefault()
        if(todoText !== ''){
            createTodo(todoText)
            e.currentTarget.reset()
        }
        setTodoText('')
        

    }

    const changeHandler = (e:React.FormEvent<HTMLInputElement>):void =>{
        setTodoText(e.currentTarget.value)
    }


    console.log(todoText)
    
    return (
        <form onSubmit={submitHandler}>
            <input type="text" onChange={changeHandler } /> <br /> <br />
            <button type="submit" disabled={!todoText}>Agregar Tarea</button>
        </form>
    )
}