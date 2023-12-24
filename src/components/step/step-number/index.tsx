import { StepNumberStyled } from "./style";
import { StepNumberProps } from "./types";

const StepNumber = ({ number, active = false }: StepNumberProps) => {
  return <StepNumberStyled $active={active}>{number}</StepNumberStyled>;
};

export { StepNumber };
