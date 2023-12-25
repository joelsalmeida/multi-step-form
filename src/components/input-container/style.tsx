import style from "styled-components";

const InputContainerStyled = style.form`
  display: flex;
  flex-direction: column;
  max-width: 530px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export { InputContainerStyled };
