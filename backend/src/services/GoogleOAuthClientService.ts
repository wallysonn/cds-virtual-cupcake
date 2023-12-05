import {OAuth2Client} from "google-auth-library";
import {http} from "./api";

export class GoogleOAuthClientService {

    private static client: OAuth2Client;

    public static getClient() {
        if (!GoogleOAuthClientService.client) {
            GoogleOAuthClientService.client = new OAuth2Client(
                process.env.GOOGLE_CLIENT_ID,
                process.env.GOOGLE_CLIENT_SECRET,
                process.env.GOOGLE_REDIRECT_URI
            );
        }
        return GoogleOAuthClientService.client;
    }

    public static async getProfileInfo(token: string) {
        try {

            const {data} = await http.get(`https://www.googleapis.com/oauth2/v1/userinfo`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return data

        } catch (err) {

            console.log(err)
            throw err

        }
    }

}