import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setQuery(text));
          setText("");
        }}
        className="flex p-10 gap-5 bg-gray-900"
      >
        <input
          required
          value={text}
          className="w-full border-2 px-4 py-2 text-xl rounded outline-none"
          type="text"
          placeholder="Search anything.."
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="active:scale-95 ecursor-pointer border-2 px-4 py-2 text-xl rounded outline-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
