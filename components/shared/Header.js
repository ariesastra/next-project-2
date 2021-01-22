import React, { useState } from 'react'
import Link from 'next/link'

// STYLE
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap'
import Typed from 'react-typed'

const BsNavBrand = () => {

    return (
        <Link Link href="/">
            <a className="navbar-brand port-navbar-brand">
                NEXTArie
            </a>
        </Link>
    )
}

const BSNavLink = (props) => {
    const {NavTitle, href} = props
    return (
        <NavItem>
            <Link href={href}>
                <a className='nav-link port-navbar-link'>
                    {NavTitle}
                </a>
            </Link>
        </NavItem>
    )
}

const LoginLink = () => {
    return <span className='nav-link port-navbar-link'>Login</span>
}

const LogoutLink = () => 
    <span className='nav-link port-navbar-link'>Logout</span>


const Header = () =>  {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <Navbar 
                color="transparent" 
                className="port-navbar port-default absolute" 
                dark
                expand="md" 
            >
                <BsNavBrand />
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/" NavTitle="Homepage" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/about" NavTitle="About" />
                        </NavItem >
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/portfolios" NavTitle="Portfolios" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/blogs" NavTitle="Blogs" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/cv" NavTitle="CV" />
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem className='port-navbar-item pointer'>
                            <LoginLink />
                        </NavItem>
                        <NavItem className='port-navbar-item pointer'>
                            <LogoutLink />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header