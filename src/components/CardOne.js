import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function CardOne() {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Card.Img>
                <Card.Body className="text-center">
                    As a mentor you are not only providing the help a student may need, but you are also working on credentials for your own future. We provide the means to add to your resume a reflection of your teaching rating and history.
                    <LinkContainer to="/signup">
                    <Button className="w-100 text-center mt-2">Get Started</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardOne
