import React, { useState } from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './AddLogElements';

const AddLog = ({ onAdd }) => {
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
    }
    return (
        <Container>
            <FormWrap>
                <FormContent>
                    <Form onSubmit={onSubmit}>
                        {/* <div> */}
                            <FormLabel>Name</FormLabel>
                            <FormInput type='text' placeholder='Add Name' value={name} onChange={(e) => setName(e.target.value)} />            
                        {/* </div> */}
                        {/* <div> */}
                            <FormLabel>Image</FormLabel>
                            <FormInput type='text' placeholder='Add Image' value={image} onChange={(e) => setImage(e.target.value)}/>            
                        
                            <FormLabel>Location</FormLabel>
                            <FormInput type='text' placeholder='Add Location' value={location} onChange={(e) => setLocation(e.target.value)}/>            
                        {/* </div> */}
                        {/* <div> */}
                            <FormLabel>Date</FormLabel>
                            <FormInput type='date' value={date} onChange={(e) => setDate(e.target.value)}/>            
                        {/* </div> */}
                            <FormButton type='submit'>Create Log</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default AddLog
