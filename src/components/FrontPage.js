import React from 'react';
import { Button, Card, Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CardOne from './CardOne';
import './FrontPage.scss';

export default function FrontPage() {

    return (
        <div>
            <Navbar fixed="top" variant="pills" className="w-100 align-items-center">
                <Container>
                    <Navbar.Brand className="mb-2" href="">MentorShip</Navbar.Brand>
                </Container>
                <Container className="justify-content-end">
                    <Nav.Item>
                        <LinkContainer to="/login">
                            <Button variant="outline-info" size="sm" className="ms-2 me-2 mb-2" >Login</Button>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/signup">
                        <Button variant="outline-info" size="sm" className="ms-1 me-4 mb-2">Sign Up</Button>
                        </LinkContainer>
                    </Nav.Item>
                </Container>
            </Navbar>
            <Container>
                <Card className="d-flex text-center mb-4 justify-content-center align-items-center">
                    <Card.Body className="mb-1 w-75">
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
                            <Card.Body className="text-center">
                            Students not only have the opportunity to broaden their knowledge but the student will objectively be able to quantify some of their learning experience through their lessons and student rating. 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="text-center justify-content-center align-items-center">
            <LinkContainer to="/signup"> 
                <Button href="/Signup" className="w-50 text-center mt-2">Get Started</Button>
            </LinkContainer>
            </div>
        </div>
    )
}
