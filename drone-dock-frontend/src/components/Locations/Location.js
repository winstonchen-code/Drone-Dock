import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
`
const LocationImage = styled.div`
    padding-top: 10px;
    img{
        height: 200px;
        width: 200px;
        border-radius: 100%;
        border: 5px solid #efefef;
    }
`
const LocationCity = styled.div`
    padding: 20px 0 10px 0;
`

const LinkWrapper = styled.div`
    margin: 20px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        background: #000;
        border-raidus: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`

function Location(props) {
    return (
        <Card>
            <LocationImage>
                <img src={props.item.image_url} alt={props.item.city}/>
            </LocationImage>
            <LocationCity>{props.item.location} </LocationCity>
            {/* <Rating score={props.item.avg_score}/> */}
            {/* <div className = "location-score">{props.item.avg_score}</div> */}
            <LinkWrapper>
                <Link to={`/videos`}>View Log</Link>
            </LinkWrapper>
        </Card>
    )
}

export default Location
