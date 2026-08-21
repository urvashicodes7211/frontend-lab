import React, { useEffect, useState } from 'react'

function A2() {
    const [sec,setSec] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setSec(sec+1);
        },1000)
    },[sec]);
  return (
    <div>
        <h1>Second : {sec}</h1>
    </div>
  )
}

export default A2