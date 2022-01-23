//유효성검사

export const checkLogin = ({id,pwd}) => {
    
    if(!id){
        // 입력하세요
        return { state: false, msg: 'noid'}
    }

}