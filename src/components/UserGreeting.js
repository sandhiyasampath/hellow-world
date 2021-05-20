import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }

    render() {
        let message;
        if(this.state.isLoggedin){
            message = <div>Welcome Sandhiya</div>
        }
        else{
            message = <div>Welcome Guest</div>
        }
        return(
            message
        )

       {/*} if (this.state.isLoggedin) {
            return (<div>Welcome Sandhiya</div>)
        }
        else {
            return (<div>Welcome Guest</div>)
        }*/}
        {/* return (
            <div>
                <div>Welcome sandhiya</div>
                <div>Welcome Guest</div>
            </div>
       )*/}
    }
}

export default UserGreeting
