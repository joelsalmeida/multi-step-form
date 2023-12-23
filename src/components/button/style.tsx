import style from "styled-components";

const ButtonStyled = style.button`
  background-color: ${(props) => props.theme.accent500};
  color: ${(props) => props.theme.neutral00};
  padding: 0.7rem 1.2rem;
  font-weight: 700;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.accent400};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export { ButtonStyled };
