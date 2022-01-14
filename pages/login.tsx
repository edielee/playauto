import React from "react";
import InputText from "../atoms/InputText";
import Title from "../atoms/Title";

export default function Login(){
    const style = {
        display: 'block',
        margin : '0 auto',
    }

    return (
        <div>
            <div style={style}>
                <Title title="ID" require={true} /> <InputText placeholder="ID" type="text"  require={true}/>
                <Title title="비밀번호" require={true} /> <InputText placeholder="비밀번호" type="text" require={true}/>
                <Title title="이름" require={true} /> <InputText placeholder="이름" type="text" require={true}/>
                <Title title="소속유닛" /> <InputText placeholder="소속유닛" type="text"/>
            </div>
        </div>
    );
}