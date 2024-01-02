import { configureStore } from "@reduxjs/toolkit";
import { personalInfoSlice } from "../slices/personal-info";
import { planSlice } from "../slices/plan";
import { stepsSlice } from "../slices/steps";
import { servicesSlice } from "../slices/services";

const store = configureStore({
  reducer: {
    steps: stepsSlice.reducer,
    personalInfo: personalInfoSlice.reducer,
    plan: planSlice.reducer,
    services: servicesSlice.reducer,
  },
});

type RootStateType = ReturnType<typeof store.getState>;

export { store };

export type { RootStateType };
