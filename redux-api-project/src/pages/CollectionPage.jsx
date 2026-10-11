import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const { items } = useSelector((store) => store.collection);
  console.log(items.length);
  return items.length > 0 ? (
    <div className="flex w-full flex-wrap justify-center gap-6 overflow-auto py-6 px-10">
      {items.map((item, idx) => {
        return (
          <div key={idx}>
            <CollectionCard item={item} />
          </div>
        );
      })}
    </div>
  ) : (
    <h2>Collection is Empty</h2>
  );
};

export default CollectionPage;
