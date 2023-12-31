import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StepType = { currentStep: number };

const initialState: StepType = {
  currentStep: 0,
};

const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<StepType>) => {
      state.currentStep = action.payload.currentStep;
    },
  },
});

export const { setCurrentStep } = stepsSlice.actions;

export { stepsSlice };
