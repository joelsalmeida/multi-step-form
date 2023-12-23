import { ButtonStyled } from "../button/style";
import { ButtonProps } from "./types";

const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export { Button };
