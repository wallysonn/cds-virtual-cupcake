import {api} from "./api";

export const validate = async (code: string) => {
    return await api.post("/verify/coupon", {code});
}