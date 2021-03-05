import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, Nav1} from'./NavbarElements';
import { useHistory } from "react-router-dom"

const Navbar = ({ toggle, user, setUser }) => {

    const history = useHistory()

    function logout() {
        localStorage.removeItem("token")
        setUser(null);
        history.push("/");
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">DroneDock</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {user ? (
                            <>
                            <NavItem>
                                <NavLinks to="/profile">Profile</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/footagelogs">Portfolio</NavLinks>
                            </NavItem>
                            </>
                        ) : (
                            <>
                            <NavItem>
                                <NavLinks to="about">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/profile">Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup">Sign Up</NavLinks>
                            </NavItem>
                            </>
                        )}
                    </NavMenu>
                    
                    {user ? (
                        <NavBtn onClick={logout}>
                            <Nav1>Log Out</Nav1>
                        </NavBtn>
                    ) : (
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    )}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
