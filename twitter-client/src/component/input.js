
import React from 'react';

const Input=(props)=>{

    return (

        <input type={props.type} value={props.value} onChange={props.onchange}  name={props.name} placeholder={props.placeholder} />
    );

};



export default Input







