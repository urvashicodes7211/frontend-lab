// import { Function } from './lab-15/Function'
// import FunctionClass from './lab-15/FunctionClass'
// import Car from './lab-15/FunctionClass'
// import And from './lab-16/and'
// import IfElse from './lab-16/IfElse'
// import PropsDemo from './lab-16/PropsDemo'
// import Ternary from './lab-16/Ternary'
// import A1 from './lab-17/A1'

// import A from "./lab-18/A1/A"

import React , {useState} from "react";
import A from "./lab-18/B2/A";

// import A2 from "./lab-21/A2"

// import A1 from "./lab-21/A1"

// import A4 from "./lab-17/A4"

// import A2 from "./lab-17/A2"

// import A3 from "./lab-17/A3"

// import A1 from "./lab-17/A1"

// import {BrowserRouter ,Routes ,Route} from "react-router-dom"
// import Home from "./lab-20/A2/Home"
// import Contact from "./lab-20/A2/Contact"
// import Test from "./lab-20/A2/Test"
// import Login from "./lab-20/A2/Login"
// import About from "./lab-20/A2/About"

function App() {
  const [name,setName] = useState("");
  return (
    <>
      {/* <h1>hello world</h1>
      <Function/>
      <FunctionClass/>
      <PropsDemo/>
      <IfElse/>
      <Ternary/>
      <And/> */}
      {/* <A1/> */}
      {/* <A3/> */}
      {/* <A2/> */}
      {/* <A4/> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter> */}

      {/* <A1/> */}
      {/* <A2/> */}
      
      <h1>Drilling</h1>
      {/* <A name={name} setName={setName}/> */}
      <A name={name} setName={setName}/>
    </>
  )
}

export default App
