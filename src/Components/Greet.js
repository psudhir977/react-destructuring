import React, { Component } from 'react'

const Greet = props =>{
    
    const {name} = props
    console.log(name);
    return(
        <div>
            <h1>
                Hello {name} 
            </h1>
        </div>
    )
}

export default Greet
