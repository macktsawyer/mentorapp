import React, { useState, useEffect } from 'react';
import { Button, Card, Nav, Navbar, Container } from 'react-bootstrap';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { useLocation } from 'react-router-dom';

function Results() {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState();
    const location = useLocation();
    const { currentUser } = useAuth();
    const userInfo = db.collection("userinfo");
    const userID = currentUser.uid;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    let searchCrit = location.state;
    let quickResults = userInfo.where("languages", "array-contains", searchCrit);

    // Needs useEffect to render API and needs conditional render like on Dashboard

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                setLoading(true);
                await sleep(500); //Sleep needed to slow things down
                const ref = db.collection('userinfo').doc(`${userID}`);
                const docs = await ref.get();
                let resultInfo = [];
                [docs].forEach((doc) => { //Promise needs an array to push fetched info
                    let resultData = doc.data();
                    resultInfo.push(resultData.languages);
                });
                setSearchResults(resultInfo[0]); //Set state to conditionally render later
            } catch (error) {
                console.log("error: ", error);
            }
        };
        fetchInfo();
        setLoading(false); //Set loading to false in order to allow async conditional loading of info in state
    }, [userID, userInfo])


    // quickResults.get()
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.id, " => ", doc.data())
    //         setSearchResults(doc.data())
    //     })
    // }).catch((error) => {
    //     console.log("Error: ", error)
    // })

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
                { loading ? "Loading..." : searchResults.map((i) => { //Conditionally rendering and listing of profile info
                                    return <li key={`${i}`} style ={{listStyle:'none'}}>{i}</li>
                                }) }
            </Card>
        </div>
    )
}

export default Results
