import { FormEvent, useState } from "react"
import { useTodos } from "../../context/TodoContextProvider";

const TodoForm = () => {
    const [todo,setTodo] = useState("");
    const {addTodoHandler} = useTodos()

    const formSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(todo);
        addTodoHandler(todo);
        setTodo("");
    }
  return (
    <div>
        <form onSubmit={formSubmitHandler}>
            <input type="text" value={todo} required onChange={(e)=> setTodo(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default TodoForm