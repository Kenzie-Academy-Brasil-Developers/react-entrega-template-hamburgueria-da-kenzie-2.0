import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

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
    </>
  );
};
