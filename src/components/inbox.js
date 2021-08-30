import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Navbar, Nav, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';

function Inbox() {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const [loading, setLoading] = useState(false);
    const [timeInformation, setTimeInformation] = useState([]);
    const [recipientInformation, setRecipientInformation] = useState([]);
    const [messageInformation, setMessageInformation] = useState([]);
    const { currentUser } = useAuth();
    const userID = currentUser.uid;

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                setLoading(true);
                await sleep(500); //Sleep needed to slow things down
                const ref = db.collection('messages').doc(`${userID}`);
                const docs = await ref.get();
                let messageInfo = [];
                let recipientInfo = [];
                let timeInfo = [];
                [docs].forEach((doc) => { //Promise needs an array to push fetched info
                    let allData = doc.data();
                    timeInfo.push(allData.messageinfo.timestamp);
                    recipientInfo.push(allData.messageinfo.uid);
                    messageInfo.push(allData.messageinfo.messagecontent);
                });
                setMessageInformation(messageInfo);
                setTimeInformation(timeInfo);
                setRecipientInformation(recipientInfo);
            } catch (error) {
                console.log("error: ", error);
            }
        };
        const fetchUserInfo = async () => {
            try {
                setLoading(true);
                await sleep(500); //Sleep needed to slow things down
                const ref = db.collection('messages').doc(`${userID}`);
                const docs = await ref.get();
                let messageInfo = [];
                let recipientInfo = [];
                let timeInfo = [];
                [docs].forEach((doc) => { //Promise needs an array to push fetched info
                    let allData = doc.data();
                    timeInfo.push(allData.messageinfo.timestamp);
                    recipientInfo.push(allData.messageinfo.uid);
                    messageInfo.push(allData.messageinfo.messagecontent);
                });
                setMessageInformation(messageInfo);
                setTimeInformation(timeInfo);
                setRecipientInformation(recipientInfo);
            } catch (error) {
                console.log("error: ", error);
            }
        };
        fetchMessages();
        setLoading(false); //Set loading to false in order to allow async conditional loading of info in state
    }, [userID])

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
                    { loading ? "Loading..." : recipientInformation.map((i) => { //Conditionally rendering and listing of profile info
                                    return (
                                    <Card className="w-25">
                                        <h5>{i}</h5>
                                    </Card>
                                    )
                                }) }
                    </Col>
                    <Col xs="8">
                    <Card className="text-center">
                    <h4>
                    Message Content
                    </h4>
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
