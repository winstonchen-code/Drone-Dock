import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Card = styled.div`
    // border: 5px solid #efefef;
    border: 3px solid black;
    background: #fff;
    border-radius: 5%;
`
const LocationImage = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    img{
        height: 200px;
        width: 200px;
        border-radius: 100%;
        border: 5px solid #efefef;
    }
`
const LocationCity = styled.div`
    padding: 0px 0 10px 0;
`

const LinkWrapper = styled.div`
    margin: 20px 0 5px 0;
    height: 30px;

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
const FormButton = styled.button`
    margin: 10px 0 10px 0;
    height: 30px;
    color: #fff;
    background: blue;
    border-raidus: 4px;
    padding: 10px 50px 30px;
    border: 1px solid #000;
    width: 65%;
    text-decoration: none;
`

const Btn = styled.div`
    display: inline-block;
    background: black;
    color: #fff;
    border: none;
    padding: 3px 22px;
    margin: 5px 5px 10px;
    border-radius: 0px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
`

function FootageLog(props) {
    return (
        <Card>
            <LocationImage>
                <img src={props.item.image} alt={props.item.name}/>
            </LocationImage>
            <LocationCity>{props.item.name} </LocationCity>
            <LocationCity>{props.item.location} </LocationCity>
            <LocationCity>{props.item.date} </LocationCity>
            {/* <Rating score={props.item.avg_score}/> */}
            {/* <div className = "location-score">{props.item.avg_score}</div> */}
            <LinkWrapper>
                <Link to={`/footagelogs/${props.item.id}`}>View Log</Link>
            </LinkWrapper>
            <Btn type='submit'>
                Edit
            </Btn>
            <Btn onClick={() => props.deleteLog(props.item.id)}>
                Delete
            </Btn>
        </Card>
    )
}

export default FootageLog
