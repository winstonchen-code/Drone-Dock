import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import SignIn from '../Signin'

const SigninPage = ( {setUser, setFootageLogs} ) => {
    return (
        <div>
            <ScrollToTop />
            <SignIn setUser={setUser} setFootageLogs={setFootageLogs} />
        </div>
    )
}

export default SigninPage
