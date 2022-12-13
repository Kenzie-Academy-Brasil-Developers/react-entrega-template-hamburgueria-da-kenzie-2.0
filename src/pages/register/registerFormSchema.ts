import * as yup from "yup";

export const RegisterformSchema = yup.object().shape({
  name: yup.string().trim().required("Nome é obrigatório"),
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha  é obrigatório")
    .min(6, "É preciso conter ao menos 6 caracteres!"),
  passwordConfirmation: yup
    .string()
    .required("Confirmar senha é obrigatório")
    .oneOf([yup.ref("password"), null], "As senhas não conferem"),
});
