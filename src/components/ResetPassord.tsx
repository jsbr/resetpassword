import { Component } from "react";
import React = require("react");
import { ResetPasswordService } from "../services/ResetPasswordService";
import { AppInput } from "./AppInput";
import { PrimaryButton } from "./PrimaryButton";

export class ResetPassword extends Component {
    emailInput: AppInput | null = null;
    resetPasswordService = new ResetPasswordService();

    state = {
        error: null,
        buzy: false,
        success: null,
    };

    render() {
        const { error, buzy, success } = this.state;
        return (<div className="forgetPassword">
            <h1>Forget or password?</h1>
            <p>Please enter the email address registred in your account</p>
            <AppInput label="Email address" type="email" name="email" error={error} ref={(el) => this.emailInput = el} disable={buzy}></AppInput>
            {success && <p className="success">{success}</p>}
            <PrimaryButton buzy={buzy} label="Reset password" onClick={() => this.submit()}></PrimaryButton>

        </div>)
    }


    async submit() {
        const value = this.emailInput?.value || "";

        this.setState({
            buzy: true
        });
        try {
            const result = await this.resetPasswordService.post(value);
            this.setState({
                success: result.message
            });
        }
        catch (e) {
            this.setState({
                error: e.message
            });
        }
        finally {
            this.setState({
                buzy: false
            });
        }
    }
}