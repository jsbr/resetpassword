import { Component } from "react";
import React = require("react");

interface PrimaryButtonProp {
    label: string,
    buzy?: boolean,
    onClick?: () => void
}

export class PrimaryButton extends Component {
    props: PrimaryButtonProp = {
        label: "",
        buzy: true
    }

    render() {
        const { label, buzy, onClick } = this.props;
        return <button className={`primary ${buzy ? 'buzy' : ''}`} onClick={() => onClick && onClick()}>
            {label}
            <div className="loader">Loading...</div>
        </button>
    }
}