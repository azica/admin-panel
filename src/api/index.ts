import axios, { AxiosInstance, AxiosResponse } from "axios";

import { Endpoints } from "./endpoints";
import { getTokensFromStorage, setTokenFromStorage } from "shared/helpers/localStorage";

export const baseApiUrl = process.env.REACT_APP_API_URL;

export const $api: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: baseApiUrl,
    headers: { "Content-Type": "application/json" },
});


$api.interceptors.request.use(async (config) => {
    const storage: string | null = localStorage.getItem("token");
    const token: Tokens | null = storage ? JSON.parse(storage) : null;
    if (token?.access_token) {
        config.headers.Authorization = `Bearer ${token.access_token}`;
    }

    return config;
});

export const refreshToken = async ({ response, token }: { response: AxiosResponse; token: string }) => {
    try {
        const { data }: AxiosResponse<Tokens> = await axios.post(baseApiUrl + Endpoints.REFRESH_TOKEN, {
            refresh: token,
        });
        setTokenFromStorage(data);
        return axios({
            ...response.config,
            headers: {
                ...response.config.headers,
                Authorization: `Bearer ${data.access_token}`,
            },
        });
    } catch (error) {
        if (!window.location.pathname.includes("/login")) {
            window.location.href = "/login";
        }

        return response;
    }
};

$api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const token = getTokensFromStorage();
        if (error.response.status === 401) {
            if (token?.refresh_token) {
                return refreshToken({ response: error, token: token.refresh_token });
            } else {
                if (!window.location.pathname.includes("/login")) {
                    window.location.href = "/login";
                }
                return error;
            }
        }
        return Promise.reject(error);
    },
);

export default $api;

export const $withoutTokenApi: AxiosInstance = axios.create({
    // withCredentials: true,
    baseURL: baseApiUrl,
    headers: { "Content-Type": "application/json" },
});
