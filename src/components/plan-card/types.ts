import { UseFormRegister } from "react-hook-form";
import { PlanSchemaType } from "../../schemas/planSchema";

type PlanPrice = {
  annual: number;
  monthly: number;
};

export enum PlanType {
  ANUAL = "annual",
  MONTHLY = "monthly",
}

type PlanCardProps = {
  plan: string;
  planType: PlanType;
  planPrice: PlanPrice;
  annualBenefit?: string;
  icon: string;
  active?: boolean;
  registerInput: UseFormRegister<PlanSchemaType>;
};

export type { PlanCardProps };
