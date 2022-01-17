import styled from "styled-components";

interface IH1{
    require? : boolean;
    title? : string;
}

const H1Style = styled.h1<IH1>`
    color: ${props => props.require ? "#010101" : "#666" };
    display: inline-block;
    margin-left: 10px;
    margin-right: 50px;
    font-size: large;
  `;

export default function Title(props) {

    const Span = styled.span`
        color: red;
        font-weight: bold;
    `; 

    return (
        <H1Style require={props.require}>
            {props.title}
            { props.require && <Span>*</Span> }
        </H1Style>
    );
}