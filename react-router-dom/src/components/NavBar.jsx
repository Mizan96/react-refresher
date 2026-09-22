import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex justify-between bg-cyan-900 py-4 px-8">
      <h2 className="text-xl font-bold">Reactjs</h2>
      <div className="flex gap-8">
        <Link className="text-lg font-bold" to="/">Home</Link>
        <Link className="text-lg font-bold" to="/about">About</Link>
        <Link className="text-lg font-bold" to="/course">Courses</Link>
        <Link className="text-lg font-bold" to="/product">Products</Link>
      </div>
    </div>
  )
}

export default NavBar
