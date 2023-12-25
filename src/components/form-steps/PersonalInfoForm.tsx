import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import style from "styled-components";

import { HeaderStyled } from "../header/style";
import { Label } from "../label";
import { personalInfoSchema } from "../../schemas/personalInfoSchema";
import { InputContainer } from "../input-container";

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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
  });

  console.log("##### ERRORS: ", errors);

  return (
    <InputContainer
      onSubmit={handleSubmit((data) => console.log("##### DATA: ", data))}
    >
      <HeaderStyled $size={2}>Personal Info</HeaderStyled>
      <p>Please provide your name, email address, and phone number.</p>

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

      <button type="submit">SUBMIT :)</button>
    </InputContainer>
  );
};

export { PersonalInfoForm };