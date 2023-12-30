import {
  SwitchContainerStyled,
  SwitchInputStyled,
  SwitchLabelStyled,
} from "./style";
import { SwitchProps } from "./types";

const Switch = ({ registerInput }: SwitchProps) => {
  return (
    <SwitchLabelStyled>
      Monthly
      <SwitchContainerStyled>
        <SwitchInputStyled
          type="checkbox"
          value="anual"
          {...registerInput("planType")}
        />
      </SwitchContainerStyled>
      Early
    </SwitchLabelStyled>
  );
};

export { Switch };
