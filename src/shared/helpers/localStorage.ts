export const setTokenFromStorage = (token: Tokens) => {
    localStorage.setItem("token", JSON.stringify(token));
};

export const clearLocalStorage = () => localStorage.removeItem("token");

export const getTokensFromStorage = (): Tokens | null => {
    const storage: string | null = localStorage.getItem("token");
    return storage ? JSON.parse(storage) : null;
};

