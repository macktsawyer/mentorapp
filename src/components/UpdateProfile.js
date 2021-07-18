import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { store } from 'easy-peasy';

export default function UpdateProfile({forwardedRef}) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updatePassword, updateEmail } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleLanguage(e) {
        e.preventDefault();
        store.target.checked;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const promises = [];
        setLoading('true');
        setError('');
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
        setError('Failed to update account')}).finally(() =>
        setLoading('false'))

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Keep blank to remain the same" />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="Keep blank to remain the same" />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-2" type="submit">Update Profile</Button>
                    </Form>
                    <Form>
                        <Form.Group id="language-group" className="mt-3">
                            <Form.Label>Programming Languages:</Form.Label>
                            <Form.Check name="languageOne" value="javascript" type="checkbox" label="Javascript" />
                            <Form.Check value="python" type="checkbox" label="Python" />
                            <Form.Check value="ruby" type="checkbox" label="Ruby" />
                            <Form.Check value="java" type="checkbox" label="Java" />
                            <Button type="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link>
            </div>
        </div>
    )
}
