import React, { Component } from 'react'
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'
import { Link } from 'react-router-dom'

import Logo from '../pictures/Logo3.png'



export default function Header() {
    return (

        // <div className="header">
  <Navbar
    className="header"
    color="dark"
    dark
    expand="md"
    fixed="top"
    // light
  >
    <NavbarBrand className="p-0 my-n2">
      <Link to="/"><img src={Logo}/></Link>
      
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="ml-auto"
        navbar
      >
        <NavItem>
          <NavLink>
            <Link to="/about">About</Link>
            
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink>
            <Link to="/contact">Contact</Link>
            
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
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
// </div>

   
    )
}
