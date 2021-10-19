import React, { Component } from 'react'

export default class Welcom extends Component {
    render() {
        const {name,message} = this.props
        return (
            <div>
                Hello {name}
                <br/>
                Message {message}
            </div>
        )
    }
}
