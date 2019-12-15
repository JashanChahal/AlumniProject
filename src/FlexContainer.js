import React from 'react';

export default function FlexContainer(props){
    return (
        <div className="d-flex p-2 justify-content-between">
             <div>{props.left}</div>
             <div>{props.right}</div>
        </div>
    );
}