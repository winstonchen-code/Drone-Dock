import React, { Component } from 'react'
import Thumbnail from './Thumbnail'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'


const Button = styled.a`
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background: #00B4D8;
    padding: 10px 20px;
    font-size: 18px;
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

const Item = (props) => {
    return (
        <div className="row pt-4 pb-4">
            <div className="col-md-10 offset-md-1">
                <div>
                    <div className="card px-5">
                        <div className="row">
                            <div className="col-md-4">
                                <Thumbnail url={props.url}/>
                            </div>
                            <CloseModalButton aria-label='Close modal' onClick={() => props.deleteVideo(props.id)} />
                            <div className="col-md-8">
                                <div className="pt-4 pb-4">
                                    <h4>{props.title}</h4>
                                    <p>{props.description}</p>
                                    <div className="cta-wrapper">
                                        <Button onClick={props.handleVideoChange} className="btn cta-btn">Watch this video</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item