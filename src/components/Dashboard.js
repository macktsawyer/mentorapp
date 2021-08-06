import React, { useState, useEffect } from 'react';
import { Card, Button, Alert, Navbar, Nav, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from "react-router-dom";
import { db } from '../firebase';


export default function Dashboard() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    const [userInfo, setUserInfo] = useState([]);
    const userID = currentUser.uid;

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                setLoading(true);
                // const ref = db.collection('languages').doc;
                // const docs = await ref.get();
                // let langInfo = [];
                // [docs].forEach((doc) => {
                //     const langData = doc.data();
                //     langInfo.push(langData);
                // });
                await db.collection('language').get().then((querySnapshot) =>
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                    setUserInfo(doc.data());
                    console.log(userInfo);
                }))
            } catch (error) {
                console.log("error: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchInfo();
    }, [userID, userInfo])

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
            <Container className="d-flex justify-content-center">
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">{currentUser.displayName}'s Profile</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <div className="d-flex justify-content-center">
                            <img alt="display" className="justify-content-center mb-2" style={{height: "50px"}} src={currentUser.photoURL}></img>
                        </div>
                        <br />
                        <strong className="mt-2">Email:</strong> {currentUser.email}
                        <br />
                        <strong>Display Name: </strong> {currentUser.displayName}
                        <h5 className="mt-3">Languages I'm looking to learn:</h5>
                        <div className="text-center mt-3">
                            <div>
                                {!loading && userInfo}
                            </div>
                        </div>
                        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                    </Card.Body>
                </Card>                
            </Container>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
