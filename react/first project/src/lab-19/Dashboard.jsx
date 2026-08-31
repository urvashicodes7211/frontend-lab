import React from 'react'
import Profile from './Profile'

function Dashboard({curruntUser,handleLogout}) {
  return (
    <div>
        <Profile curruntUser={curruntUser}  handleLogout={handleLogout}/>
    </div>
  )
}

export default Dashboard