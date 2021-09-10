import React, { useState } from 'react';
import { Button, Card, Nav, Navbar, Container, Row, Col, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import CardOne from './CardOne';
import './FrontPage.scss';

export default function FrontPageLogged() {
    const [ searchValue, setSearchValue ] = useState('');
    const history = useHistory();

    function handleSearchChange(e) {
        console.log(e)
        setSearchValue(e.target.value); //Store search state
    }

    function handleSearch() {
        console.log("Searching for: ", searchValue)
        history.push({
            pathname: '/results',
            search: searchValue, //Pass search query
            state: searchValue
        })
    }

    return (
        <div>
            <Navbar fixed="top" variant="pills" className="w-100 align-items-center">
                <Container>
                    <Navbar.Brand className="mb-2" href=""><h5>MentorShip</h5></Navbar.Brand>
                </Container>
                <Container fixed="top" className="d-flex justify-content-center">
                    <Form className="align-items-center w-100" onSubmit={handleSearch}>
                        <div className="d-flex">
                            <Form.Label className="mt-2 w-50"><h5>What I would like to learn:</h5></Form.Label>
                            <Form.Control 
                                className="w-50"
                                as="select"
                                value={searchValue}
                                onChange={handleSearchChange}>
                                <option>\/ Open to select language \/</option>
                                <option value="Javascript">Javascript</option>
                                <option value="Ruby">Ruby</option>
                                <option value="C">C</option>
                                <option value="C++">C++</option>
                                <option value="C#">C#</option>
                                <option value="Java">Java</option>
                                <option value="Python">Python</option>
                                <option value="PHP">PHP</option>
                            </Form.Control>
                            <Button variant="outline-info" type="submit">Go!</Button>
                        </div>
                    </Form>
                </Container>
                <Container className="justify-content-end">
                    <Nav.Item>
                        <LinkContainer to="/dashboard">
                            <Button variant="outline-info" size="sm">Dashboard</Button>
                        </LinkContainer>
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
                                <LinkContainer to="/signup"> 
                                <Button href="/Signup" className="w-100 text-center mt-2">Get Started</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
