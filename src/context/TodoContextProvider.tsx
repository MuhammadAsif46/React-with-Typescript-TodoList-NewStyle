import { ReactNode, useState,createContext, useContext } from 'react';

export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date; 
}

export type Todos = {
    todos:Todo[];
    addTodoHandler:(task:string) => void; //call signature:
    toogleTodoAsCompleted:(id:string) => void;
    todoDeleteHandler:(id:string) => void;
}

export type TodoProviderProps ={
    children:ReactNode
}

export const TodoContext = createContext<Todos|null>(null)

export const TodoContextProvider = ({children}:TodoProviderProps) => {

    const [todos,setTodos] = useState<Todo[]>([])

    const addTodoHandler = (task:string) =>{
        setTodos((prev)=>{
            const newTodos:Todo[] = [
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date()
                },
                ...prev
            ]
            // console.log("prev-->",prev);
            // console.log("newTodos-->",newTodos);
            
            return newTodos
        })
    }

// mark completed:

const toogleTodoAsCompleted = (id:string) => {
    setTodos((prev)=>{
        let newTodos = prev.map((todo)=>{
            if (todo.id === id) {
                return {...todo, completed:!todo.completed}
            }
            return todo;
        })
        return newTodos;
    })
}

// delete Todo:

const todoDeleteHandler = (id:string) =>{
    setTodos((prev)=>{
        let newTodos = prev.filter((filterTodo)=>filterTodo.id !== id);
        return newTodos;
    })
}


  return (
    <TodoContext.Provider value={{todos,addTodoHandler,toogleTodoAsCompleted,todoDeleteHandler}}>
        {children}
    </TodoContext.Provider>
  )
}

// consumer:

export const useTodos = ()=>{
    const todosConsumer = useContext(TodoContext);
    if (!todosConsumer) {
        throw new Error("useTodos used outside of provider");
    }
    return todosConsumer;
}