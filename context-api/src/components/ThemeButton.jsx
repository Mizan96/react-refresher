import { useContext } from "react"
import { ThemeData } from "../context/ThemeContext"

const ThemeButton = () => {
    const [theme, setTheme] =  useContext(ThemeData)
    function changeTheme(){
       setTheme('dark')
    }
  return (
    <div>
      <button 
      onClick={changeTheme}
      >Change Theme - {theme} </button>
    </div>
  )
}

export default ThemeButton
