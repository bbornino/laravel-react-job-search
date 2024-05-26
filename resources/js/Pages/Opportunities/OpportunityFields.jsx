import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class OpportunityFields extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xl="3" lg="6">
                        <Form.Group className="mb-3" controlId="opportunityRecruiterName">
                            <Form.Label>Recruiter Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col xl="3" lg="6">
                        <Form.Group className="mb-3" controlId="opportunityRecruiterCompany">
                            <Form.Label>Recruiter Company</Form.Label>
                            <Form.Control type="text"  />
                        </Form.Group>
                    </Col>
                    <Col xl="3" lg="6">
                        <Form.Group className="mb-3" controlId="opportunityStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Select aria-label="Opportunity Status">
                                <option value="4 - No Response">4 - No Response</option>
                                <option value="3 - Rejected">3 - Rejected</option>
                                <option value="2 - Awaiting Feedback">2 - Awaiting Feedback</option>
                                <option value="1 - Actively Engaged">1 - Actively Engaged</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xl="3" lg="6">
                        <Form.Group className="mb-3" controlId="opportunityEmailRecieved">
                            <Form.Label>Email Received Date</Form.Label>
                            <Form.Control type="datetime-local" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xl="6" lg="12">
                        <Form.Group className="mb-3" controlId="opportunityJobTitle">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                    <Col xl="2" lg="4">
                        <Form.Group className="mb-3" controlId="opportunityEmploymentType">
                            <Form.Label>Employment Type</Form.Label>
                            <Form.Select aria-label="Employment Type">
                                <option value="Contract">Contract</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Freelance">Freelance</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xl="4" lg="8">
                        <Form.Group className="mb-3" controlId="opportunityContractDuration">
                            <Form.Label>Contract Duration</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xl="6" lg="12">
                        <Form.Group className="mb-3" controlId="opportunityPayRate">
                            <Form.Label>Pay Rate</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col xl="2" lg="4">
                        <Form.Group className="mb-3" controlId="opportunityLocationType">
                            <Form.Label>Location Type</Form.Label>
                            <Form.Select aria-label="Location Type">
                                <option value="On-Site">On-Site</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Remote">Remote</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xl="4" lg="8">
                        <Form.Group className="mb-3" controlId="opportunityLocationCity">
                            <Form.Label>Location City</Form.Label>
                            <Form.Control type="text"  />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="opportunityJobDescription">
                                <Form.Label>Job Description</Form.Label>
                                <Form.Control as="textarea" rows={20} />
                            </Form.Group>
                        </Col>
                    </Row>
            </div>
            
        )
    }
}

export default OpportunityFields