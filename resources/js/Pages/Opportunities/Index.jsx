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

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });
 
    const submit = (e) => {
        e.preventDefault();
        console.log("yikes!")
    };
 
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Opportunities" />
            <Container className="mt-2">
                <h1>All Opportunities</h1>
                    <Button variant="primary" href={route('opportunities.create')}>Create Opportunity</Button>
                Hello World! <br></br>
                Add a table here of all opportunities later
                
            </Container>
        </AuthenticatedLayout>
    );
}