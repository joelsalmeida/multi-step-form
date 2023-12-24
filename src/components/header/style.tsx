import style from "styled-components";

const HeaderStyled = style.header<{ $size?: number }>`
  font-size: ${(props) => props.$size || 1}rem;
  font-weight: 700;
  color: ${(props) => props.theme.accent500};
  line-height: 1.5em;
`;

export { HeaderStyled };
