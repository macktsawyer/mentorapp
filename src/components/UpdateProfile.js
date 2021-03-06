import React, { useRef, useState, useEffect } from 'react';
import { Form, Button, Card, Alert, Container, Row, Col } from 'react-bootstrap';
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
    const [proLoading, setProLoading] = useState(false);
    const [profileInfo, setProfileInfo] = useState('');
    const [userDesc, setUserDesc] = useState();
    const history = useHistory();
    const userID = currentUser.uid;
    const document = db.collection('userinfo').doc(userID);
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                setLoading('true');
                await sleep(1000); //Sleep needed to slow things down
                const ref = db.collection('userinfo').doc(`${userID}`);
                const docs = await ref.get();
                let memberInfo = [];
                [docs].forEach((doc) => { //Promise needs an array to push fetched info
                    let resultData = doc.data();
                    memberInfo.push(resultData);
                });
                setProfileInfo(memberInfo); //Set state to conditionally render later
                setUserDesc(memberInfo[0].description)
            } catch (error) {
                console.log("error: ", error);
            }
        };
        fetchInfo();
        setLoading('false'); //Set loading to false in order to allow async conditional loading of info in state
    }, [userID, profileInfo])

    function handleUpdate(e) {
        e.preventDefault();

        const promises = []; 
        setProLoading('true');
        setError('');
        if (emailRef.current.value !== currentUser.email) { //Ensure email isn't already being used
            promises.push(updateEmail(emailRef.current.value))
        }
        if (screenRef.current.value !== currentUser.displayName) { //Ensure display name isn't the same as current
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
        setProLoading('false'))
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }
        if (screenRef.current.value === currentUser.displayName) {
            return setError('Choose a new display name')
        }
    }

    return (
        <div>
            <Container className="w-100">
                <Row>
                    <Container className="w-50">
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
                                            <Button disabled={proLoading} className="w-40 mt-2" type="submit">Update Profile</Button>
                                        </div>
                                    </Form>
                                </div>
                            </Card.Body>
                        </Card>
                    </Container>
                    <Container className="w-50">
                        <Card>
                            <Card.Body> 
                                <Formik initialValues={{ languages: [], description: '', position: '' }} onSubmit={async (values) => {
                                    await sleep(500);
                                    document.set({ 
                                        languages: values.languages,  //Formik sets the db values as input by users
                                        uid: `${currentUser.uid}`,      // after having loaded them into initial values
                                        position: values.position,          // automagically by using pre-made onsubmit functions
                                        description: values.description,
                                        displayname: `${currentUser.displayName}`,
                                        userphoto: `${currentUser.photoURL}`
                                    }).then(() => {
                                        history.push('/') //Push dashboard upon update of info
                                    })
                                    console.log(values)
                                    }}>
                                    {({ values, handleSubmit }) => (
                                    <Form className="text-center mt-4" onSubmit={handleSubmit}>
                                        <Form.Group>
                                            <h4 className="mb-4">What languages do you want to learn?</h4>
                                            <Container>
                                                <Row>
                                                    <Col>
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
                                                    </Col>
                                                    <Col>
                                                        <Form.Label className="me-1">C-</Form.Label>
                                                        <Field className="me-1" type="checkbox" name="languages" value="C"></Field>
                                                        <br />
                                                        <Form.Label className="me-1">C++-</Form.Label>
                                                        <Field className="me-1" type="checkbox" name="languages" value="C++"></Field>
                                                        <br />
                                                        <Form.Label className="me-1">C#-</Form.Label>
                                                        <Field className="me-1" type="checkbox" name="languages" value="C#"></Field>
                                                        <br />
                                                        <Form.Label className="me-1">PHP-</Form.Label>
                                                        <Field className="me-1" type="checkbox" name="languages" value="PHP"></Field>
                                                        <br />
                                                    </Col>
                                                </Row>
                                                <br />
                                                <h4 className="mb-4">Are you a student, mentor or both?</h4>
                                                <Row>
                                                    <Col>
                                                    <Form.Label className="me-1">Student -</Form.Label>
                                                    <Field className="me-1" type="checkbox" name="position" value="student"></Field>
                                                    </Col>
                                                    <Col>
                                                    <Form.Label className="me-1">Mentor -</Form.Label>
                                                    <Field className="me-1" type="checkbox" name="position" value="mentor"></Field>
                                                    </Col>
                                                    <Col>
                                                    <Form.Label className="me-1">Both -</Form.Label>
                                                    <Field className="me-1" type="checkbox" name="position" value="both"></Field>
                                                    </Col>
                                                </Row>
                                                <br />
                                                <div>
                                                    {loading === false && <h5>Loading...</h5>}
                                                </div>
                                                <Row>
                                                <h4 className="mb-4">Tell us a bit about yourself!</h4>
                                                    <Form.Control as="textarea" 
                                                    id="description" 
                                                    maxLength="300" 
                                                    name="description" 
                                                    type="textarea" 
                                                    placeholder="Describe Yourself"
                                                    defaultValue={userDesc}>

                                                    </Form.Control>
                                                </Row>
                                            </Container>
                                        </Form.Group>
                                        <div className="text-center mt-2">
                                            <Button type="submit">Update Profile</Button>
                                        </div>
                                    </Form>
                                    )}
                                </Formik>
                            </Card.Body>
                        </Card>
                    </Container>
                </Row>
            </Container>
            <div className="w-100 text-center mt-2">
                <Link to="/dashboard">Cancel</Link>
            </div>
        </div>
    )
}
