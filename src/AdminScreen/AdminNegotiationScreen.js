import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Container, InputGroup, Form } from 'react-bootstrap'
import axios from 'axios'

const AdminNegotiationScreen = () => {
    const [currData, setCurrData] = useState('');
    const [admintData, setAdmintData] = useState('');
    const [clientData, setClientData] = useState('');


    const submitHandler = async () => {
        const response = await axios.post('http://localhost:3300/insertadmintData', {
            data: currData
        })
        console.log(response)
        setAdmintData(response.data.admin)
        setClientData(response.data.client)
        setCurrData('')
    }
    console.log(admintData, clientData)

    useEffect(() => {
        async function getNegotiationData() {
            const response = await axios.get('http://localhost:3300/getNegotiationData')
            console.log(response.data)
            setClientData(response.data.client)
            setAdmintData(response.data.admin)
        }

        getNegotiationData();
    }, [])

    return (
        <Container className='my-3'>
            <Row >
                <Col>
                    <h3>Client's text</h3>
                    <div className='w-75 my-4 bg-light text-center rounded-3 shadow-sm' style={{ height: '15vh', overflow: 'auto' }}>
                        <h3>{clientData}</h3>
                    </div>

                </Col>

                <Col>
                    <h3>Admin's text</h3>
                    <div className='w-75 my-4 bg-light text-center rounded-3 shadow-sm' style={{ height: '15vh', overflow: 'auto' }}>
                        <h3>{admintData}</h3>
                    </div>

                    <InputGroup className="mb-3 w-75">
                        <Form.Control
                            placeholder="Your's ammount"
                            type='number'
                            value={currData}
                            onChange={(e)=>{setCurrData(e.target.value)}}
                        />
                        <Button variant="primary" onClick={()=>{submitHandler()}}>
                            Send
                        </Button>
                    </InputGroup>


                </Col>
            </Row>
        </Container>
    )
}

export default AdminNegotiationScreen
