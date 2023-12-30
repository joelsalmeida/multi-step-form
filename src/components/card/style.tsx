import style from "styled-components";

const CardStyled = style.label<{ $active?: boolean }>`
  display: flex;
  background-color: ${(props) => props.theme.neutral300};
  border: 1px solid ${(props) =>
    props.$active ? props.theme.accent400 : props.theme.neutral400};
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export { CardStyled };
