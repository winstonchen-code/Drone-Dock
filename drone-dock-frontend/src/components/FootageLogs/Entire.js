import React, {useState} from 'react'
import styled from 'styled-components';
import { GlobalStyle } from './globalStyles';
import { Modal } from './Modal/Modal'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;  
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
`

function Entire({onAdd}) {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <>
            <Container>
                <Button onClick={openModal}> Create New Log </Button>
                <Modal onAdd={onAdd} showModal={showModal} setShowModal={setShowModal} />
                <GlobalStyle />
            </Container>
        </>
    )
}

export default Entire
