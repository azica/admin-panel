
import { Endpoints } from "api/endpoints";
import $api, { $withoutTokenApi } from "../api";
import { clearLocalStorage } from "shared/helpers/localStorage";

export const AuthService = {
    async login({ email, password }: Login): Promise<LoginResponse | ErrorResponse> {
        const res = await $withoutTokenApi.post<LoginResponse & ErrorResponse>(Endpoints.LOGIN, {
            email,
            password,
        });
        console.log(res);

        return res.data;
    },
    async passwordRecovery(data: PasswordRecovery): Promise<ServerResponse | { errors: ErrorObject[] }> {
        const res = await $api.post<ServerResponse & { errors: ErrorObject[] }>(Endpoints.PASSWORD_RECOVERY, data);
        return res.data;
    },
    async passwordCreate(data: PasswordCreate): Promise<ServerResponse | { errors: ErrorObject[] }> {
        const res = await $api.post<ServerResponse & { errors: ErrorObject[] }>(Endpoints.FORGET_PASSOWRD, data);
        return res.data;
    },
    async logout(): Promise<void> {
        clearLocalStorage();
        const res = await $api.postForm(Endpoints.LOGOUT);
        return res.data;
    },
    async checkPasswordVerify(data: { token: string }): Promise<ServerResponse & { errors: ErrorObject[] }> {
        const res = await $api.post<ServerResponse & { errors: ErrorObject[] }>(Endpoints.PASSWORD_TOKEN_VERIFY, data);
        return res.data;
    },
};
