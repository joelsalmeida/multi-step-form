import { UseFormRegister } from "react-hook-form";
import { PlanType } from "../plan-card/types";
import { ServicesSchemaType } from "../../schemas/servicesSchema";

type ServicePriceTypes = {
  monthly: number;
  annual: number;
};

type ServiceCardProps = {
  name: string;
  price: ServicePriceTypes;
  planType: PlanType;
  description: string;
  active?: boolean;
  registerInput: UseFormRegister<ServicesSchemaType>;
};

export type { ServiceCardProps };
