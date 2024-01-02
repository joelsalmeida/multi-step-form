import style from "styled-components";

const CardBaseStyled = style.label<{ $active?: boolean }>`
  display: flex;
  background-color: ${(props) => props.theme.neutral300};
  border: 1px solid ${(props) =>
    props.$active ? props.theme.accent400 : props.theme.neutral400};
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const CardStyled = style(CardBaseStyled)`
  @media (min-width: 768px) {
    min-width: 8.5rem;
    min-height: 11.5rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;
  }
`;

const ServicesCardStyled = style(CardBaseStyled)`
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    min-width: 28rem;
  }
`;

export { CardStyled, CardBaseStyled, ServicesCardStyled };
