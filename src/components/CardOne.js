import React from 'react'
import { Button, Card } from 'react-bootstrap';

function CardOne() {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Card.Img>
                <Card.Body>
                    Welcome lets get start this is just filler text for now but I am like super glad you are here like heck yeah lets
                    do this buddy
                    <Button href="/Signup" className="w-100 text-center mt-2">Get Started</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardOne
