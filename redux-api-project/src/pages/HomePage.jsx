import { useSelector } from "react-redux";
import ResultGrid from "../components/ResultGrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <>
      <SearchBar />
      {query != "" ? (
        <>
          <Tabs />
          <ResultGrid />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default HomePage;
