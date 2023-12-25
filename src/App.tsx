import style from "styled-components";
import { Button } from "./components/button";
import { Step } from "./components/step";
import { StepContainerStyled } from "./components/step-container/style";
import { FormContainerStyled } from "./components/form-container/styled";
import { NavigationContainerStyled } from "./components/navigation-container/style";
import { ContentContainer } from "./components/content-container/style";
import { PersonalInfoForm } from "./components/form-steps/PersonalInfoForm";

const Base = style.div`
  inset: 0;
  padding: 1rem;
`;

function App() {
  return (
    <Base>
      <FormContainerStyled>
        <StepContainerStyled>
          <Step number={1} description="Inactive Step" />
          <Step number={2} description="Active Step" active />
          <Step number={3} description="Inactive Step" />
          <Step number={4} description="Inactive Step" />
        </StepContainerStyled>

        <ContentContainer>
          <PersonalInfoForm />

          <NavigationContainerStyled>
            <Button disabled>Go Back</Button>
            <Button>Next Step</Button>
          </NavigationContainerStyled>
        </ContentContainer>
      </FormContainerStyled>
    </Base>
  );
}

export { App };
