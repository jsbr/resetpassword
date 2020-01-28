import { RequestService } from "./RequestService";
import { config } from "../config";
import { InvalidEmailError } from "../error";

const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

interface ResetPasswordResponce {
    message: String;
}

export class ResetPasswordService {

    constructor(private requestService = new RequestService()) { }

    async post(email: string): Promise<ResetPasswordResponce> {
        if (!this.validateEmail(email))
            throw new InvalidEmailError(email);
        return this.requestService.post(config.resetPasswordApi, {
            "loginId": email
        });
    }

    validateEmail(email: string) {
        return emailRegEx.test(email)
    }
}
