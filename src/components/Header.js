import React, { useState } from 'react'
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'

import Logo from '../pictures/Logo3.png'



export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  function navbarToggler() {
    setIsOpen(!isOpen)
  }

    return (


  <Navbar
    className="header"
    color="dark"
    dark
    expand="md"
    fixed="top"
  >
    <NavbarBrand className="p-0 my-n2">
      <Link to="/"><img src={Logo}/></Link>
      
    </NavbarBrand>
    <NavbarToggler onClick={navbarToggler}/>
    <Collapse isOpen={isOpen} navbar>
      <Nav
        className="ml-auto"
        navbar
      >
        <NavItem>
          {/* <NavLink> */}
            <Link className="nav-link" to="/about">About</Link>
            
          {/* </NavLink> */}
        </NavItem>
        <NavItem>
        {/* <NavLink> */}
            <Link className="nav-link" to="/contact">Contact</Link>
            
          {/* </NavLink> */}
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
          className="nav-link"
        >
          <DropdownToggle
            className="p-0"
            caret
            nav
          >
            Contact
          </DropdownToggle>

          {/* <a className="m-2 footer-a text-white h1" target="_blank" href="https://twitter.com/lherajt"><FontAwesomeIcon className="footer-link" icon={faTwitterSquare}></FontAwesomeIcon></a>
                        <a className="m-2 footer-a text-white h1" target="_blank" href="https://github.com/Lherajt"><FontAwesomeIcon className="footer-link" icon={faGithubSquare}></FontAwesomeIcon></a>
                        <a className="m-2 footer-a text-white h1" href="mailto:lherajt@gmail.com"><FontAwesomeIcon className="footer-link" icon={faEnvelopeSquare}></FontAwesomeIcon></a>
                        <a className="m-2 footer-a text-white h1" target="_blank" href="tel:201-640-7892"><FontAwesomeIcon className="footer-link" icon={faPhoneSquare}></FontAwesomeIcon></a>
                        <a className="m-2 footer-a text-white h1" target="_blank" href="https://www.linkedin.com/in/lukasherajt"><FontAwesomeIcon className="footer-link" icon={faLinkedin}></FontAwesomeIcon></a> */}

          <DropdownMenu right>
            <DropdownItem className="text-center text-dark">
            <a className="h1 text-dark h-100 m-0" target="_blank" href="https://twitter.com/lherajt"><FontAwesomeIcon className="h-100 align-middle" icon={faTwitterSquare}></FontAwesomeIcon></a>
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>




    )
}
