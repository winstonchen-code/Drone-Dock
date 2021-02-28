import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from'./NavbarElements';

const Navbar = ({ toggle, user }) => {
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
                                <NavLinks to="/locations">Portfolio</NavLinks>
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
                        <NavBtn>
                            <NavBtnLink to="/signin">Log Out</NavBtnLink>
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
