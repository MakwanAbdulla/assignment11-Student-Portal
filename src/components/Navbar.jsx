import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React from "react";
import "../styles/navbar.css";

export default function NavigationBar() {
    return (
        <div className="navbar">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Student Portal
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/courses">
                            Courses
                        </Nav.Link>

                        <Nav.Link as={Link} to="/news">
                            News
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
