import Jumbotron from'./Jumbotron'
import JumbotronOne from'./JumbotronOne'
import JumbotronTwo from'./JumbotronTwo'
import React from 'react'
import ScrollToTop from '../components/ScrollToTop';

function Home() {

    return (
        <div>
            <ScrollToTop />
            <Jumbotron/>
            <JumbotronOne/>
            <JumbotronTwo/>
        </div>
    )
}

export default Home