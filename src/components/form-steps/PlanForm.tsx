import { useDispatch } from "react-redux";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import style from "styled-components";

import { HeaderStyled } from "../header/style";
import { planSchema, PlanSchemaType } from "../../schemas/planSchema";
import { InputContainer } from "../input-container";
import { setPlan } from "../../redux/slices/plan";
import { PlanCard } from "../plan-card";
import { PlanType } from "../plan-card/types";
import { Switch } from "../switch";
import { ArcadePlan, AdvancedPlan, ProPlan } from "../../data/plans";
import { setCurrentStep } from "../../redux/slices/steps";

import arcadeIcon from "/icon-arcade.svg";
import advancedIcon from "/icon-advanced.svg";
import proIcon from "/icon-pro.svg";
import { HeaderContainer } from "./styles";

const PlanForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(planSchema),
    defaultValues: { plan: "arcade", planType: "annual" },
  });

  const [selectedPlan, selectedType] = watch(["plan", "planType"]);

  const dispatch = useDispatch();

  const submitPlan: SubmitHandler<PlanSchemaType> = () => {
    const formData = getValues();
    dispatch(setPlan(formData));
    dispatch(setCurrentStep({ currentStep: 2 }));
  };

  // TODO: REMOVE THIS LOG
  console.log("##### ERROS: ", errors);
  const type = selectedType === "annual" ? PlanType.ANUAL : PlanType.MONTHLY;

  const PlanCardContainer = style.div`
    @media (min-width: 768px) {
      display: flex;
      gap: 1rem;
    }
  `;

  return (
    <InputContainer id="plan" onSubmit={handleSubmit(submitPlan)}>
      <HeaderContainer>
        <HeaderStyled $size={2}>Select your plan</HeaderStyled>
        <p>You have the option of monthly or yearly billing.</p>
      </HeaderContainer>

      <PlanCardContainer>
        <PlanCard
          plan={ArcadePlan.name}
          planType={type}
          planPrice={ArcadePlan.price}
          icon={arcadeIcon}
          active={selectedPlan === "arcade"}
          registerInput={register as UseFormRegister<PlanSchemaType>}
        />

        <PlanCard
          plan={AdvancedPlan.name}
          planType={type}
          planPrice={AdvancedPlan.price}
          icon={advancedIcon}
          active={selectedPlan === "advanced"}
          registerInput={register as UseFormRegister<PlanSchemaType>}
        />

        <PlanCard
          plan={ProPlan.name}
          planType={type}
          planPrice={ProPlan.price}
          icon={proIcon}
          active={selectedPlan === "pro"}
          registerInput={register as UseFormRegister<PlanSchemaType>}
        />
      </PlanCardContainer>
      <Switch registerInput={register as UseFormRegister<PlanSchemaType>} />
    </InputContainer>
  );
};

export { PlanForm };
