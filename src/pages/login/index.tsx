import { Button } from "../../components/Button";
import { InfosLogo } from "../../components/InfosLogo";
import { Input } from "../../components/Input";
import { LinkNavigation } from "../../components/LinkNavigation";
import { Title } from "../../components/Title";
import { StyledContainer } from "../../styles/global";
import { StyledContainerPageLogin, StyledBoxForm } from "./style";
import { LoginformSchema } from "./loginFormSchema.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface iLoginSubmit {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { onSubmitLogin, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginSubmit>({
    mode: "onBlur",
    resolver: yupResolver(LoginformSchema),
  });

  return (
    <>
      <StyledContainer>
        <StyledContainerPageLogin>
          <InfosLogo />
          <StyledBoxForm>
            <Title colorTitle="Grey5" type="Heading3">
              Login
            </Title>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
              <Input
                id="name"
                labelName="Nome"
                placeholder="Nome"
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
              <Button
                type="submit"
                name={loading ? "Logando..." : "Logar"}
                variant="PrimaryDefault"
                disabled={loading}
              />
              <Title colorTitle="Grey3" type="Body">
                Crie sua conta para saborear muitas delícias e matar sua fome!
              </Title>
              <LinkNavigation
                name="Cadastrar"
                to="/register"
                variant="Grey1Default"
              />
            </form>
          </StyledBoxForm>
        </StyledContainerPageLogin>
      </StyledContainer>
    </>
  );
};
