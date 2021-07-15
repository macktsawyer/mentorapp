import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function LanguageForm() {
    const [languages, setLanguages] = useState();

    function handleLanguageChange(e) {
        this.setLanguage(e.target.value)
    }
    
    return (
        <div>
            <Form>
                <Form.Group id="language-group" className="mt-3">
                    <Form.Label>Programming Languages:</Form.Label>
                    <Form.Check value="javascript" type="checkbox" label="Javascript" />
                    <Form.Check value="python" type="checkbox" label="Python" />
                    <Form.Check value="ruby" type="checkbox" label="Ruby" />
                    <Form.Check value="java" type="checkbox" label="Java" />
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
            <Languages value={userLanguages} />
        </div>
    )
}
