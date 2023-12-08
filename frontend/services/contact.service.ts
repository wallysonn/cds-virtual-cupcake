import {api} from "./api";

export const sendContact = async (name: string, email: string, message: string) => {

    return api.post("/send_contact",{
        name,
        email,
        message
    });

}