import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce, Zoom } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    putItemIntoCollection: (state, actions) => {
      const alreadyExist = state.items.find(
        (item) => item.id === actions.payload.id,
      );
      if (!alreadyExist) {
        state.items.push(actions.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeItemFromCollection: (state, actions) => {
      state.items = state.items.filter((item) => item.id != actions.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: () => {},
    addToTaister: () => {
      toast.success("Item Is Added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    },
    removeToaster: () => {
      toast.error("Item Is Removed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    },
  },
});

export const {
  putItemIntoCollection,
  removeItemFromCollection,
  clearCollection,
  addToTaister,
  removeToaster
} = collectionSlice.actions;
export default collectionSlice.reducer;
