import { api } from "./api";
import { appStore } from "~/stores/app.store";

export const verifyCodeFromGoogle = async (code: string) => {
    try {
        const response = await api.post("/verify/code", { code });
        appStore().setUser(response.data)
        return response.data;
    } catch (error) {
        return error;
    }
}