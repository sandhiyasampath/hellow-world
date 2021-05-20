import React from 'react';

const Greet = (props) => {
    console.log(props);
    const {name,designation} = props;
    return(
        <div>
            <h1>Hello {name} as Known as {designation}</h1>
            {props.children}
        </div>
    )
}

export default Greet;