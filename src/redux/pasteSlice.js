// src/redux/pasteslice.js

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// INITIAL STATE
const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

// CREATE SLICE
export const pasteSlice = createSlice({
  name: "paste",
  initialState,

  reducers: {
    // ADD PASTE
    addToPastes: (state, action) => {
      const paste = action.payload;

      state.pastes.push(paste);

      localStorage.setItem("pastes", JSON.stringify(state.pastes));

      toast.success("Paste Created Successfully");
    },

    // UPDATE PASTE
    updateToPastes: (state, action) => {
      const updatedPaste = action.payload;

      const index = state.pastes.findIndex(
        (item) => item._id === updatedPaste._id,
      );

      if (index !== -1) {
        state.pastes[index] = updatedPaste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste Updated Successfully");
      }
    },

    // DELETE PASTE
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;

      state.pastes = state.pastes.filter((item) => item._id !== pasteId);

      localStorage.setItem("pastes", JSON.stringify(state.pastes));

      toast.success("Paste Deleted Successfully");
    },

    // CLEAR ALL PASTES
    resetAllPastes: (state) => {
      state.pastes = [];

      localStorage.removeItem("pastes");

      toast.success("All Pastes Cleared");
    },
  },
});

// EXPORT ACTIONS
export const { addToPastes, updateToPastes, removeFromPastes, resetAllPastes } =
  pasteSlice.actions;

// EXPORT REDUCER
export default pasteSlice.reducer;
