import React, { useState } from 'react';
import { Button, Card, Nav, Navbar, Container, Row, Col, InputGroup, Form, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import CardOne from './CardOne';
import './FrontPage.scss';

export default function FrontPageLogged() {
    const [ searchValue, setSearchValue ] = useState('');
    const history = useHistory();

    function handleSearchChange(e) {
        console.log(e)
        setSearchValue(e.target.value);
    }

    function handleSearch() {
        console.log("Searching for: ", searchValue)
        history.push({
            pathname: '/results',
            search: searchValue,
            state: searchValue
        })
    }

    return (
        <div>
            <Navbar fixed="top" variant="pills" className="w-100 align-items-center">
                <Container>
                    <Navbar.Brand className="mb-2" href="">MentorShip</Navbar.Brand>
                </Container>
                <Container fixed="top" className="d-flex justify-content-center w-100">
                    <Form onSubmit={handleSearch}>
                        <InputGroup id="search" name="search" className="mb-3 mt-2">
                            <Button variant="outline-info" id="button-addon1">
                            Search
                            </Button>
                            <FormControl
                            type="search"
                            placeholder="Search for users"
                            onChange = {handleSearchChange}
                            value={searchValue}
                            />
                        </InputGroup>
                    </Form>
                </Container>
                <Container className="justify-content-end">
                    <Nav.Item>
                        <Button href="/" variant="outline-info" size="sm" className="" to="/">Dashboard</Button>
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
