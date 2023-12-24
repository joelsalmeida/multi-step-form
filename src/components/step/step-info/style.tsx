import styled from "styled-components";

const StepInfoTitleStyled = styled.span`
  text-transform: uppercase;
  color: ${(props) => props.theme.neutral00};
  font-weight: 700;
  line-height: 1em;
`;

const StepInfoSubtitleStyled = styled.p`
  text-transform: uppercase;
  color: ${(props) => props.theme.neutral400};
  line-height: 1em;
  margin-bottom: 0.2em;
`;

const StepInfoStyled = styled.div`
  display: none;

  @media (min-width: 768px) {
    flex-direction: column;
    display: flex;
  }
`;

export { StepInfoStyled, StepInfoTitleStyled, StepInfoSubtitleStyled };
