import React, { Component } from "react";

export default class Field extends React.Component {

    state = {
        value: this.props.value,
        error: false
    };

    componentWillReceiveProps(update) {
        this.setState({value: update.value});
    }

    render() {
        return (
          <div>
              <input
                  placeholder={this.props.placeholder}
                  value={this.state.value}
                  onChange={this.onChange}
              />
              <span style={{color: 'red'}}>{this.state.error}</span>
          </div>
        );
    }

    onChange = (evt) => {
        const name = this.props.name;
        const value = evt.target.value;
        const error = this.props.validate ? this.props.validate(value) : false;

        this.setState({value, error});

        this.props.onChange({name, value, error})
    }
}