import { useContext } from 'react'
import { ThemeData } from '../context/ThemeContext'

const Navbar2 = () => {
  const [theme] = useContext(ThemeData)
  return (
    <div className='nav2'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>{theme}</h4>
    </div>
  )
}

export default Navbar2
