import { useTodos } from "../../context/TodoContextProvider";

const TodoList = () => {
  const { todos ,toogleTodoAsCompleted, todoDeleteHandler} = useTodos();

  let filterData = todos;
  return (
    <div>
      <ul>
        {filterData.map((todo) => {
          return (
             <li key={todo.id}>
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={()=>toogleTodoAsCompleted(todo.id)}
              />
              <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

              {
                todo.completed && (
                    <button type="button" onClick={()=> todoDeleteHandler(todo.id)}>Delete</button>
                )
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
