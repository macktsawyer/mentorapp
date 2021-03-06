import React, { useState, useEffect } from 'react';
import { Button, Card, Nav, Navbar, Container, Row } from 'react-bootstrap';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

function Results() {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState();
    const location = useLocation();
    const { currentUser } = useAuth();
    const userInfo = db.collection("userinfo");
    const userID = currentUser.uid;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    let searchCrit = location.state;

    // Needs useEffect to render API and needs conditional render like on Dashboard

    useEffect(() => {
        const fetchInfo = async () => {
            setLoading(true);
            await sleep(1000); //Sleep needed to slow things down
            db.collection('userinfo')
            .where("languages", "array-contains", searchCrit)
            .onSnapshot((querySnapshot) => {
                let queryResults = [];
                querySnapshot.forEach((doc) => {
                    queryResults.push(doc.data())
                });
                setSearchResults(queryResults)
            });  
        };
        fetchInfo();
        setLoading(false); //Set loading to false in order to allow async conditional loading of info in state
    }, [userID, userInfo, searchCrit])

    return (
        <div>
            <Navbar fixed="top" variant="pills">
                <Container className="justify-content-end">
                    <Nav.Item>
                        <LinkContainer to="front-page-logged">
                        <Button variant="outline-info">Home</Button>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/dashboard">
                        <Button variant="outline-info">Dashboard</Button>
                        </LinkContainer>
                    </Nav.Item>
                </Container>
            </Navbar>
            <Card>
                { searchCrit }
                <Row> 
                { loading ? "Loading..." : searchResults.map((i) => { //Conditionally rendering and listing of profile info
                                    return (
                                    <Card className="text-center w-25">
                                        <div className="align-content-center justify-content-center"><img key={`${i.displayname}'s photo`} alt="display" style={{width: "50px", height: "50px"}} src={i.userphoto}></img></div>
                                        <h5 key={i.displayname}> {i.displayname} </h5>
                                        <p className="mt-2 mb-0">Looking to learn:</p>
                                        <li key={`${i.languages}`} style ={{listStyle:'none'}}>{i.languages.map((e) => {
                                            return (<li style={{listStyle:'none'}}><strong>{e}</strong></li>)
                                        })}</li>
                                        <p className="mt-2 mb-0">About this member:</p>
                                        <p key={`${i.displayname}'s description`}><strong>{i.description}</strong></p>
                                    </Card>
                                    )
                                }) }
                </Row>
            </Card>
        </div>
    )
}

export default Results
