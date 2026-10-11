import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const {items} = useSelector(store=>store.collection)
  return (
    <div className="py-6 px-10 bg-(--c1) flex justify-between items-center">
      <Link to="/"><h2 className="text-2xl font-medium text-white">MediaSearch</h2></Link>
      <div className="flex items-center gap-5 text-xl">
        <Link
          className="text-base font-medium active:scale-95 bg-(--c3) text-(--c1) rounded px-4 py-2"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-base font-medium active:scale-95 bg-(--c3) text-(--c1) rounded px-4 py-2"
          to="/collection"
        >
          Collection <span className="text-red-700 text-xl">{items.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
