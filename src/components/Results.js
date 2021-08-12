import React from 'react';
import { Button, Card, Nav, Navbar, Container } from 'react-bootstrap';

function Results() {
    return (
        <div>
            <Navbar fixed="top" variant="pills">
                <Container className="justify-content-end">
                        <Nav.Item>
                            <Button href="/Login" variant="outline-info" size="sm" className="ms-2" to="/Login">Login</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button href="/Signup" variant="outline-info" size="sm" className="ms-2" to="/Signup">Sign Up</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button href="/" variant="outline-info" size="sm" className="ms-2" to="/">Dashboard</Button>
                        </Nav.Item>
                </Container>
            </Navbar>
            <Card>

            </Card>
        </div>
    )
}

export default Results
