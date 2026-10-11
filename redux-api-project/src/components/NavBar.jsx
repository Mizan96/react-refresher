import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="py-6 px-10 bg-(--c1) flex justify-between items-center">
      <h2 className="text-2xl font-medium text-white">MediaSearch</h2>
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
          Collection
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
