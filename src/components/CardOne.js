import React from 'react'
import { Button, Card } from 'react-bootstrap';

function CardOne() {
    return (
        <div>
            <Card style = {{ width: 500 }}>
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
