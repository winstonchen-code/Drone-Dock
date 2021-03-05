import React, { useState } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, LocationImage } from './SignupElements';
// import { Link as LinkR } from 'react-router-dom'

const Profile = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    const { name, email, password} = formData;

    return (
        <>
        <ScrollToTop />
            <Container>
                <FormWrap>
                    <Icon to="/"> </Icon>
                    <FormContent>
                        <Form action="#" onSubmit={handleSubmit}>
                            <FormH1>Sign Up</FormH1>
                            <FormLabel htmlFor='for'>Name</FormLabel>
                            <FormInput type='text' required placeholder="name" name="name" value={name} onChange={handleChange}/>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required placeholder="email" name="email" value={email} onChange={handleChange}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required placeholder="password" name="password" value={password} onChange={handleChange}/>
                            <FormButton type='submit'>Create Account</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Profile
