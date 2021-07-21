import React, { useState } from 'react';
import { Card, Button, Alert, Navbar, Nav } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from "react-router-dom";


export default function Dashboard() {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    // Function to handle logout
    async function handleLogout() {
        setError('')

        try {
            await logout();
            history.push('/front-page')
        } catch {
            setError('Failed to log out');
        }
    }

    return (
        <>
            <Navbar fixed="top" variant="pills" className="me-2 justify-content-end">
                <Nav.Item>
                    <Button href="/front-page" variant="outline-info" to="/front-page">Home</Button>
                </Nav.Item>
            </Navbar>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <h5 className="mt-3">Languages I'm looking to learn:</h5>
                    <div className="text-center mt-3">
                        
                    </div>
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
