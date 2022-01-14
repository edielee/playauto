import React from 'react';
import styled from 'styled-components';

interface IInputText{
    require ? : boolean;
    type ? : string;
    placeholder ? : string;
}

const Text = styled.input<IInputText>`
color: #010101;
font-size: 1em;
border: 1px solid #666;
border-radius: 3px;
background-color: ${props => props.require ? "#f6f6f6" : "#fff"};
display: block;
padding: 5px;
margin: 10px;
padding-top: 0;
padding-bottom: 0;
height: 23px;
width: fit-content;
`;

export default function InputText(props) {
    return (
        <Text placeholder={props.placeholder} type={props.type} require={props.require} />
    );
}
