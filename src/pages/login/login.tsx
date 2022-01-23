import { useEffect, useState } from 'react'
import { MEMBER } from '../../actions/member'

import { checkLogin } from '../../common/validation'
import { useMe } from '../../Hooks/memberHook'



export default function Home() {

    const [test, setTest] = useState('')
    useEffect(()=>{

    })

    const {data} = useMe()

    const onClick = (data : {id: string, pwd: string}) => {
       const checkval = checkLogin(data)

       if(!checkval.state){
           alret(checkval.msg)
       }
    }

  return (
    <>
        <input></input>
    </>
  );
}
