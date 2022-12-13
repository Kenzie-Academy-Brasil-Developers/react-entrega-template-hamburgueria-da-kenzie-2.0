import { Button } from "../../components/Button";
import { InfosLogo } from "../../components/InfosLogo";
import { Input } from "../../components/Input";
import { LinkNavigation } from "../../components/LinkNavigation";
import { Title } from "../../components/Title";
import { StyledContainer } from "../../styles/global";
import { StyledContainerPageLogin, StyledBoxForm } from "./style";

export const LoginPage = () => {
  return (
    <>
      <StyledContainer>
        <StyledContainerPageLogin>
          <InfosLogo />
          <StyledBoxForm>
            <Title colorTitle="Grey5" type="Heading3">
              Login
            </Title>
            <form>
              <Input
                id="name"
                labelName="Nome"
                placeholder="Nome"
                type="text"
              />
              <Input
                id="password"
                labelName="Senha"
                placeholder="Senha"
                type="password"
              />
              <Button type="submit" name="Logar" variant="PrimaryDefault" />
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
