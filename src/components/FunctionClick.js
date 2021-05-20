import React from 'react'
// short cut to create is rfce
function FunctionClick() {
    function clickHandler() {
        alert("clicked");
        console.log("button clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
