import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase'
import { Link, useHistory } from 'react-router-dom';
import { db } from '../firebase';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            auth.onAuthStateChanged((user) => {
                if (user) {
                    let uid = user.uid;
                    db.collection('userinfo').doc(`${uid}`).set({ 
                        languages: ["unset"],
                        uid: `${uid}`, //Working on establishing initial values
                        description: 'Please update profile',
                        userphoto: '',
                        displayname: '',
                        position: ''
                    }) 
                } else {
                    console.log("Error with signup")
                }
            })
            console.log('Document created!')
            history.push('/')
        } catch {
            console.log(error)
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div className="d-flex justify-content-center">
                        <Form className="w-50" onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100 mt-2" type="submit">Submit</Button>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/Login">Log In</Link>
            </div>
        </div>
    )
}
