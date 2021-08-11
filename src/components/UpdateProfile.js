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
    const screenRef = useRef();
    const picRef = useRef();
    const { currentUser, updatePassword, updateEmail, updateProfile, updatePicture } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const userID = currentUser.uid;
    const document = db.collection('languages').doc(userID);
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    function handleUpdate(e) {
        e.preventDefault();

        const promises = [];
        setLoading('true');
        setError('');
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (screenRef.current.value !== currentUser.displayName) {
            promises.push(updateProfile(screenRef.current.value))
        }
        if (picRef.current.value !== currentUser.photoURL) {
            promises.push(updatePicture(picRef.current.value))
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
        if (screenRef.current.value === currentUser.displayName) {
            return setError('Choose a new display name')
        }
    }

    return (
        <div>
            <Card className="d-flex justify-content-center">
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div className="d-flex justify-content-center">
                        <Form className="w-50 text-center" onSubmit={handleUpdate}>
                            <Form.Group id="email">
                                <Form.Label><strong>Email</strong></Form.Label>
                                <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Display Name</strong></Form.Label>
                                <Form.Control type="text" ref={screenRef} defaultValue={currentUser.displayName} placeholder="Display Name"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Display Picture URL</strong></Form.Label>
                                <Form.Control type="text" ref={picRef} defaultValue={currentUser.photoURL} placeholder="Display Picture URL"></Form.Control>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label><strong>Password</strong></Form.Label>
                                <Form.Control type="password" ref={passwordRef} placeholder="Keep blank to remain the same" />
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label><strong>Password Confirmation</strong></Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} placeholder="Keep blank to remain the same" />
                            </Form.Group>
                            <div className="text-center">
                                <Button disabled={loading} className="w-40 mt-2" type="submit">Update Profile</Button>
                            </div>
                        </Form>
                    </div>
                    <Formik initialValues={{ languages: [] }} onSubmit={async (values) => {
                        await sleep(500);
                        document.set({
                            languages: values,
                            uid: `${currentUser.uid}`
                        }).then(() => {
                            history.push('/')
                        })
                        console.log(values)
                    }}>
                        {({ values, handleSubmit }) => (
                        <Form className="text-center mt-4" onSubmit={handleSubmit}>
                            <Form.Group>
                                <h4 className="mb-4">What languages do you want to learn?</h4>
                                <Form.Label className="me-1">Javascript-</Form.Label>
                                <Field className="me-1" type="checkbox" name="languages" value="Javascript"></Field>
                                <br />
                                <Form.Label className="me-1">Python-</Form.Label>
                                <Field className="me-1" type="checkbox" name="languages" value="Python"></Field>
                                <br />
                                <Form.Label className="me-1">Ruby-</Form.Label>
                                <Field className="me-1" type="checkbox" name="languages" value="Ruby"></Field>
                                <br />
                                <Form.Label className="me-1">Java-</Form.Label>
                                <Field className="me-1" type="checkbox" name="languages" value="Java"></Field>
                                <br />
                            </Form.Group>
                            <div className="text-center mt-2">
                                <Button type="submit">Submit Languages</Button>
                            </div>
                            {<pre>{JSON.stringify(values, null, 2)}</pre>}
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
