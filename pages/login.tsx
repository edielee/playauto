import React from "react";
import InputText from "../atoms/InputText";
import Title from "../atoms/Title";

export default function Login(){
    const warapperStyle = {
        display: 'flex',
        margin : '0 auto',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        border : 'solid 1px black',
        width: '50vh',
        height: '100vh',
    }

    const blockStyle = {
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'column',
    }

    const titleStyle = {
        display: 'inline-block',
    }

    const inputStyle = {
        display: 'inline-block',
    }

    return (
        <div>
            <div style={warapperStyle}>
                <div style={blockStyle}>
                    <Title style={titleStyle} title="ID" require={true} />
                    <InputText style={inputStyle} placeholder="ID" type="text"  require={true}/>
                </div>
                <div style={blockStyle}>
                    <Title style={titleStyle} title="비밀번호" require={true} /> 
                    <InputText style={inputStyle} placeholder="비밀번호" type="password" require={true}/>
                </div>
                <div style={blockStyle}>
                    <Title style={titleStyle} title="이름" require={true} />
                    <InputText style={inputStyle} placeholder="이름" type="text" require={true}/>
                </div>
                <div style={blockStyle}>
                    <Title style={titleStyle} title="회사 이메일" require={true}/>
                    <InputText style={inputStyle} placeholder="XXX.playauto.co.kr" type="text" require={true}/>
                </div>
                <div style={blockStyle}>
                    <Title style={titleStyle} title="소속유닛" />
                    <InputText style={inputStyle} placeholder="소속유닛" type="text"/>
                </div>
            </div>
        </div>
    );
}




