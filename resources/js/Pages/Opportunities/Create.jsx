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

import OpportunityFields from './OpportunityFields';

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
                    
                    <OpportunityFields/>
                
                </Form>

            </Container>
        </AuthenticatedLayout>
    );
}