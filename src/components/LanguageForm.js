import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function LanguageForm() {
    const [languages, setLanguages] = useState();

    function handleLanguageChange(e) {
        e.preventDefault();

    }
    return (
        <div>
            <Form>
                <Form.Group id="language-group" className="mt-3">
                    <Form.Label>Programming Languages:</Form.Label>
                    <Form.Check type="checkbox" label="Javascript" />
                    <Form.Check type="checkbox" label="Python" />
                    <Form.Check type="checkbox" label="Ruby" />
                    <Form.Check type="checkbox" label="Java" />
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
            <Languages value={userLanguages} />
        </div>
    )
}
