import { useReducer } from 'react'
import {v4 as uuidv4} from 'uuid' // instalamos libreria para tener id dinamico --->  yarn add uuid
//luego otra dependecia para tipar el uuid ----> yarn add -D @types/uuid
import './App.css'

//components
import { Todo } from './components/Todo'
import { Form } from './components/Form'

//types
import { todoType } from './types/types'
import { TodoAction } from './types/types'
 

// <number> -----> retorna un number.
// :void -----> no devuelve nada. se suele poner en funcion.

//Interfaces == Type
//Interface se puede extender. recomendado.
// type puede tener varias opciones usando el or | 

/* interface todoType {
  id: number,
  text: string,
  date: string,   // ? Opcional. Optional changing.
  isDone: boolean,
  country?:{
    name: string,
    population: number
  }
} */

//Usando Type:    // Diferencia que va un =
/* type todoType = {
  id: number,
  text: string,
  date: string,
  isDone: boolean
} */

// 2 Formas:
// <Array<todoType>>   // <todoType[]>

// para objeto solo va el nombre, ejemplo: TodoAction en el action.

function App() {

  const todosReducers = (state:todoType[], action:TodoAction)=>{
    switch(action.type){
        case 'add':
         return [...state, {
           id: uuidv4(),
           text: action.payload.text,
           date: new Date().toLocaleString(),
           isDone: false

        }]
         case 'delete':
           return state.filter((oneTodo) => oneTodo.id !== action.payload.id)
         case 'update':
          return state.map((oneTodo)=>{
              if(oneTodo.id === action.payload.id){
                return oneTodo.isDone ? {... oneTodo, isDone : false} : {... oneTodo, isDone : true}
              }
              return oneTodo
          })  
        default:
          return state 

    }
  }

  const INITIAL_STATE: todoType[] = [
    /* {
      id: uuidv4(),
      text:'Learn Js',
      date: new Date().toLocaleDateString(),
      isDone: false,
      country:{
        name: 'Argentina',
        population: 4900000
      }
      
    },
    {
      id: uuidv4(),
      text:'Practice Reactjs',
      date: new Date().toLocaleDateString(),
      isDone: false
      
    },
    {
      id: uuidv4(),
      text:'Estudiar Nodejs',
      date: new Date().toLocaleDateString(),
      isDone: false
      
    } */
  ]

  const [todos, dispatch] = useReducer(todosReducers, INITIAL_STATE)
  console.log(todos)
  
  const createTodoHandler  = (newTodoText:string):void=>{
    dispatch({
      type: 'add',
      payload: {
        text: newTodoText
      }

    })
  }

  const deleteTodoHandler = (id:string):void=>{
      dispatch({
        type: 'delete',
        payload: {id},
      })
  }


  return (
    <>  
      <h1>Lista de Tareas</h1>
      <Form createTodo={createTodoHandler} /> <br />
      <hr />
      <Todo todoList={todos} deleteTodo={deleteTodoHandler} />
      
        
       
    </>
  )
}

export default App
