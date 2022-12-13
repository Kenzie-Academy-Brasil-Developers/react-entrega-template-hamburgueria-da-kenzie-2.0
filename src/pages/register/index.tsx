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

export const RegisterPage = () => {
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
            <form>
              <Input
                id="name"
                labelName="Nome"
                placeholder="Nome"
                type="text"
              />
              <Input
                id="email"
                labelName="Email"
                placeholder="Email"
                type="text"
              />
              <Input
                id="password"
                labelName="Senha"
                placeholder="Senha"
                type="password"
              />
              <Input
                id="ConfirmPassword"
                labelName="Confirmar senha"
                placeholder="Confirmar senha"
                type="password"
              />
              <Button type="submit" name="Cadastrar" variant="Grey1Default" />
            </form>
          </StyledBoxForm>
        </StyledContainerPageRegister>
      </StyledContainer>
    </>
  );
};
