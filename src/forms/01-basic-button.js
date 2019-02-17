import React, { Component } from "react";

export default class ButtonComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        <div>
            <h1>What do you think of React?</h1>

            <button
                name='button-1'
                value='great'
                onClick={this.onButtonClick}
            >
                Great
            </button>

            <button
                name='button-2'
                value='amazing'
                onClick={this.onButtonClick}
            >
                Amazing
            </button>
        </div>
        );
    }

    onButtonClick = (e) => {
        const btn = e.target;
        console.log(`click ${btn.name}: ${btn.value}`);
    };
}