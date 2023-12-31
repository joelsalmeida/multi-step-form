import { configureStore } from "@reduxjs/toolkit";
import { personalInfoSlice } from "../slices/personal-info";
import { planSlice } from "../slices/plan";
import { stepsSlice } from "../slices/steps";

const store = configureStore({
  reducer: {
    steps: stepsSlice.reducer,
    personalInfo: personalInfoSlice.reducer,
    plan: planSlice.reducer,
  },
});

type RootStateType = ReturnType<typeof store.getState>;

export { store };

export type { RootStateType };
