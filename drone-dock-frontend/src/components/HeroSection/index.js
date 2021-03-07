import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, NavBtnLink} from './HeroElements'
import { Button } from '../ButtonElement'
import ScrollToTop from '../ScrollToTop'


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <ScrollToTop />
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>DRONE CONTENT REIMAGINED</HeroH1>
                <HeroP>
                    Sign up for a new account today and start your portfolio!
                </HeroP>
                <HeroBtnWrapper>
                    {/* <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}> */}
                        {/* Get started {hover ? <arrowForward /> : <arrowRight />} */}
                        {/* <NavBtnLink to="/signup">Get Started</NavBtnLink> */}
                    {/* </Button> */}
                    <Button to="/signup">
                        Get Started 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
