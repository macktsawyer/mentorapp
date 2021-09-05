import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Navbar, Nav, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import DisplayedMessages from './DisplayedMessages';

function Inbox() {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const [loading, setLoading] = useState(false);
    const [partnerUID, setPartnerUID] = useState();
    const [partners, setPartners] = useState([]);
    const { currentUser } = useAuth();
    const userID = currentUser.uid;    

    useEffect(() => {
        const fetchDisplay = async (partnerUID) => {
            try {
                setLoading(true);
                await sleep(2000); //Sleep needed to slow things down
                let queryResults = [];
                for (let i of partnerUID) {
                    db.collection('userinfo') // Search for document of specific users as found in fetch messages
                    .where("uid", "==", i)
                    .get()
                    .then((querySnapshot) => {
                        let quickSnapshot = [];
                        querySnapshot.forEach((doc) => {
                            quickSnapshot.push(doc.data())
                        })
                        queryResults.push(quickSnapshot[0].displayname) // Add users to a list of users who have message currentUser
                    })
                setPartners(queryResults)
                }
            } catch (error) {
                console.log("error: ", error);
            }
            setLoading(false)
        };
        const fetchMessages = async () => {
            try {
                setLoading(true);
                await sleep(2000); //Sleep needed to slow things down
                const ref = db.collection('messages').doc(`${userID}`);
                const docs = await ref.get();
                let messageInfo = [];
                [docs].forEach((doc) => { //Promise needs an array to push fetched info
                    let messageData = doc.data();
                    for (let i in messageData) {
                        messageInfo.push(i)
                    }
                });
                setPartnerUID(messageInfo)
            } catch (error) {
                console.log("error: ", error);
            }
        };
        fetchMessages();
        if (partnerUID) {
            fetchDisplay(partnerUID)
        }
        setLoading(false); //Set loading to false in order to allow async conditional loading of info in state
    }, [userID, partnerUID, partners, loading])

    return (
        <div>
            <Navbar fixed="top" variant="pills" className="me-2 justify-content-end">
                <Nav.Item className="ms-2 me-2 mb-2">
                    <Button href="/front-page-logged" variant="outline-info" to="/front-page">Home</Button>
                </Nav.Item>
            </Navbar>
            <h3 className="text-center">Inbox</h3>
            <Card>
                <Row>
                    <Col xs="4">
                    <Card className="text-center"><h4>Messages</h4></Card>
                    { loading ? "Loading..." : partners.map((i) => { //Conditionally rendering and listing of message partners
                                    return (
                                    <Card key={i} className="text-center justify-content-center mt-2 h-50 w-100">
                                        <h5 key={i.id}> {i} </h5>
                                    </Card>
                                    )
                                }) }
                    </Col>
                    <Col xs="8">
                    <Card className="text-center">
                    <h4>
                    Message Content
                    </h4>
                    < DisplayedMessages />
                    <Card>
                    <InputGroup fixed="bottom">
                        <FormControl placeholder="Send a new message" />
                        <Button variant="outline-secondary">Send</Button>
                    </InputGroup>
                    </Card>
                    </Card>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Inbox
