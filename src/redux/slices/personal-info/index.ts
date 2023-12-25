import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersonalInfoSchemaType } from "../../../schemas/personalInfoSchema";

const initialState: PersonalInfoSchemaType = {
  name: "",
  email: "",
  phone: "",
};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<PersonalInfoSchemaType>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
  },
});

export const { setPersonalInfo } = personalInfoSlice.actions;

export { personalInfoSlice };
