import { api } from "./api";

export const listAllProducts = async () => {
    try {
        const response = await api.get("/products");
        return response.data;
    } catch (error) {
        return error;
    }
}