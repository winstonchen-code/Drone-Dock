import React, { useState } from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './ProfileElements';
// import { Link as LinkR } from 'react-router-dom'

const Profile = ( { user, setUser } ) => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        image: "",
        bio: user.bio,
    })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/me", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then(user => {
                setUser(user);
            })
    }

    const { username, password, image, bio } = formData;

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"> </Icon>
                    <FormContent>
                        <Form action="#" onSubmit={handleSubmit}>
                            <FormH1> {user.username}'s Profile</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required placeholder="username" name="username" value={formData.username} onChange={handleChange}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required placeholder="password" name="password" value={formData.password} onChange={handleChange}/>
                            <FormLabel htmlFor='for'>Bio</FormLabel>
                            <FormInput type='text' required placeholder="bio" name="bio" value={formData.bio} onChange={handleChange}/>
                            <FormButton type='submit'>Edit Profile
                                {/* <LinkR to="/videos">Continue</LinkR> */}
                            </FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Profile
