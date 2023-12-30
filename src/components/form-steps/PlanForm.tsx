import { useDispatch } from "react-redux";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { HeaderStyled } from "../header/style";
import { planSchema, PlanSchemaType } from "../../schemas/planSchema";
import { InputContainer } from "../input-container";
import { setPlan } from "../../redux/slices/plan";
import { PlanCard } from "../plan-card";
import { PlanType } from "../plan-card/types";
import { Switch } from "../switch";

import arcadeIcon from "/icon-arcade.svg";
import advancedIcon from "/icon-advanced.svg";
import proIcon from "/icon-pro.svg";

const PlanForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(planSchema),
    defaultValues: { plan: "arcade", planType: "anual" },
  });

  const [selectedPlan, selectedType] = watch(["plan", "planType"]);

  const dispatch = useDispatch();
  const submitPlan: SubmitHandler<PlanSchemaType> = () => {
    const formData = getValues();
    dispatch(setPlan(formData));
  };

  // TODO: REMOVE THIS LOG
  console.log("##### ERROS: ", errors);
  const type = selectedType === "anual" ? PlanType.ANUAL : PlanType.MONTHLY;

  return (
    <InputContainer onSubmit={handleSubmit(submitPlan)}>
      <HeaderStyled $size={2}>Select your plan</HeaderStyled>
      <p>You have the option of monthly or yearly billing.</p>

      <PlanCard
        plan="Arcade"
        planType={type}
        planPrice={{ monthly: 9, annual: 90 }}
        icon={arcadeIcon}
        active={selectedPlan === "arcade"}
        registerInput={register as UseFormRegister<PlanSchemaType>}
      />

      <PlanCard
        plan="Advanced"
        planType={type}
        planPrice={{ monthly: 12, annual: 120 }}
        icon={advancedIcon}
        active={selectedPlan === "advanced"}
        registerInput={register as UseFormRegister<PlanSchemaType>}
      />

      <PlanCard
        plan="Pro"
        planType={type}
        planPrice={{ monthly: 15, annual: 150 }}
        icon={proIcon}
        active={selectedPlan === "pro"}
        registerInput={register as UseFormRegister<PlanSchemaType>}
      />

      <Switch registerInput={register as UseFormRegister<PlanSchemaType>} />
    </InputContainer>
  );
};

export { PlanForm };
