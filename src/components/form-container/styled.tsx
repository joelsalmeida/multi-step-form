import style from "styled-components";

const FormContainerStyled = style.div`
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.neutral200};
  box-shadow: 0px 4px 32px 0px rgba(150,153,171,0.5);
  margin-top: 80px;

  @media (min-width: 768px) {
    display: flex;
    max-width: 940px;
    margin-top: 1rem;
  }
`;

export { FormContainerStyled };
