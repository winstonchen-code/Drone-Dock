import React, {useState} from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Modal } from './EditModal/Modal'

const Card = styled.div`
    border: 1px solid #efefef;
    // border: 1px solid black;
    background: linear-gradient(
        108deg,
        rgba(0, 80, 202, 1) 0%,
        rgba(5, 100, 250, 1) 100%
    );
    border-radius: 0%;
`
const LocationImage = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    img{
        height: 150px;
        width: 150px;
        // border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const LocationCity1 = styled.div`
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    padding: 0px 0 0px 0;
`
const LocationCity = styled.div`
    font-size: 14px;
    font-weight: bold;
    padding: 0px 0 0px 0;
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
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <Card>
            <LocationImage>
                <img src={props.item.image} alt={props.item.name}/>
            </LocationImage>
            <LocationCity1>{props.item.name} </LocationCity1>
            <LocationCity>{props.item.location} </LocationCity>
            <LocationCity>{props.item.date} </LocationCity>
            {/* <Rating score={props.item.avg_score}/> */}
            {/* <div className = "location-score">{props.item.avg_score}</div> */}
            <LinkWrapper>
                <Link to={`/footagelogs/${props.item.id}`}>View Log</Link>
            </LinkWrapper>
            <Btn onClick={openModal}>
                Edit
            </Btn>
            <Modal showModal={showModal} setShowModal={setShowModal} item={props.item} footageLogs={props.footageLogs} setFootageLogs={props.setFootageLogs} />
            <Btn onClick={() => props.deleteLog(props.item.id)}>
                Delete
            </Btn>
        </Card>
    )
}

export default FootageLog
