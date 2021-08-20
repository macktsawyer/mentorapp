import React, { useState, useEffect } from 'react';
import { Button, Card, Nav, Navbar, Container } from 'react-bootstrap';
import { db } from '../firebase';
import { useHistory, useLocation } from 'react-router-dom';

function Results() {
    const [searchResults, setSearchResults] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const userInfo = db.collection("userinfo");
    let searchCrit = location.state;
    let quickResults = userInfo.where("languages", "array-contains", searchCrit);

    // Needs useEffect to render API and needs conditional render like on Dashboard

    quickResults.get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data())
            setSearchResults(doc.data())
        })
    }).catch((error) => {
        console.log("Error: ", error)
    })

    useEffect(() => {
        // console.log(location)
        console.log(quickResults)
        console.log(searchResults)
    }, [location, quickResults, searchResults])

    return (
        <div>
            <Navbar fixed="top" variant="pills">
                <Container className="justify-content-end">
                        <Nav.Item>
                            <Button href="/Login" variant="outline-info" size="sm" className="ms-2" to="/Login">Login</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button href="/Signup" variant="outline-info" size="sm" className="ms-2" to="/Signup">Sign Up</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button href="/" variant="outline-info" size="sm" className="ms-2" to="/">Dashboard</Button>
                        </Nav.Item>
                </Container>
            </Navbar>
            <Card>
                { searchCrit }
                { searchResults } 
            </Card>
        </div>
    )
}

export default Results
