import style from "styled-components";

const LabelStyled = style.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.theme.accent500};
  margin-bottom: 0.5rem;
`;

export { LabelStyled };
