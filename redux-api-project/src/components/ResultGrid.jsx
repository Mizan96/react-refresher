import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTabs, results, loading, error } = useSelector(
    (store) => store.search,
  );
  useEffect(() => {
    if(!query) return
    let data = [];
    const getData = async () => {
      try {
        dispatch(setLoading());
        if (activeTabs == "photos") {
          let response = await fetchPhotos(query);
          data = response.data.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.thumb,
            src: item.urls.full,
            url: item.links.html
          }));
        }
        if (activeTabs == "videos") {
          let response = await fetchVideos(query);
          data = response.data.videos.map((item) => ({
            id: item.id,
            type: "videos",
            title: item.user.name || "videos",
            thumbnail: item.image,
            src: item.video_files[3].link,
            url:item.url
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    getData();
  }, [query, activeTabs, dispatch]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex w-full flex-wrap justify-center gap-6 overflow-auto py-6 px-10">
      {results.map((item, idx) => {
        return (<div key={idx}>
            <ResultCard item={item} />
        </div>)
      })}
    </div>
  );
};

export default ResultGrid;
