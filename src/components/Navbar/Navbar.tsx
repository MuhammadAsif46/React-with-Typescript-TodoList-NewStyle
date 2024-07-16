import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link to="/" className="">All</Link>
        <Link to="/?todos=active" className="">Active</Link>
        <Link to="/?todos=completed" className="">Compeleted</Link>
    </nav>
  )
}

export default Navbar