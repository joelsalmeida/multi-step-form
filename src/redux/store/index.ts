import { configureStore } from "@reduxjs/toolkit";
import { personalInfoSlice } from "../slices/personal-info";
import { planSlice } from "../slices/plan";

const store = configureStore({
  reducer: { personalInfo: personalInfoSlice.reducer, plan: planSlice.reducer },
});

export { store };
