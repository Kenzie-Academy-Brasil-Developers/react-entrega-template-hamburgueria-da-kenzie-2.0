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
    </>
  );
};
