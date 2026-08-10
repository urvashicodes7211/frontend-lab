import React from 'react'

// function Student(props) {
//   return (
//   <>
//     <h1>student details : </h1>
//     <h3>Name : {props.name}</h3>
//     <h3>Age : {props.age}</h3>
//   </> 
//   )
// }

// function PropsDemo(){
//   return(
//     <>
//       <Student  name = "urvashi" age="18"/>
//       <Student  name = "urvashi" age="18"/>
//       <Student  name = "urvashi" age="18"/>
//     </>
//   )
// }

function Student({name,age}) {
  return (
  <>
    <h1>student details : </h1>
    <h3>Name : {name}</h3>
    <h3>Age : {age}</h3>
  </> 
  )
}

function PropsDemo(){
  return(
    <>
      <Student  name = "urvashi" age="18"/>
      <Student  name = "urvashi" age="18"/>
      <Student  name = "urvashi" age="18"/>
    </>
  )
}

export default PropsDemo