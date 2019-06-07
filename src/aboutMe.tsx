import React, { Component } from 'react';

class AboutMe extends React.Component<{ attr: string }> {
    render() {
        return (
            <h1>{this.props.attr}</h1>
        )
    }

}

export default AboutMe;