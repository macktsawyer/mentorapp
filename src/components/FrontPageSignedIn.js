import React from 'react';
import { Button, Card, Nav, Navbar } from 'react-bootstrap';

export default function FrontPageSignedIn() {
    return (
        <div>
            <Navbar fixed="top" variant="pills" className="justify-content-end">
                <Nav.Item>
                    <Button className="me-3" href="/" variant="outline-info" to="/Dashboard">Dashboard</Button>
                </Nav.Item>
            </Navbar>
            <Card>
                <Card.Body>
                    Welcome lets get start this is just filler text for now but I am like super glad you are here like heck yeah lets
                    do this buddy
                    <Button href="/Signup" className="w-100 text-center mt-2">Get Started</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
