import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Field } from 'formik';
import { db } from '../firebase';


export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updatePassword, updateEmail } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    function handleUpdate(e) {
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
                    <Form onSubmit={handleUpdate}>
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
                    <Formik initialValues={{ languages: [] }} onSubmit={async (values) => {
                        await sleep(500);
                        db.collection('languages').add(values);
                        console.log(values)
                    }}>
                        {({ values, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label className="me-1">Javascript-</Form.Label>
                                <Field className="me-1" type="checkbox" name="languages" value="Javascript"></Field>
                                <Form.Label className="me-1">Python-</Form.Label>
                                <Field className="me-1" type="checkbox" name="languages" value="Python"></Field>
                                <Form.Label className="me-1">Ruby-</Form.Label>
                                <Field className="me-1" type="checkbox" name="languages" value="Ruby"></Field>
                                <Form.Label className="me-1">Java-</Form.Label>
                                <Field className="me-1" type="checkbox" name="languages" value="Java"></Field>
                            </Form.Group>
                            <div>{values.picked}</div>
                            <Button type="submit">Submit</Button>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                        </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link>
            </div>
        </div>
    )
}
