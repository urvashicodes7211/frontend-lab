import React, { useState } from 'react'

function A1() {
    const [a,setA] = useState(0);
    const [s,setS] = useState("");
    const [u,setU] = useState(true);
    let isVisible = true;
  return (
    <>
        <h1>Name : {s}</h1>
        <input type="text" value={s} onChange={(e)=>{
            setS(e.target.value);
        }}/>
        <br />
        <br />
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
        <br />
        <br />
        <br />
        <button onClick={()=>{
            setU(!u)
        }}>Hide/Show</button>
        <br />
        <br />
        {u && <img src='https://wallpapercave.com/wp/wp4700271.jpg' height={"100px"} width={"100px"} ></img>}
        
    </>
  )
}

export default A1