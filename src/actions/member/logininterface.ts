
//인풋아웃풋 인터페이스 모음 

export interface IinputLogin {
    id: string;
    pwd: string;
}

export interface IOutputLogin {
    ok: boolean;
    error?: any;
    msg: string;

}

