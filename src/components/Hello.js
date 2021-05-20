import React from 'react'

const Hello = () => {
  /*  return(
        <div>
            <h1>
                Hello Sandhiya
            </h1>
        </div>
    ) */

    return React.createElement('div',{id: "Helo"},React.createElement('h1',null,"Hello Sandhiya"))
}

export default Hello;