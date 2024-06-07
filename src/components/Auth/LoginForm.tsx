import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import { FormWrapper } from "components/Wrappers";
import { Form } from "components/Form";
import { Input, Button } from "components/FormElements";

import { loginData } from "assets/data/form";

import { FormBottom, FormContent, InputsContainer, Links } from "./styles";
import { getValueFromArray } from "shared/helpers/utils";
import { useErrorHandling } from "hooks/useErrorHandling";
import { useLoginMutation } from "shared/store/queries/auth.query";
import { setTokenFromStorage } from "shared/helpers/localStorage";

export const LoginForm = () => {
  const [inputProps, setInputProps] = useState<InputData[]>(loginData);
  const [isLoader, setIsLoader] = useState(false);

  const [login, loggedData] = useLoginMutation();

  useEffect(() => {
    if (loggedData.isSuccess && loggedData.data) {
      setTokenFromStorage(loggedData.data as Tokens)
    }
  }, [loggedData])

  useErrorHandling({
    data: {
      isSuccess: loggedData.isSuccess,
      errors: loggedData.error as ErrorResponse,
    },
    navigateUrl: "/",
    setValues: setInputProps,
    setIsLoading: setIsLoader,
    inputProps: inputProps,
  });

  const loginHandle = () => {
    setIsLoader(true);
    const desiredValues: Login = getValueFromArray(inputProps);
    console.log(desiredValues);

    login(desiredValues)

  };

  const valueChange: InputOnChange = (newVal) => {
    const newInputProps = inputProps.map((item) =>
      newVal.field === item.field
        ? { ...item, value: newVal.value, invalid: false }
        : item,
    );

    setInputProps(newInputProps);
  };
  console.log(loggedData.error);

  return (
    <FormWrapper title='Вход'>
      <Form
        values={[]}
        afterSubmit={loginHandle}
        noSend
        mainButton={{
          name: "Войти"
        }}
        linksAfterButton={
          <Links>
            <Button link="/password-recovery" variant="text" fullWidth>Я забыл пароль</Button>
            <Button link="/trainer" variant="text" fullWidth>Войти как тренер</Button>
          </Links>
        }
        noAccounts={
          <FormBottom>
            <Typography>
              Нет аккаунта?
            </Typography>
            <Button link="/register" variant="text" fullWidth>
              Зарегистрироваться
            </Button>
          </FormBottom>
        }
      >
        <FormContent>
          <InputsContainer>
            {inputProps.map(({ id, ...other }) => {
              return (
                <Input key={id} id={id} {...other} onChange={valueChange} />
              );
            })}
          </InputsContainer>
        </FormContent>
      </Form>
    </FormWrapper >
  );
};


