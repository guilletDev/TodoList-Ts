export interface todoType {
    id: string,
    text: string,
    date: string,   // ? Opcional. Optional changing.
    isDone: boolean,
    country?:{
      name: string,
      population: number
    }
  }


  export type TodoAction = 
   | {
    type: 'add',
    payload: {
      text: string
    }
   }
   |{
    type: 'delete' | 'update'
    payload: {
      id:string
    }
   }