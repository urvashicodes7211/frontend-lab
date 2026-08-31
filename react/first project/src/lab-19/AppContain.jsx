import React, { useState } from 'react'
import Login from './Login';
import Dashboard from './Dashboard';

function AppContain() {
    const [curruntUser,setcurruntUser] = useState(null);
    const handleLogin = (user)=>{
        setcurruntUser(user);
        console.log(user)
    }
    const handleLogout = ()=>{
        setcurruntUser(null);
    }
  return (
    <div>
        {
            curruntUser ? 
            (<Dashboard curruntUser={curruntUser}  handleLogout={handleLogout}/>) : 
            (<Login handleLogin = {handleLogin}/>)

        }
           
    </div>
  )
}

export default AppContain