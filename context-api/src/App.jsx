import { useContext } from "react";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import ThemeButton from "./components/ThemeButton";
import { ThemeData } from "./context/ThemeContext";

const App = () => {
  const [theme] = useContext(ThemeData)
  return (
    <>
      <div className={theme}>
        <Navbar />
        <Navbar2 />
      </div>
      <ThemeButton />
    </>
  );
};

export default App;
