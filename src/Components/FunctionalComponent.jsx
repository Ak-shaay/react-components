import React from 'react';

function FunctionalComponent(props){
    return(
        <>
        <h2>This is s functional component</h2>
        <h2>The value from props is : <br/> {props.properties.functional}</h2>
        </>
    )
}
export default FunctionalComponent;