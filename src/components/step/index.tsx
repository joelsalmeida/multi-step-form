import { StepStyled } from "./style";
import { StepInfo } from "./step-info";
import { StepNumber } from "./step-number";
import { StepProps } from "./types";

const Step = ({ number, description, active = false }: StepProps) => {
  return (
    <StepStyled>
      <StepNumber number={number} active={active} />
      <StepInfo number={number} description={description} />
    </StepStyled>
  );
};

export { Step };
