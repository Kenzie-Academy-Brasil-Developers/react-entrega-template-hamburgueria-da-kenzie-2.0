import { UseFormRegisterReturn, UseFormSetError } from "react-hook-form";
import { Title } from "../Title";
import { StyledBoxInput } from "./style";

interface iInput {
  labelName: string;
  id: string;
  type: "text" | "password";
  disabled?: boolean;
  placeholder?: string;
  linkForm?: UseFormRegisterReturn<string>;
  error?: any;
}

export const Input = ({
  type,
  id,
  labelName,
  placeholder,
  linkForm,
  error,
  disabled,
}: iInput) => {
  return (
    <>
      <StyledBoxInput borderColor={error ? true : false}>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...linkForm}
          disabled={disabled}
        />
        <label htmlFor={id}>{labelName}</label>

        <Title type="Caption" colorTitle="Negative">
          {error}
        </Title>
      </StyledBoxInput>
    </>
  );
};
