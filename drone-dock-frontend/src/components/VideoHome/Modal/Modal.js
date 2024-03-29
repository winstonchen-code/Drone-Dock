import React, { useState } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'


const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    bottom: 0px;
    top: 40px;
    right: 0px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 333px 467px;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

const ModalImg = styled.img`
    width: 333px;
    height: 500px;
    border-radius: 10px 0 0 10px;
    // background: #000;
    background: red;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
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

const Form = styled.form`
    background: white;
    max-width: 468px;
    max-height: 500px;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 40px 32px;
    border-radius: 0px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    text-align: center;

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    };
`

const FormLabel = styled.label`
    text-align: left; 
    margin-bottom: 1px;
    font-size: 20px;
    color: black;
`

const FormInput = styled.input`
    padding: 5px 1px 5px 1px;
    margin-bottom: 20px;
    border: solid;
    border-radius: 4px;
`

const FormButton = styled.button`
    margin-top: 10px;
    background: #0077B6;
    padding: 5px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const Modal = ({ showModal, setShowModal, onAdd }) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('Please fill out the form')
            return 
        }

        onAdd({ name, image, location, date })

        setName('')
        setImage('')
        setLocation('')
        setDate('')
        setShowModal (prev => !prev)
    }

    return (
        <>
        {showModal ? (
            <Background>
                <ModalWrapper showModal={showModal}>
                    <ModalImg src={require('./modal2.jpg').default} />
                    <Form onSubmit={onSubmit}>
                            <FormLabel>Title</FormLabel>
                            <FormInput type='text' placeholder='Add Title' value={name} onChange={(e) => setName(e.target.value)} />            
                            <FormLabel>Description</FormLabel>
                            <FormInput type='text' placeholder='Add Description' value={image} onChange={(e) => setImage(e.target.value)}/>            
                            <FormLabel>Youtube Link</FormLabel>
                            <FormInput type='text' placeholder='Add Youtube Link' value={location} onChange={(e) => setLocation(e.target.value)}/>                      
                            <FormButton type='submit'>Add Video</FormButton>
                    </Form>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal (prev => !prev)} />
                </ModalWrapper>
            </Background>
        ) : null}
        </>
    )
}