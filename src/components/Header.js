import React, { useState } from 'react'
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

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
      <Link to="/"><img src={Logo} /></Link>
      
    </NavbarBrand>
    <NavbarToggler onClick={navbarToggler}/>
    <Collapse isOpen={isOpen} navbar>
      <Nav
        className="ml-auto"
        navbar
      >
        

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


          <DropdownMenu right>
            <DropdownItem className="text-center nav-contact-link">
            <a className="h1 text-dark h-100 m-0" target="_blank" href="https://twitter.com/lherajt"><FontAwesomeIcon className="h-100 align-middle" icon={faTwitterSquare}></FontAwesomeIcon></a>
            </DropdownItem>
            <DropdownItem className="text-center">
            <a className="h1 text-dark h-100 m-0" target="_blank" href="https://github.com/Lherajt"><FontAwesomeIcon className="h-100 align-middle" icon={faGithubSquare}></FontAwesomeIcon></a>
            </DropdownItem>
            <DropdownItem className="text-center">
            <a className="h1 text-dark h-100 m-0" target="_blank" href="mailto:lherajt@gmail.com"><FontAwesomeIcon className="h-100 align-middle" icon={faEnvelopeSquare}></FontAwesomeIcon></a>
            </DropdownItem>
            <DropdownItem className="text-center">
            <a className="h1 text-dark h-100 m-0" target="_blank" href="tel:201-640-7892"><FontAwesomeIcon className="h-100 align-middle" icon={faPhoneSquare}></FontAwesomeIcon></a>
            </DropdownItem>
            <DropdownItem className="text-center">
            <a className="h1 text-dark h-100 m-0" target="_blank" href="https://www.linkedin.com/in/lukasherajt"><FontAwesomeIcon className="h-100 align-middle" icon={faLinkedin}></FontAwesomeIcon></a>
            </DropdownItem>

          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>

            <Link className="nav-link" to="/about">About</Link>
            

        </NavItem>
      </Nav>
     
    </Collapse>
  </Navbar>




    )
}
