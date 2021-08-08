import React from 'react';
import { Button, Card, Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import CardOne from './CardOne';
import './FrontPage.scss';

export default function FrontPage() {
    return (
        <div>
            <Navbar fixed="top" variant="pills" className="justify-content-end">
                <Nav.Item>
                    <Button href="/Login" variant="outline-info" size="sm" className="ms-2 me-3" to="/Login">Login</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button href="/Signup" variant="outline-info" size="sm" className="ms-2 me-3" to="/Signup">Sign Up</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button href="/" variant="outline-info" size="sm" className="ms-2 me-3" to="/">Dashboard</Button>
                </Nav.Item>
            </Navbar>
            <Container>
                <Card className="text-center mb-4">
                    <Card.Body className="mb-1">
                        Learning to program is difficult. You don't have to do it alone. Often we may seek help only to be told to find our answers on Google. While it is true that we need to develop the skills to problem solve, some answers cannot be found on StackOverflow alone. Sometimes we need a guiding and helping hand.
                    </Card.Body>
                </Card>
            </Container>
            <Container id="cardContainer">
                <Row>
                    <Col>
                        < CardOne />
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Card.Img>
                            <Card.Body>
                                Welcome lets get start this is just filler text for now but I am like super glad you are here like heck yeah lets
                                do this buddy
                                <Button href="/Signup" className="w-100 text-center mt-2">Get Started</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
