import style from "styled-components";

const InputContainerStyled = style.form`
  display: flex;
  flex-direction: column;
  max-width: 530px;
  
  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 2rem;
  }
`;

export { InputContainerStyled };
