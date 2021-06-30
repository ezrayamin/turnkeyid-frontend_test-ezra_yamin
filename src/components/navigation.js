import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector } from 'react-redux'

import '../css/components/topnav.css'
import { LOGO, PROFPIC } from '../asset'
const TopNavigation = () => {
    const { username } = useSelector((state) => {
        return {
            username: state.user.username
        }
    })

    return (
        <div>
            <Navbar className="navbar" >
                <Navbar.Brand>
                    <Image src={LOGO.default} alt='logo' className="logo" />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-center" id="centers-container">
                    <Nav.Item>
                        <Nav.Link className="centers">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="centers">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="centers">Careers</Nav.Link>
                    </Nav.Item>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end" id="end-container">
                    {
                        username !== ''
                            ?
                            <>
                                <Navbar.Text>
                                    <div className="userGreetings-container">
                                        <h5>Hello, </h5>
                                        <h5 className="username">{username} </h5>
                                        <Image src={PROFPIC.default} alt='logo' className="profpic" roundedCircle />
                                    </div>
                                </Navbar.Text>
                            </>
                            :
                            <>
                                <Link to="/login">
                                    <Navbar.Text style={{ color: 'orange' }}>Log In <i className="fas fa-chevron-right" id="icon-right"></i></Navbar.Text>
                                </Link>
                            </>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}
export default TopNavigation