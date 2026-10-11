import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from "react-toastify";

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
    removeItemFromCollection: () => {},
    clearCollection: () => {},
    addToTaister: () => {
      toast.success("Iten is Added", {
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
  },
});

export const {
  putItemIntoCollection,
  removeItemFromCollection,
  clearCollection,
  addToTaister
} = collectionSlice.actions;
export default collectionSlice.reducer;
