import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlanSchemaType } from "../../../schemas/planSchema";

const initialState: PlanSchemaType = {
  plan: "",
  planType: "",
};

const convertTypeToMonthlyIfFalse = (planType: string | boolean) => {
  if (planType === false) return "monthly";
  return planType;
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlan: (state, action: PayloadAction<PlanSchemaType>) => {
      state.plan = action.payload.plan;
      state.planType = convertTypeToMonthlyIfFalse(action.payload.planType);
    },
  },
});

export const { setPlan } = planSlice.actions;

export { planSlice };
