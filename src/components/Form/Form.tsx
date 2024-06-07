import { FormEvent } from "react";
import { FormContent, InputsContainer } from "./styles";
import { Button } from "components/FormElements";
import { Box } from "@mui/material";

export const Form: Form = ({
    children,
    layout,
    afterSubmit,
    values,
    method,
    mainButton,
    beforeSubmit,
    noSend,
    autoComplete,
    linksAfterButton,
    noAccounts

}) => {

    const sendForm = (event: FormEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (beforeSubmit) beforeSubmit();
        if (!noSend) {
            const options = {
                method: method ? method : "POST",
                data: values,
            };

            // request(url, options).then((res) => {
            //     afterSubmit(res.data);
            // });
        }
        if (noSend) {
            afterSubmit({});
        }
    };

    return (
        <FormContent
            component='form'
            onSubmit={(e) => sendForm(e)}
            // @ts-ignore
            autoComplete={autoComplete}>
            <InputsContainer layout={layout}>{children}</InputsContainer>
            <Box>
                <Button variant='contained' type='submit' {...mainButton} fullWidth>
                    {mainButton.name}
                </Button>
                {linksAfterButton}
            </Box>
            {noAccounts}
        </FormContent>
    );
};

export default Form