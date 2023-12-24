import styled from "styled-components";

const StepInfoTitleStyled = styled.span`
  text-transform: uppercase;
  color: ${(props) => props.theme.neutral00};
  font-weight: 700;
`;

const StepInfoSubtitleStyled = styled.p`
  text-transform: uppercase;
  color: ${(props) => props.theme.neutral400};
`;

const StepInfoStyled = styled.li`
  background-color: darkblue;
  display: flex;
  flex-direction: column;
`;

export { StepInfoStyled, StepInfoTitleStyled, StepInfoSubtitleStyled };
