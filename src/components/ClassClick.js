import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler() {
        alert("clicked");
        console.log("button clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassClick
