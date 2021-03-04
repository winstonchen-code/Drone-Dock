import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import SignIn from '../Signin'

const SigninPage = ( {setUser} ) => {
    return (
        <div>
            <ScrollToTop />
            <SignIn setUser={setUser} />
        </div>
    )
}

export default SigninPage
