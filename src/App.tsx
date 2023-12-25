import style from "styled-components";
import { Button } from "./components/button";
import { Step } from "./components/step";
import { StepContainerStyled } from "./components/step-container/style";
import { FormContainerStyled } from "./components/form-container/styled";
import { HeaderStyled } from "./components/header/style";
import { Label } from "./components/label";
import { NavigationContainerStyled } from "./components/navigation-container/style";
import { ContentContainer } from "./components/content-container/style";

const Base = style.div`
  inset: 0;
  padding: 1rem;
`;

const InputContainer = style.section`
  display: flex;
  flex-direction: column;
  max-width: 530px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
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
          <InputContainer>
            <HeaderStyled $size={2}>Personal Info</HeaderStyled>
            <p>Please provide your name, email address, and phone number.</p>

            <Label htmlFor="name">
              Name
              <input type="text" name="name" placeholder="e.g Stephen King" />
            </Label>

            <Label htmlFor="phone">
              Phone Number
              <input
                type="phone"
                name="phone"
                placeholder=" e.g. +1 234 567 890"
              />
            </Label>

            <Label htmlFor="email">
              Email Address
              <input
                type="email"
                name="email"
                id=""
                placeholder="e.g. stephenking@lorem.com"
              />
            </Label>
          </InputContainer>

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
