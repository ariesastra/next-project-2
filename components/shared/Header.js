// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap';

// const Header = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
    // <div>
    //   <Navbar color="light" light expand="md">
    //     <NavbarBrand href="/">reactstrap</NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="mr-auto" navbar>
    //         <NavItem>
    //           <NavLink href="/components/">Components</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
    //         </NavItem>
    //         <UncontrolledDropdown nav inNavbar>
    //           <DropdownToggle nav caret>
    //             Options
    //           </DropdownToggle>
    //           <DropdownMenu right>
    //             <DropdownItem>
    //               Option 1
    //             </DropdownItem>
    //             <DropdownItem>
    //               Option 2
    //             </DropdownItem>
    //             <DropdownItem divider />
    //             <DropdownItem>
    //               Reset
    //             </DropdownItem>
    //           </DropdownMenu>
    //         </UncontrolledDropdown>
    //       </Nav>
    //       <NavbarText>Simple Text</NavbarText>
    //     </Collapse>
    //   </Navbar>
    // </div>
//   );
// }

// export default Header;

import React, { useState } from 'react'
import Link from 'next/link'

// STYLE
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

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
                <Link href="/">
                    <NavbarBrand className='pointer port-navbar-brand'>
                        NEXTArie
                    </NavbarBrand>
                </Link>
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
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header