import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkNavigation } from "../../components/LinkNavigation";
import { Title } from "../../components/Title";

export const LoginPage = () => {
  return (
    <>
      <h1>Page Login</h1>
      <br></br>
      <Input
        id="email"
        labelName="Email"
        type="text"
        placeholder="Email"
        error="teste"
      />
      <Button type="button" variant="PrimaryDefault" name="Teste" />
      <br></br>
      <Button type="button" variant="PrimaryMedium" name="Teste2" />
      <br></br>
      <Button type="button" variant="Grey1Default" name="teste3" />
      <br></br>
      <Button type="button" variant="Grey2Medium" name="teste3" />
      <br></br>
      <Title type="Heading1" colorTitle="Grey3">
        Testandoangoadnguahnguoa
      </Title>
      <br></br>
      <Title type="Heading2" colorTitle="Grey5">
        Testandoangoadnguahnguoa
      </Title>
      <br></br>
      <Title type="Heading3" colorTitle="Sucess">
        Testandoangoadnguahnguoa
      </Title>
      <br></br>
      <Title type="Headline" colorTitle="Grey5">
        Testandoangoadnguahnguoa
      </Title>
      <br></br>
      <Title type="Body" colorTitle="Sucess">
        Testandoangoadnguahnguoa
      </Title>
      <br></br>
      <Title type="Body-600" colorTitle="Grey5">
        Testandoangoadnguahnguoa
      </Title>
      <br></br>
      <Title type="Caption" colorTitle="Grey3">
        Testandoangoadnguahnguoa
      </Title>
      <br></br>
      <LinkNavigation name="Cadastrar" to="/register" variant="Grey1Default" />
      <br></br>
      <LinkNavigation
        name="Voltar para pagina"
        to="/register"
        variant="Underline"
      />
    </>
  );
};
