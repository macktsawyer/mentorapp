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
                <Card className="mb-4">
                    <Card.Body className="mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra in magna a auctor. Sed eu risus tincidunt, mattis ipsum eu, ultrices lacus. Duis ullamcorper metus arcu. Nullam vel lacus nec eros egestas sollicitudin. Etiam eget dui sit amet nisi varius aliquam non in lorem. Vivamus rhoncus quis ante vitae fringilla. Proin odio enim, euismod sit amet viverra ac, laoreet ac felis.

                        Quisque tempor augue ut lacus malesuada aliquam ac nec leo. Suspendisse consectetur libero elit, quis lacinia urna congue vitae. Donec eu viverra enim, vitae tincidunt libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod odio nec mauris varius rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse mattis, erat ut malesuada convallis, enim mi suscipit nisi, ac congue lacus nisi id justo. Aenean purus velit, scelerisque nec dui vitae, auctor volutpat augue. Vivamus laoreet neque id nisl tincidunt mollis.

                        Nulla varius fermentum malesuada. Mauris non hendrerit lacus. Morbi condimentum est nec ex viverra elementum. Praesent eget justo turpis. Nunc et felis facilisis, sodales velit id, volutpat sem. Fusce bibendum iaculis ornare. Nam ac libero ultrices, consequat ex nec, lacinia felis. Nunc fringilla enim a rhoncus convallis.
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
