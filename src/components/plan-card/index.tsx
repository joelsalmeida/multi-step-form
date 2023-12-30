import { CardStyled } from "../card/style";
import { HeaderStyled } from "../header/style";
import { PlanCardProps, PlanType } from "./types";
import { PlanContentContainerStyled } from "./style";

const PlanCard = ({
  plan,
  planPrice,
  planType,
  annualBenefit = "Two months free",
  icon,
  active = false,
  registerInput,
}: PlanCardProps) => {
  const planPriceSelected =
    planType === PlanType.MONTHLY
      ? `${planPrice.monthly}/mo`
      : `${planPrice.annual}/yr`;

  const planToLowerCase = plan.toLowerCase();

  return (
    <CardStyled $active={active} htmlFor={planToLowerCase}>
      <input
        type="radio"
        id={planToLowerCase}
        value={planToLowerCase}
        {...registerInput("plan")}
        style={{ display: "none" }}
      />

      <img src={icon} alt="" />

      <PlanContentContainerStyled>
        <HeaderStyled>{plan}</HeaderStyled>

        <samp>{planPriceSelected}</samp>

        {planType === PlanType.ANUAL && (
          <HeaderStyled $size={0.7}>{annualBenefit}</HeaderStyled>
        )}
      </PlanContentContainerStyled>
    </CardStyled>
  );
};

export { PlanCard };
