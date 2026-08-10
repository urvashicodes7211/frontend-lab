import React from 'react'

function And() {
    const isLogin = true;
    return(
        <>
            {isLogin && <h1>Welcome</h1>}
        </>
    )
}

export default And