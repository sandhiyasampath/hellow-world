import React ,{Component}from 'react'

class Welcome extends Component{
    render(){
        const {name,designation} = this.props;
        return(
        <div>
            <h1>Welcome {name} a.k.a {designation}</h1>
        </div>
        )
    }
}

export default Welcome;