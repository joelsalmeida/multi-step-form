import { FormHTMLAttributes, ReactNode } from "react";

type InputContainerProps = {
  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export type { InputContainerProps };
