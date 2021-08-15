import React from 'react';
import { Button, Card, Nav, Navbar, Container, Row, Col, InputGroup, FormControl, Form } from 'react-bootstrap';
import CardOne from './CardOne';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import './FrontPage.scss';

export default function FrontPage() {
    const history = useHistory();

    return (
        <div>
            <Navbar fixed="top" variant="pills" className="w-100 align-items-center">
                <Formik
                initialValues={{
                    search: '',
                }}
                onSubmit={async (values) => {
                    history.push('/results')
                }}
                >
                <Form>
                    <Container>
                        <Navbar.Brand className="mb-2" href="">MentorShip</Navbar.Brand>
                    </Container>
                    <Container fixed="top" className="d-flex justify-content-center">
                        <InputGroup id="search" name="search" placeholder="Search for users" className="mb-3 mt-2">
                            <Button variant="outline-info" id="button-addon1">
                            Search
                            </Button>
                            <FormControl
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Container>
                </Form>
                </Formik>
                <Container className="justify-content-end">
                    <Nav.Item>
                        <Button href="/Login" variant="outline-info" size="sm" className="ms-2 me-2 mb-2" to="/Login">Login</Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button href="/Signup" variant="outline-info" size="sm" className="ms-1 me-4 mb-2" to="/Signup">Sign Up</Button>
                    </Nav.Item>
                </Container>
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
                            <Card.Body className="text-center">
                            Students not only have the opportunity to broaden their knowledge but the student will objectively be able to quantify some of their learning experience through their lessons and student rating. 
                                <Button href="/Signup" className="w-100 text-center mt-2">Get Started</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
