import { PlanPriceTypes, PlanDataType } from "./types";

const Plan = class Plan implements PlanDataType {
  name: string;
  price: PlanPriceTypes;
  annualSubscriptionBenefit: string = "Two months free";

  constructor(
    name: string,
    price: PlanPriceTypes,
    annualSubscriptionBenefit: string,
  ) {
    this.name = name;
    this.price = price;
    this.annualSubscriptionBenefit = annualSubscriptionBenefit;
  }
};

const ArcadePlan = new Plan(
  "Arcade",
  { monthly: 9, annual: 90 },
  "Two months free",
);

const AdvancedPlan = new Plan(
  "Advanced",
  { monthly: 12, annual: 120 },
  "Two months free",
);

const ProPlan = new Plan(
  "Pro",
  { monthly: 15, annual: 150 },
  "Two months free",
);

export { ArcadePlan, AdvancedPlan, ProPlan };
