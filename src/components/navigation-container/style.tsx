import style from "styled-components";

const NavigationContainerStyled = style.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.neutral00};
  box-shadow: 0px 4px 32px 0px rgba(150,153,171,0.5);

  @media (min-width: 768px) {
    position: initial;
    width: 100%;
    background-color: transparent;
    padding: 1rem 2rem;
    box-shadow: none;
  }
`;

export { NavigationContainerStyled };
