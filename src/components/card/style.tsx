import style from "styled-components";

const CardStyled = style.label<{ $active?: boolean }>`
  min-height: 6rem;
  display: flex;
  background-color: ${(props) => props.theme.neutral300};
  border: 1px solid ${(props) =>
    props.$active ? props.theme.accent400 : props.theme.neutral400};
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    min-width: 8.5rem;
    min-height: 11.5rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;
  }
`;

export { CardStyled };
