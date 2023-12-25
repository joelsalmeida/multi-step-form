import { configureStore } from "@reduxjs/toolkit";
import { personalInfoSlice } from "../slices/personal-info";

const store = configureStore({
  reducer: { personalInfo: personalInfoSlice.reducer },
});

export { store };
