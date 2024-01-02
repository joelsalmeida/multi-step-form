import style from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "./components/button";
import { Step } from "./components/step";
import { StepContainerStyled } from "./components/step-container/style";
import { FormContainerStyled } from "./components/form-container/styled";
import { NavigationContainerStyled } from "./components/navigation-container/style";
import { ContentContainer } from "./components/content-container/style";
import { PersonalInfoForm } from "./components/form-steps/PersonalInfoForm";
import { PlanForm } from "./components/form-steps/PlanForm";
import { RootStateType } from "./redux/store";
import { setCurrentStep } from "./redux/slices/steps";
import { ServiceForm } from "./components/form-steps/ServiceForm";

const Base = style.div`
  inset: 0;
  padding: 1rem;
`;

function App() {
  const steps = [<PersonalInfoForm />, <PlanForm />, <ServiceForm />];
  const stepIds = ["personalInfo", "plan", "services"];

  const currentStep = useSelector(
    (state: RootStateType) => state.steps.currentStep,
  );

  const dispatch = useDispatch();
  const goBack = () => {
    dispatch(setCurrentStep({ currentStep: currentStep - 1 }));
  };

  return (
    <Base>
      <FormContainerStyled>
        <StepContainerStyled>
          <Step number={1} description="Your info" active={currentStep === 0} />
          <Step
            number={2}
            description="Select plan"
            active={currentStep === 1}
          />
          <Step number={3} description="Add-ons" active={currentStep === 2} />
          <Step number={4} description="Summary" active={currentStep === 3} />
        </StepContainerStyled>

        <ContentContainer>
          {steps[currentStep]}

          <NavigationContainerStyled>
            <Button disabled={currentStep === 0} onClick={goBack}>
              Go Back
            </Button>

            <Button type="submit" form={stepIds[currentStep]}>
              Next Step
            </Button>
          </NavigationContainerStyled>
        </ContentContainer>
      </FormContainerStyled>
    </Base>
  );
}

export { App };
