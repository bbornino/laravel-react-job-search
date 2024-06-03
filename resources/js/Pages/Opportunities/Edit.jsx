import React, {Component, useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


export default function Edit({ auth, opportunity }) {
    const { data, setData, patch, processing, reset, errors } = useForm({
        recruiter_name: opportunity.recruiter_name,
        opportunity_status: opportunity.opportunity_status,
        recruiter_company: opportunity.recruiter_company == null ? '': opportunity.recruiter_company,
        job_title: opportunity.job_title,
        email_received_at: opportunity.email_received_at,
        employment_type: opportunity.employment_type == null ? 'Contract': opportunity.employment_type,
        job_duration: opportunity.job_duration == null ? '': opportunity.job_duration,
        pay_rate: opportunity.pay_rate == null ? '': opportunity.pay_rate,
        job_location_type: opportunity.job_location_type == null ? 'On-Site': opportunity.job_location_type,
        job_location_city: opportunity.job_location_city == null ? '': opportunity.job_location_city,
        job_description: opportunity.job_description == null ? '': opportunity.job_description,
        id: opportunity.id,
    });

    const submit = (e) => {
        e.preventDefault();
        console.log("yippe!")
        patch(route('opportunities.update', opportunity.id));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Opportunity" />
            <Container className="mt-2">
                <Form onSubmit={submit} >

                    <Row>
                        <Col>
                            <h4>Edit Emailed Opportunity</h4>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                            <Button variant="primary" type="submit" className="d-flex align-items-center " >Save Opportunity</Button>
                        </Col>
                    </Row>
                    <Row >
                        <Col xl="3" md="6" className="mt-3">
                            <Form.Group controlId="RecruiterName">
                                <Form.Label>Recruiter Name</Form.Label>
                                <Form.Control type="text" 
                                    value={data.recruiter_name}
                                    onChange={e => setData('recruiter_name', e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col xl="3" md="6" className="mt-3">
                            <Form.Group controlId="RecruiterCompany">
                                <Form.Label>Recruiter Company</Form.Label>
                                <Form.Control type="text" required
                                    value={data.recruiter_company}
                                    onChange={e => setData('recruiter_company', e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col xl="3" md="6" className="mt-3">
                            <Form.Group controlId="opportunityStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Select aria-label="Opportunity Status"
                                        value={data.opportunity_status}
                                        onChange={e => setData('opportunity_status', e.target.value)}>
                                    <option>Open this select menu</option>
                                    <option value="4 - No Response">4 - No Response</option>
                                    <option value="3 - Rejected">3 - Rejected</option>
                                    <option value="2 - Awaiting Feedback">2 - Awaiting Feedback</option>
                                    <option value="1 - Actively Engaged">1 - Actively Engaged</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xl="3" md="6" className="mt-3">
                            <Form.Group controlId="opportunityEmailRecieved">
                                <Form.Label>Email Received Date</Form.Label>
                                <Form.Control type="datetime-local" required 
                                    value={data.email_received_at}
                                    onChange={e => setData('email_received_at', e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="6" md="12" className="mt-3">
                            <Form.Group controlId="opportunityJobTitle">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control type="text" required 
                                    value={data.job_title}
                                    onChange={e => setData('job_title', e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col xl="2" md="4" className="mt-3">
                            <Form.Group controlId="opportunityEmploymentType">
                                <Form.Label>Employment Type</Form.Label>
                                <Form.Select aria-label="Employment Type" required
                                        value={data.employment_type}
                                        onChange={e => setData('employment_type', e.target.value)}>
                                    <option value="Contract">Contract</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Freelance">Freelance</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xl="4" md="8" className="mt-3">
                            <Form.Group controlId="opportunityContractDuration">
                                <Form.Label>Contract Duration</Form.Label>
                                <Form.Control type="text" required value={data.job_duration}
                                    onChange={e => setData('job_duration', e.target.value)}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="6" md="12" className="mt-3">
                            <Form.Group controlId="opportunityPayRate">
                                <Form.Label>Pay Rate</Form.Label>
                                <Form.Control type="text" required 
                                    aria-label="Pay Rate" 
                                    value={data.pay_rate}
                                    onChange={e => setData('pay_rate', e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col xl="2" md="4" className="mt-3">
                            <Form.Group controlId="opportunityLocationType">
                                <Form.Label>Location Type</Form.Label>
                                <Form.Select aria-label="Location Type" required
                                        value={data.job_location_type}
                                        onChange={e => setData('job_location_type', e.target.value)}>
                                    <option value="On-Site">On-Site</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Remote">Remote</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xl="4" md="8" className="mt-3">
                            <Form.Group controlId="opportunityLocationCity">
                                <Form.Label>Location City</Form.Label>
                                <Form.Control type="text" 
                                    aria-label="Location Type" 
                                    required value={data.job_location_city}
                                    onChange={e => setData('job_location_city', e.target.value)}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group className="mb-3" controlId="opportunityJobDescription">
                                <Form.Label>Job Description</Form.Label>
                                <Form.Control as="textarea" rows={20} 
                                    aria-label="Job Description" 
                                    required value={data.job_description}
                                    onChange={e => setData('job_description', e.target.value)}/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </AuthenticatedLayout>
    );

}

