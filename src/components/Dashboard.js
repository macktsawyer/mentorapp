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
    const [userDesc, setUserDesc] = useState('');
    const userID = currentUser.uid;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                setLoading(true);
                await sleep(500); //Sleep needed to slow things down
                const ref = db.collection('userinfo').doc(`${userID}`);
                const docs = await ref.get();
                let langInfo = [];
                [docs].forEach((doc) => { //Promise needs an array to push fetched info
                    let langData = doc.data();
                    langInfo.push(langData.languages);
                    setUserDesc(langData.description);
                });
                setUserInfo(langInfo[0]); //Set state to conditionally render later
            } catch (error) {
                console.log("error: ", error);
            }
        };
        fetchInfo();
        setLoading(false); //Set loading to false in order to allow async conditional loading of info in state
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
                    <Button href="/front-page-logged" variant="outline-info" to="/front-page">Home</Button>
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
                        <h5 className="text-center mt-3">Languages I'm looking to learn:</h5>
                        <div className="text-center mt-3">
                            <div>
                                { loading ? "Loading..." : userInfo.map((i) => { //Conditionally rendering and listing of profile info
                                    return <li key={`${i}`} style ={{listStyle:'none'}}>{i}</li>
                                }) }
                                <br />
                                <h5>About me:</h5>
                                { userDesc }
                            </div>
                        </div>
                        <Link to="/update-profile" className="btn btn-primary w-100 mb-2 mt-4">Update Profile</Link>
                    </Card.Body>
                </Card>                
            </Container>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
