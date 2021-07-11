import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function FrontPage() {
    return (
        <div>
            <Card>
                <Card.Body>
                <Button className="w-100 text-center mt-2">Get Started</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
