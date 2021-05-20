import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    increment(){
        {/* this.setState({
            count:this.state.count+1
        },
        ()=>{
           console.log("call back value", this.state.count) 
        }

    ) */}
        this.setState((preveState,props) => ({
            count:preveState.count+1
        }))

        console.log("count value",this.state.count)
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={()=>this.incrementFive()}>increment</button>
            </div>
        )
    }
}

export default Counter;
