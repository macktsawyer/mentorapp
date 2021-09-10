import React, { useState, useEffect } from 'react';
import { Button, Card, Nav, Navbar, Container } from 'react-bootstrap';
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
                { loading ? "Loading..." : searchResults.map((i) => { //Conditionally rendering and listing of profile info
                                    return (
                                    <Card className="w-25">
                                        <img key={`${i.displayname}'s photo`} alt="display" style={{width: "50px", height: "50px"}} src={i.userphoto}></img>
                                        <h5 key={i.displayname}> {i.displayname} </h5>
                                        <li key={`${i.languages}`} style ={{listStyle:'none'}}>{i.languages}</li>
                                        <p key={`${i.displayname}'s description`}>{i.description}</p>
                                    </Card>
                                    )
                                }) }
            </Card>
        </div>
    )
}

export default Results
