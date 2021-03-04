import React, { useState } from 'react'
import ScrollToTop from '../ScrollToTop';
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, LocationImage } from './ProfileElements';
// import { Link as LinkR } from 'react-router-dom'

const Profile = ( { user, setUser } ) => {

    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        password: user.password,
        image: user.image,
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

    // function handleSubmit(e) {
    //     debugger
    //     e.preventDefault();
    //     fetch("http://localhost:3000/me", {
    //         method: 'DELETE',
    //     })
    // }

    const { name, username, password, image, bio } = formData;

    return (
        <>
        <ScrollToTop />
            <Container>
                <FormWrap>
                    <Icon to="/"> </Icon>
                    <FormContent>
                        <Form action="#" onSubmit={handleSubmit}>
                            {/* <FormH1> {user.name}'s Profile</FormH1> */}
                            <LocationImage>
                                <img src={user.image} alt={user.name}/>
                            </LocationImage>
                            <FormLabel htmlFor='for'>Name</FormLabel>
                            <FormInput type='text' required placeholder="name" name="name" value={formData.name} onChange={handleChange}/>
                            <FormLabel htmlFor='for'>Image</FormLabel>
                            <FormInput type='text' placeholder="image" name="image" value={formData.image} onChange={handleChange}/>
                            <FormLabel htmlFor='for'>Bio</FormLabel>
                            <FormInput type='text' required placeholder="bio" name="bio" value={formData.bio} onChange={handleChange}/>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required placeholder="email" name="email" value={formData.email} onChange={handleChange}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required placeholder="password" name="password" value={formData.password} onChange={handleChange}/>
                            <FormButton type='submit'>Edit Profile
                                {/* <LinkR to="/videos">Continue</LinkR> */}
                            </FormButton>
                            <br></br>
                            <FormButton type='submit'>Delete Account</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Profile
