import React from 'react'
import { Card, Col, Row, Navbar, Nav, Button } from 'react-bootstrap';
import { db } from '../firebase';

function Inbox() {
    return (
        <div>
            <Navbar fixed="top" variant="pills" className="me-2 justify-content-end">
                <Nav.Item className="ms-2 me-2 mb-2">
                    <Button href="/front-page-logged" variant="outline-info" to="/front-page">Home</Button>
                </Nav.Item>
            </Navbar>
            <h3>Inbox</h3>
            <Card>
                <Row>
                    <Col xs="4">
                    <Card>Message</Card>
                    </Col>
                    <Col xs="8">
                    <Card>Message Content</Card>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Inbox
