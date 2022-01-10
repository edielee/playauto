import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "../../styles/theme";
import { SelectTag, OPtionTag } from "./Select.style";
import { ISelect } from "./Selectinterface";
import React from 'react';


function Selectbox(props: ISelect) {
  return (
    <div className="Selectbox">
      <ThemeProvider theme={LightTheme}>
      <SelectTag
        name={props.name}
        block={props.block}
        defaultSize={props.defaultSize}
      >
        <OPtionTag value="" hidden>
          Type1111
        </OPtionTag>
        <OPtionTag value="1">Audi</OPtionTag>
        <OPtionTag value="2">BMW</OPtionTag>
        <OPtionTag value="3">Citroen</OPtionTag>
        <OPtionTag value="4">Ford</OPtionTag>
      </SelectTag>
      </ThemeProvider>
    </div>
  );
}

{/*width: 5;
height: 35px;
background: white;
color: red;
padding-left: 5px;
font-size: 14px;
border: none;
margin-left: 10px;

option {
  color: gray;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
}
*/}

export default React.memo(Selectbox);