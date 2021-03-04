import React, { useState } from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements';
// import { Link as LinkR } from 'react-router-dom'

const SignIn = ( {setUser} ) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(user => {
                // console.log(user)
                setUser(user);
            })
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"> </Icon>
                    <FormContent>
                        <Form action="#" onSubmit={handleSubmit}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required placeholder="email" name="email" value={formData.email} onChange={handleChange}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required placeholder="password" name="password" value={formData.password} onChange={handleChange}/>
                            <FormButton type='submit'>Continue
                                {/* <LinkR to="/videos">Continue</LinkR> */}
                            </FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
