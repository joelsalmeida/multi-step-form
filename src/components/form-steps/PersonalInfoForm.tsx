import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import style from "styled-components";

import { HeaderStyled } from "../header/style";
import { Label } from "../label";
import {
  personalInfoSchema,
  PersonalInfoSchemaType,
} from "../../schemas/personalInfoSchema";
import { InputContainer } from "../input-container";
import { setPersonalInfo } from "../../redux/slices/personal-info";
import { setCurrentStep } from "../../redux/slices/steps";
import { HeaderContainer } from "./styles";

const ErrorMessageStyled = style.span`
  color: ${(props) => props.theme.error500};
  font-size: 0.7rem;
  text-align: right;
  font-weight: 700;
`;

const LabelContainerStyled = style.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const PersonalInfoForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: { name: "", phone: "", email: "" },
  });

  const dispatch = useDispatch();

  const submitPersonalData: SubmitHandler<PersonalInfoSchemaType> = () => {
    const formData = getValues();
    dispatch(setPersonalInfo(formData));
    dispatch(setCurrentStep({ currentStep: 1 }));
  };

  return (
    <InputContainer
      id="personalInfo"
      onSubmit={handleSubmit(submitPersonalData)}
    >
      <HeaderContainer>
        <HeaderStyled $size={2}>Personal Info</HeaderStyled>
        <p>Please provide your name, email address, and phone number.</p>
      </HeaderContainer>

      <Label htmlFor="name">
        <LabelContainerStyled>
          Name
          {errors?.name?.message && (
            <ErrorMessageStyled>Please, enter a valid name</ErrorMessageStyled>
          )}
        </LabelContainerStyled>
        <input
          {...register("name")}
          type="text"
          name="name"
          placeholder="e.g Stephen King"
        />
      </Label>

      <Label htmlFor="phone">
        <LabelContainerStyled>
          Phone Number
          {errors?.phone?.message && (
            <ErrorMessageStyled>
              Please, enter a valid number
            </ErrorMessageStyled>
          )}
        </LabelContainerStyled>

        <input
          {...register("phone")}
          type="phone"
          name="phone"
          placeholder=" e.g. +1 234 567 890"
        />
      </Label>

      <Label htmlFor="email">
        <LabelContainerStyled>
          Email Address
          {errors?.email?.message && (
            <ErrorMessageStyled>
              Please, enter a valid e-mail
            </ErrorMessageStyled>
          )}
        </LabelContainerStyled>

        <input
          {...register("email")}
          type="email"
          name="email"
          id=""
          placeholder="e.g. stephenking@lorem.com"
        />
      </Label>
    </InputContainer>
  );
};

export { PersonalInfoForm };
