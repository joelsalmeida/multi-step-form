import style from "styled-components";

const SwitchLabelStyled = style.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${(props) => props.theme.neutral300};
  border-radius: 4px;
  padding: 0.5rem;
`;

const SwitchContainerStyled = style.div`
  background-color: ${(props) => props.theme.accent500};
  width: 38px;
  height: 20px;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 20px;
`;

const SwitchInputStyled = style.input`
  background-color: ${(props) => props.theme.neutral00};
  width: 12px;
  height: 12px;
  border-radius: 12px;
  appearance: none;
  border: none;
  padding: 0;
  margin: 0;
  transition: 0.1s ease-out;

  &:checked {
    transform: translateX(18px);
  }
`;

export { SwitchInputStyled, SwitchContainerStyled, SwitchLabelStyled };
