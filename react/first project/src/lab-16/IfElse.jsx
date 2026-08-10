import React from 'react'

function IfElse() {
  const isLogin = true;
  if(isLogin){
    return(<h1>Welcome back!!</h1>);
  }else{
    return(<h1>please login</h1>);
  }
}

export default IfElse