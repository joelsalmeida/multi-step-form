import style from "styled-components";

const StepContainerStyled = style.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 170px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  background-image: url(bg-sidebar-mobile.svg);
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;
  z-index: -1;
  
  @media (min-width: 768px) {
    position: relative;
    border-radius: 8px;
    width: 270px;
    height: 570px;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    background-image: url(bg-sidebar-desktop.svg);
    z-index: auto;
  }
`;

export { StepContainerStyled };
