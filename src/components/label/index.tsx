import { LabelStyled } from "./style";
import { LabelProps } from "./types";

const Label = ({ children }: LabelProps) => {
  return <LabelStyled>{children}</LabelStyled>;
};

export { Label };
