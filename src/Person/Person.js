import React from 'react';

const person = (props) =>{
    // props called this.props in class based components
    return <p> Hey my name is {props.name} my age is {props.age}</p>
}

export default person;