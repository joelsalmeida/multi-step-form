type PlanPriceTypes = {
  monthly: number;
  annual: number;
};

type PlanDataType = {
  name: string;
  price: PlanPriceTypes;
  annualSubscriptionBenefit: string;
};

export type { PlanPriceTypes, PlanDataType };
