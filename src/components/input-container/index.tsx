import { InputContainerStyled } from "./style";
import { InputContainerProps } from "./types";

const InputContainer = ({ children, ...props }: InputContainerProps) => {
  return <InputContainerStyled {...props}>{children}</InputContainerStyled>;
};

export { InputContainer };
