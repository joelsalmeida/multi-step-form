import { defaultTheme } from "../../styles/theme/defaultTheme";
import { ServicesCardStyled } from "../card/style";
import { HeaderStyled } from "../header/style";
import { AccentTextStyled } from "../helpers/accent-text/style";
import { PlanType } from "../plan-card/types";
import { CheckContainerStyled } from "./style";
import { ServiceCardProps } from "./types";

const ServiceCard = ({
  name,
  price,
  planType,
  description,
  active = false,
  registerInput,
}: ServiceCardProps) => {
  const planPriceSelected =
    planType === PlanType.MONTHLY
      ? `${price.monthly}/mo`
      : `${price.annual}/yr`;

  return (
    <ServicesCardStyled $active={active}>
      <CheckContainerStyled>
        <input
          type="checkbox"
          id={name.toLowerCase()}
          value={name.toLowerCase()}
          {...registerInput("services")}
        />

        <div>
          <HeaderStyled>{name}</HeaderStyled>

          <p>{description}</p>
        </div>
      </CheckContainerStyled>

      <AccentTextStyled $accentColor={defaultTheme.accent400} $size="0.8rem">
        {planPriceSelected}
      </AccentTextStyled>
    </ServicesCardStyled>
  );
};

export { ServiceCard };
