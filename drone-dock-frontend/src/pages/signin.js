import React from 'react'
import SignIn from '../Signin'

const SigninPage = ( {setUser} ) => {
    return (
        <div>
            <SignIn setUser={setUser} />
        </div>
    )
}

export default SigninPage
