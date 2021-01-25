import React, { useState } from 'react'
import Link from 'next/link'

// STYLE
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
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
    return <a href='/api/v1/login' target="_self" className='nav-link port-navbar-link'>Login</a>
}

const LogoutLink = () => 
    <BSNavLink NavTitle='Logout' href='/api/v1/logout' />


const Header = ({user, loading}) =>  {
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
                        {/* <NavItem className="port-navbar-item">
                            <BSNavLink href="/about" NavTitle="About" />
                        </NavItem > */}
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/portfolios" NavTitle="Portfolios" />
                        </NavItem>
                        {/* <NavItem className="port-navbar-item">
                            <BSNavLink href="/blogs" NavTitle="Blogs" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/cv" NavTitle="CV" />
                        </NavItem> */}
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/secret" NavTitle="Secret" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/secretssr" NavTitle="Secret SSR" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/onlyadmin" NavTitle="Admin" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/onlyadminssr" NavTitle="Admin SSR" />
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        {
                            !loading
                            &&
                            <>
                                {
                                    user
                                    &&
                                    <NavItem className='port-navbar-item pointer'>
                                        <LogoutLink />
                                    </NavItem>
                                }
                                {
                                    !user 
                                    &&
                                    <NavItem className='port-navbar-item pointer'>
                                        <LoginLink />
                                    </NavItem>
                                }
                            </>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header