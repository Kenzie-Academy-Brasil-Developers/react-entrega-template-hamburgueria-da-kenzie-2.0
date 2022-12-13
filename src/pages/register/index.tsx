import { StyledContainer } from "../../styles/global";
import {
  StyledContainerPageRegister,
  StyledBoxForm,
  StyledHeaderContainerPageRegister,
} from "./style";
import { Button } from "../../components/Button";
import { InfosLogo } from "../../components/InfosLogo";
import { Input } from "../../components/Input";
import { LinkNavigation } from "../../components/LinkNavigation";
import { Title } from "../../components/Title";
import { RegisterformSchema } from "./registerFormSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface iRegisterSubmit {
  name: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

export const RegisterPage = () => {
  const { onSubmitRegister, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterSubmit>({
    mode: "onBlur",
    resolver: yupResolver(RegisterformSchema),
  });

  return (
    <>
      <StyledContainer>
        <StyledContainerPageRegister>
          <InfosLogo />
          <StyledBoxForm>
            <StyledHeaderContainerPageRegister>
              <Title colorTitle="Grey5" type="Heading3">
                Cadastro
              </Title>
              <LinkNavigation
                to="/login"
                name="Retornar para o login"
                variant="Underline"
              />
            </StyledHeaderContainerPageRegister>
            <form onSubmit={handleSubmit(onSubmitRegister)}>
              <Input
                id="name"
                labelName="Nome"
                placeholder="Nome"
                type="text"
                linkForm={register("name")}
                error={errors.name?.message}
              />
              <Input
                id="email"
                labelName="Email"
                placeholder="Email"
                type="text"
                linkForm={register("email")}
                error={errors.email?.message}
              />
              <Input
                id="password"
                labelName="Senha"
                placeholder="Senha"
                type="password"
                linkForm={register("password")}
                error={errors.password?.message}
              />
              <Input
                id="passwordConfirmation"
                labelName="Confirmar senha"
                placeholder="Confirmar senha"
                type="password"
                linkForm={register("passwordConfirmation")}
                error={errors.passwordConfirmation?.message}
              />
              <Button
                type="submit"
                name={loading ? "Cadastrando..." : "Cadastrar"}
                variant="Grey1Default"
                disabled={loading}
              />
            </form>
          </StyledBoxForm>
        </StyledContainerPageRegister>
      </StyledContainer>
    </>
  );
};
