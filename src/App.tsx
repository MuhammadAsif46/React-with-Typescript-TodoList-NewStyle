import Navbar from "./components/Navbar/Navbar"
import TodoForm from "./components/TodoForm/TodoForm"
import TodoList from "./components/TodoList/TodoList"

const App = () => {
  return (
    <div>
      <main>
        <h1>Todo React + Typescript</h1>
        <Navbar/>
        <TodoForm/>
        <TodoList/>
      </main>
    </div>
  )
}

export default App