import { useDispatch, useSelector } from "react-redux";
import { addToTaister, putItemIntoCollection } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch()
  const addToCollection = (item) => {
    dispatch(putItemIntoCollection(item))
    dispatch(addToTaister())
  };
  return (
    <div className="w-[18vw] h-80 bg-white rounded-xl overflow-hidden relative">
      <div className="h-full">
        <a href={item.url}>
          {item.type == "photo" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}
          {item.type == "videos" ? (
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              src={item.src}
            ></video>
          ) : (
            ""
          )}
        </a>
      </div>
      <div
        id="bottom"
        className="flex justify-between gap-3 items-center text-white absolute bottom-0  w-full px-4 py-6"
      >
        <h2 className="h-13 overflow-hidden text-lg capitalize font-semibold">
          {item.title}
        </h2>
        <button
          onClick={() => {
            addToCollection(item);
          }}
          className="bg-indigo-600 text-white rounded px-3 py-1 font-medium cursor-pointer active:scale-95"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
