import style, { CSSProperties } from "styled-components";

const AccentTextStyled = style.span<{
  $bold?: boolean;
  $accentColor: CSSProperties["color"];
  $size?: CSSProperties["fontSize"];
}>`
  font-weight: ${(props) => (props.$bold ? "700" : "400")};
  color: ${(props) => props.$accentColor};
  font-size: ${(props) => props.$size || "1rem"};
`;

export { AccentTextStyled };
