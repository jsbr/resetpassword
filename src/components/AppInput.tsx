import { Component } from "react";
import React = require("react");

interface AppInputProp {
    label: string,
    type: string,
    name: string,
    error?: string | null
    disable?: boolean
}

export class AppInput extends Component {
    props: AppInputProp = {
        label: "",
        type: "",
        name: "",
        disable: false
    }

    value: string | null = null

    render() {
        const { label, type, error, name, disable } = this.props;
        return <div className="app-input">
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} onChange={(e) => this.value = e.target.value} disabled={disable}></input>
            {error && <p className="error">{error}</p>}
        </div>
    }
}