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
import Card from 'react-bootstrap/Card';

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        recruiter_name: '',
        job_title: '',
        email_received_at: '',
        opportunity_status: '4 - No Response',
        recruiter_company: '',
        job_location_city: '',
        job_location_type: '',
        job_duration: '',
        employment_type: '',
        pay_rate: '',
        job_description: '',
    });
 
    const submit = (e) => {
        e.preventDefault();
        console.log("yippe!")
        post(route('opportunities.store'));

    };
 
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Opportunities" />
            <Container className="mt-2">
                <Row className="m-4">
                    A bunch of recruiters think its okay to spam me  just because I have my profile up.  Even when I remove myself from their list, they add me back on!
                </Row>
                

                <Card>
                    <Card.Header>Create Opportunity</Card.Header>
                    <Card.Text>
                    <Form onSubmit={submit}>
                        <Row className="m-2">
                            <Col>
                                <Form.Group controlId="opportunityRecruiterName">
                                    <Form.Label>Recruiter Name</Form.Label>
                                    <Form.Control type="text" required 
                                        value={data.recruiter_name}
                                        onChange={e => setData('recruiter_name', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="opportunityJobTitle">
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control type="text" required 
                                        value={data.job_title}
                                        onChange={e => setData('job_title', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xl="3" lg="6">
                                <Form.Group className="mb-3" controlId="opportunityEmailRecieved">
                                    <Form.Label>Email Received Date</Form.Label>
                                    <Form.Control type="datetime-local" required 
                                        value={data.email_received_at}
                                        onChange={e => setData('email_received_at', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">Save Opportunity</Button>
                            </Col>
                        </Row>
                    </Form>
                    </Card.Text>
                </Card>

                

                <h1 className="mt-3">All Opportunities</h1>
                Add a table here of all opportunities later
                
            </Container>
        </AuthenticatedLayout>
    );
}