import { LabelHTMLAttributes, ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>;

export type { LabelProps };
