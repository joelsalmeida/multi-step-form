import style from "styled-components";

const StepContainerStyled = style.div`
  height: 170px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  background-image: url(bg-sidebar-mobile.svg);
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  padding: 2rem;

  @media (min-width: 768px) {
    width: 270px;
    height: 570px;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    background-image: url(bg-sidebar-desktop.svg);
  }
`;

export { StepContainerStyled };
