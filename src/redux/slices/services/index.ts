import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServicesSchemaType } from "../../../schemas/servicesSchema";

const initialState: ServicesSchemaType = {
  services: [""],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<ServicesSchemaType>) => {
      state.services = action.payload.services;
    },
  },
});

export const { setServices } = servicesSlice.actions;

export { servicesSlice };
