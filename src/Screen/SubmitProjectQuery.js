import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function SubmitProjectQuery() {
  return (
    <Container className='my-4'>
         <h2 className=' text-center'>Submit a Project Query</h2>
            <Form className=''>
            <Form.Group className="mb-3 text-end">
                    <Button >View all queries</Button>
                </Form.Group>
                <Form.Group className="mb-3 ">
                    <Form.Control type="text" placeholder="Project Type" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Approximate Area" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Floor of Roof" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Meeting Date Time" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Avg Monthly Consume" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Last Payment Ammount" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Button className='mt-2 bg-success'>Save as a draft</Button>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Button className='bg-success'>Submit</Button>
                </Form.Group>
            </Form>
    </Container>
  );
}

export default SubmitProjectQuery;