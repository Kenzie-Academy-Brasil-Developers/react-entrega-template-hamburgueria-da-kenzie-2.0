import { StyledBoxInput } from "./style";

interface iInput {
  labelName: string;
  id: string;
  type: "text" | "password";
  disabled?: boolean;
  placeholder?: string;
  linkForm?: any;
  error?: string;
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
      <StyledBoxInput>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...linkForm}
          disabled={disabled}
        />
        <label htmlFor={id}>{labelName}</label>
        <p>{error}</p>
      </StyledBoxInput>
    </>
  );
};
