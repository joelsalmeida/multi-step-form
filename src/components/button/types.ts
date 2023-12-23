import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type { ButtonProps };
