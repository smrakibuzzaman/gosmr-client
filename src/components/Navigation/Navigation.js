import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import initializeAuthentication from '../../firebase/firebase.auth';
import useAuth from './../hooks/useAuth';
initializeAuthentication();

const Navigation = () => {
    const {user, logOut} = useAuth();
  
    return (
        <div>
              <Navbar   sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
            
            <Container>
            
            <Navbar.Brand href="#home">GoSMR Travel Booking</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/aboutUs">About Us</Nav.Link>
              <Nav.Link as={NavLink} to="/tourPackages">Tour Packages</Nav.Link>
              <Nav.Link as={NavLink} to="/myOrders">My Orders</Nav.Link>
              <Nav.Link as={NavLink} to="/manageAllOrders">Manage All Orders</Nav.Link>
              <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
              
             {user.email ? <Button onClick={logOut} variant="light">Logout</Button> : 
             <Nav.Link as={NavLink} to="/login">Login</Nav.Link>}
              <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">{user.displayName}</a>
              </Navbar.Text>
            </Navbar.Collapse>
            </Nav>
            </Container>
          </Navbar>
        </div>
    );
};

export default Navigation;