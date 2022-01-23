import styled from "styled-components";
import { IOption, ISelect } from './Selectinterface'


export const OPtionTag = styled.option<IOption>``;

export const SelectTag = styled.select<ISelect>`

border-radius: 5px;
border: 1px solid #ddd;
padding: 0 10px;
cursor: pointer;
color: ${({ theme }) => theme.color.text};
background: ${({ theme }) => theme.color.background};
display: block;
width: 5;
height: 35px;

`;


