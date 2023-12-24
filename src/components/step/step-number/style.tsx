import styled from "styled-components";

const StepNumberStyled = styled.span<{ $active: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 93px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.$active ? props.theme.accent300 : "none")};
  color: ${(props) =>
    props.$active ? props.theme.accent500 : props.theme.neutral00};
  border: ${(props) => !props.$active && `1px solid ${props.theme.neutral00}`};
  font-weight: 700;
`;

export { StepNumberStyled };
