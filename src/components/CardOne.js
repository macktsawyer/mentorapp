import React from 'react'
import { Card } from 'react-bootstrap';

function CardOne() {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></Card.Img>
                <Card.Body className="text-center">
                    As a mentor you are not only providing the help a student may need, but you are also working on credentials for your own future. We provide the means to add to your resume a reflection of your teaching rating and history.
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardOne
