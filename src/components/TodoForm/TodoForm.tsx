import { FormEvent, useState } from "react"

const TodoForm = () => {
    const [todo,setTodo] = useState("");

    const formSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(todo);
        // addTodoHandler(todo);
        setTodo("");
    }
  return (
    <div>
        <form onSubmit={formSubmitHandler}>
            <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default TodoForm