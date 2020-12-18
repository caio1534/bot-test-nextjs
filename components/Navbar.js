import React from "react"
import Link from 'next/link'
import Icon from '../public/Icon'
import { Nav, BrandName, BrandIcon, NavLink } from '../styles/styles'

function Navbar() {
    return (
        <div>
            <Nav className='px-10' bg="light" expand="lg">
                <Link className='d-flex align-items-center justify-content-center navBrand' href="/">
                    <BrandIcon size='navIcon mr-2' />
                    <BrandName>FizzBuzzer Bot</BrandName>
                </Link>

                <NavLink><Link to="/whatisfizzbuzzerbot">What is FizzBuzz?</Link></NavLink>
                <NavLink><Link to="/aboutme">About Me</Link></NavLink>
            </Nav>
        </div>
    );
}

export default Navbar;