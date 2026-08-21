import React, { useState } from 'react'

function A1() {
    const [a,setA] = useState(0);
    const [s,setS] = useState("");

  return (
    <>
        <h1>Name : {s}</h1>
        <input type="text" value={s} onChange={(e)=>{
            setS(e.target.value);
        }}/>
        <h1>Count = {a}</h1>
        <button onClick={()=>{
            setA(a+1)
        }}>Increment</button>
        <button onClick={()=>{
            setA(a-1)
        }}>decrement</button>
        <button onClick={()=>{
            setA(0)
        }}>Reset</button>
    </>
  )
}

export default A1