import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import DateTimeField from "react-bootstrap-datetimepicker";

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });
 
    const submit = (e) => {
        e.preventDefault();
        console.log("yikes!")
        // debugger
        // post(route('opportunities.create'), { onSuccess: () => reset() });
        // post(route('opportunities.create'), { onSuccess: () => reset() });
        get(route('opportunities.create'));
        // post(route('opportunities.create'));        // post not supported for create
        // post(route('opportunities.store'));
    };
 
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Opportunities - Create" />
            <Container className="mt-2">
                <h1>Create Opportunity</h1>
                <Form onSubmit={submit}>
                    <Button variant="primary" type="submit">Save Opportunity</Button>
                    <Row>
                        <Col xl="3" lg="6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Recruiter Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col xl="3" lg="6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Recruiter Company</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col xl="3" lg="6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Status</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="4 - No Response">4 - No Response</option>
                                    <option value="3 - Rejected">3 - Rejected</option>
                                    <option value="2 - Awaiting Feedback">2 - Awaiting Feedback</option>
                                    <option value="1 - Actively Engaged">1 - Actively Engaged</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xl="3" lg="6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Received</Form.Label>
                                <Form.Control type="datetime-local" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Job Description</Form.Label>
                                <Form.Control as="textarea" rows={20} />
                            </Form.Group>
                        </Col>
                    </Row>
                
                </Form>
                
                Hello World I get to be a girl today!
            </Container>
        </AuthenticatedLayout>
    );
}