import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const QueryById = () => {
    const params = useParams();
    const navigation = useNavigate();
    const [queryData, setQueryData] = useState({});

    useEffect(() => {
        async function getQueryData() {
            const response = await axios.post('http://localhost:3300/getQueryById', {
                id: params.id
            })
            console.log(response.data)
            setQueryData(response.data[0])
        }

        getQueryData();
    }, [])
    console.log(queryData)
    return (
        <Container className='py-3'>
            <Row >
                <Col>
                    <h3 className="d-inline">{queryData?.organization}</h3>
                </Col>
                {/* <Col className=" text-center">
                    <Button variant='info' onClick={()=>{navigation('/negotiation')}}>Negotiation</Button>
                </Col> */}
            </Row>
            <Form.Group controlId="formFileLg" className="my-3 w-75">
                        <Form.Label>Upload Documents</Form.Label>
                <Row>
                    <Col>
                        <Form.Control type="file" size="lg" />
                    </Col>
                    <Col>
                        <Button variant='success' className='py-2'>Upload</Button>
                    </Col>
                </Row>
            </Form.Group>

            <div className='bg-dark rounded' style={{height:'60vh', width:'70vw', overflow:'auto'}}>
                <Row className=' text-center'>
                    <Col className=''>
                        <h2 className='text-danger'>Client Data</h2>
                        <hr />
                        <h6>Client Data</h6>
                    </Col>
                    <Col>
                        <h2 className='text-danger'>Admin Data</h2>
                        <hr />
                        <h6>Admin Data</h6>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default QueryById


// add_datetime: null
// address: "new town"
// approx_area: "700"
// avg_consume: "700 kw"
// city: "kolkata"
// country: "India"
// email: "email@example.com"
// floor_roop: "5"
// id: 3
// last_electricity_bill: "70000"
// meeting_date_time: "2022-09-16T18:30:00.000Z"
// meeting_link: null
// organization: "org three"
// phone: "9864796546"
// pin: 700123
// project_type: "open roof"
// state: "West Bengal"
// status: "accept"
// user_id: null
// website: "www.website.com"