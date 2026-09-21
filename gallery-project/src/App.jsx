import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  async function getUserData() {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=30`,
    );
    setUserData(response.data);
  }

  useEffect(() => {
    getUserData();
  }, [page]);

  return (
    <>
      <div className="min-h-screen w-screen bg-black p-5 text-white">
        <h3 className="text-xl bg-red-800 w-fit">{page}</h3>
        <div className="text-white flex flex-wrap gap-5 justify-between overflow-y-auto p-5">
          {userData.length > 0 ? (
            userData.map((elem, idx) => {
              return (
                <div key={idx} className="h-90 w-70 overflow-hidden rounded-2xl">
                  <a href={elem.url}>
                    <img
                      className="h-[80%] w-full object-cover"
                      src={elem.download_url}
                      alt=""
                    />
                  </a>
                  <h1 className="text-2xl flex justify-center pt-2">
                    {elem.author}
                  </h1>
                </div>
              );
            })
          ) : (
            <h1 className="absolute top-1/2 left-1/2">Loading...</h1>
          )}
        </div>
        <div className="flex justify-center gap-5">
          <button
          style={{opacity: page==1 ? 0.5 : 1 }}
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
                setUserData([]);
              }
            }}
            className="bg-amber-600 rounded-xl cursor-pointer active:scale-95 text-xl p-2 font-semibold"
          >
            Prev
          </button>
          <button
            onClick={() => {
              setPage(page + 1);
              setUserData([]);
            }}
            className="bg-amber-600 rounded-xl cursor-pointer active:scale-95 text-xl p-2 font-semibold"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
