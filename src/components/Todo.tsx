// number
// void
// Interface y types
// Props
// Children: JSX.Element  // tambien funciona con React.ReactNode
// Component: React.ReactNode
// Se debe setear las props de la siguiente forma:

import { todoType } from "../types/types"; // se importa los types.

interface props {
    todoList : todoType[],
    deleteTodo: (id:string) => void,
}  

export const Todo = ({todoList, deleteTodo}:props) => {
  if(todoList.length === 0){
    return <h2>Lista Vacia</h2>
  }
  return (
    <div>
        <ul>
      {todoList.map((oneTodo) => {
        return (
          <li key={oneTodo.id}>
            <h3>{oneTodo.text}</h3>
            <p>{oneTodo.date}</p>
            <button onClick={()=> deleteTodo(oneTodo.id)}>Eliminar</button>
            
          </li>
        );
      })}
    
    </ul>
    </div>
    
  );
};
