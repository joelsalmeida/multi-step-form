import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import style from "styled-components";

import { HeaderStyled } from "../header/style";
import { PlanType } from "../plan-card/types";
import { ServiceCard } from "../service-card";
import { RootStateType } from "../../redux/store";

import {
  CustomizableProfileService,
  LargerStoreService,
  OnlineService,
} from "../../data/services";
import {
  ServicesSchemaType,
  servicesSchema,
} from "../../schemas/servicesSchema";
import { useDispatch, useSelector } from "react-redux";
import { setServices } from "../../redux/slices/services";
import { HeaderContainer } from "./styles";

const ServiceForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(servicesSchema),
    defaultValues: { services: [""] },
  });

  const [selectedServices] = watch(["services"]);
  const dispatch = useDispatch();

  const submitServices: SubmitHandler<ServicesSchemaType> = () => {
    const formData = getValues();
    dispatch(setServices(formData));
  };

  const selectedType = useSelector(
    (state: RootStateType) => state.plan.planType,
  );
  const type = selectedType === "annual" ? PlanType.ANUAL : PlanType.MONTHLY;

  // TODO: REMOVE THIS LOG
  console.log("##### ERROS: ", errors);

  const ServiceCardContainer = style.form`
  padding: 0;
  
  @media (min-width: 768px) {
      padding: 2rem;
    }
  `;

  return (
    <ServiceCardContainer id="services" onSubmit={handleSubmit(submitServices)}>
      <HeaderContainer>
        <HeaderStyled $size={2}>Pick add-ons</HeaderStyled>
        <p>Add-ons help enhance your gaming experience.</p>
      </HeaderContainer>

      <ServiceCard
        name={OnlineService.name}
        description={OnlineService.description}
        price={OnlineService.price}
        planType={type}
        active={selectedServices.includes(OnlineService.name.toLowerCase())}
        registerInput={register as UseFormRegister<ServicesSchemaType>}
      />

      <ServiceCard
        name={LargerStoreService.name}
        description={LargerStoreService.description}
        price={LargerStoreService.price}
        planType={type}
        active={selectedServices.includes(
          LargerStoreService.name.toLowerCase(),
        )}
        registerInput={register as UseFormRegister<ServicesSchemaType>}
      />

      <ServiceCard
        name={CustomizableProfileService.name}
        description={CustomizableProfileService.description}
        price={CustomizableProfileService.price}
        planType={type}
        active={selectedServices.includes(
          CustomizableProfileService.name.toLowerCase(),
        )}
        registerInput={register as UseFormRegister<ServicesSchemaType>}
      />
    </ServiceCardContainer>
  );
};

export { ServiceForm };
