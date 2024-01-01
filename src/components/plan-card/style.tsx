import style from "styled-components";

const PlanContentContainerStyled = style.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2rem;
  margin-left: 1rem;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

export { PlanContentContainerStyled };
