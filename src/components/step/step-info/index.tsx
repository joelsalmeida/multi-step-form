import { StepInfoProps } from "./types";
import {
  StepInfoStyled,
  StepInfoTitleStyled,
  StepInfoSubtitleStyled,
} from "./style";

const StepInfo = ({ number, description }: StepInfoProps) => {
  return (
    <StepInfoStyled>
      <StepInfoSubtitleStyled>{`step ${number}`}</StepInfoSubtitleStyled>
      <StepInfoTitleStyled>{description}</StepInfoTitleStyled>
    </StepInfoStyled>
  );
};

export { StepInfo };
