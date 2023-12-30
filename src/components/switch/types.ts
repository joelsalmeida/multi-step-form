import { UseFormRegister } from "react-hook-form";
import { PlanSchemaType } from "../../schemas/planSchema";

type SwitchProps = {
  registerInput: UseFormRegister<PlanSchemaType>;
};

export type { SwitchProps };
