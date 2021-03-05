import React, { useState } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, LocationImage } from './SignupElements';
// import { Link as LinkR } from 'react-router-dom'
import { useHistory } from "react-router-dom"

const Profile = ({setUser, setFootageLogs}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState([])
    const history = useHistory()

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json().then(data => {
                if (r.ok) {
                    return data
                } else {
                    throw data
                }
            }))
            .then((data) => {
                // console.log(user)
                // if (data.errors) {
                //     setErrors(data.errors);
                // } else {
                    const { user, token } = data;
                    localStorage.setItem("token", token);
                    setUser(user);
                    setFootageLogs(user.footage_logs);
                    history.push("/profile");
            })
            .catch(error => {
                setErrors(error.errors)
            })
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
                            {errors.map(error => <p style={{color: "red" }} key={error}>{error}</p>)}
                            <FormButton type='submit'>Create Account</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Profile
