import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ChangeStatusModal from '../AdminComponents/ChangeStatusModal';

const AdminQueryById = () => {
    const [proposalSendTime, setProposalSendTime] = useState('To be send within 48hours');

    const params = useParams();
    const navigation = useNavigate();
    const [queryData, setQueryData] = useState({});


    useEffect(() => {
        async function getQueryData() {
            const response = await axios.post('http://localhost:3300/getAdminQueryById', {
                queryId: params.id,
                token: localStorage.getItem('adminToken'),
                adminId: localStorage.getItem('adminId')
            })
            if (response.data.result !== 0) {
                response.data.success ? setQueryData(response.data.result[0]) : navigation('/admin')
            } else {
                alert('something went wrong')
            }
        }

        getQueryData();
    }, [])

    console.log(queryData)

    const ProposalSendTimeHandler = async () => {
        await axios.patch('http://localhost:3300/getAdminQueryById', {
            queryId: params.id,
            token: localStorage.getItem('adminToken'),
            adminId: localStorage.getItem('adminId'),
            proposalSendTime
        })
    }

    //code for file upload
    let formData = new FormData();
    const proposalFileChangeHandler = (val) => {
        console.log('from proposalFileChangeHandler', val)
        formData.append("file", val);
        formData.append("id", queryData.id);
        // formData.append('fileName', val.name);
    }

    const proposalFileUploadHandler = async () => {
        console.log(formData.get('file'))
        try {
            const res = await axios.post('http://localhost:3300/adminUploadProposal', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    // PPA File Upload Functions
    let ppaFormData = new FormData();
    const ppaFileChangeHandler = (val) => {
        ppaFormData.append("file", val);
        ppaFormData.append("id", queryData.id);
        // formData.append('fileName', val.name);
    }

    const ppaFileUploadHandler = async () => {
        console.log(ppaFormData.get('file'))
        try {
            const res = await axios.post('http://localhost:3300/adminUploadPPA', ppaFormData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Container className='py-3 '>
            <h2 className='text-center text-warning bg-danger'>Admin Dashboard</h2>
            <Row>
                <Col>
                    <Button className='my-2 ' variant='secondary' onClick={() => { navigation('/adminDashboard') }}>Back to Query Table</Button>
                </Col>
            </Row>
            <Row >
                <Col className=''>
                    <h3 className="d-inline"><span className='text-muted'>Organization Name:</span> {queryData?.organization}</h3> <br />
                    <h6 className="d-inline"><span className='text-muted'>Organization Type:</span> {queryData?.organization_type}</h6> <hr />
                </Col>
                <Col className=" text-center">
                    {/* <span > <ChangeStatusModal queryData={queryData} /> </span> */}
                    <Button variant='warning' className='m-2' onClick={() => { navigation('/adminNegotiation') }}>Negotiation data</Button>

                </Col>
            </Row>
            {/* Project Query detail's code below */}
            <div>
                <h2 className='text-muted text-center text-decoration-underline'>Query Details</h2>
                <Row className='py-3'>
                    {/* this col is for query related details */}
                    <Col className='border border-2 shadow mx-1'>
                        <h3> <span className='text-muted'>Project Type:</span> {queryData?.project_type}</h3>
                        <h3> <span className='text-muted'>Approx Area:</span> {queryData?.approx_area}</h3>
                        <h3> <span className='text-muted'>Average Consume:</span> {queryData?.avg_consume}</h3>
                        <h3> <span className='text-muted'>Floor: </span> {queryData?.floor_roop}</h3>
                        <h3> <span className='text-muted'>Last Electricity Bill: </span> {queryData?.last_electricity_bill}</h3>
                        <h3> <span className='text-muted'>Meeting Date Time: </span> {new Date(queryData?.meeting_date_time).toLocaleString()} </h3>
                        <h2> <span className='text-muted'>Current Query Status: </span> <span className={queryData?.status === 'accept' ? 'bg-success bg-opacity-75' : queryData?.status === 'reshedule' ? 'bg-info' : 'bg-warning'}>{queryData?.status}</span></h2>
                        <hr />
                        <h5> <span className='h4 text-muted'>Address:</span> {`${queryData?.address},${queryData?.city},${queryData?.state},${queryData?.country} `}</h5>
                        <h5> <span className='h4 text-muted'>PinCode:</span> {`${queryData?.pincode} `}</h5>
                        <h5> <span className='h4 text-muted'>Phone No:</span> {`${queryData?.phone} `}</h5>
                        <h5> <span className='h4 text-muted'>Email id:</span> {`${queryData?.email} `}</h5>
                        <h5> <span className='h4 text-muted'>Website:</span> {`${queryData?.website} `}</h5>
                        <h5> <span className='h4 text-muted'>Query add datetime:</span> {`${new Date(queryData?.add_datetime).toLocaleString()} `}</h5>  {/*Date Time I have to check this one due to time difference */}

                    </Col>

                    {/* query intract with client related details */}
                    <Col className='border border-2  shadow mx-1'>
                        <h3 className='m-2'>
                            <span className='h4 text-muted'>
                                Approximate time to send Proposel :
                            </span>
                            {/* Proposal time field */}
                            <input
                                className='form-control m-2'
                                size='md' type="text"
                                value={proposalSendTime}
                                onChange={(e) => { setProposalSendTime(e.target.value) }} />
                            <Button className='m-2' variant='success' onClick={() => { ProposalSendTimeHandler() }}>
                                submit
                            </Button>
                        </h3>
                        <hr />
                        {/* Proposal file uploder field */}
                        <h5 className='m-2'>
                            <span className='h4 text-muted m-2'>Upload Proposel :</span>
                            {/* {queryData?.proposal_file_name && <span className='text-muted h6'>(previous upload: {queryData?.proposal_file_name} )</span>} */}
                            <input type="file" onChange={(e) => { proposalFileChangeHandler(e.target.files[0]) }} className='form-control m-2' />
                            <Button variant='success' className='m-2' onClick={proposalFileUploadHandler}>upload Proposal</Button>
                        </h5>
                        <h5 className='m-2'>
                            <span className='h4 text-muted'>Client's response on Proposel :</span>
                            {queryData?.client_response_on_proposal}
                        </h5>
                        <hr />
                        {/* PPA file uploder */}
                        <h5>
                            <span className='h4 text-muted'>PPA Upload :</span>
                            {queryData?.ppa_file_name && <span className='text-muted h6'>(previous upload: {queryData?.ppa_file_name} )</span>}
                            <input type="file" onChange={(e) => { ppaFileChangeHandler(e.target.files[0]) }}  className='form-control m-2' />
                            <Button onClick={ppaFileUploadHandler} variant='success' className='m-2'>PPA Upload</Button>
                        </h5>
                        <h5 className='m-2'>
                            <span className='h4 text-muted'>Client's response on PPA :</span>
                            {queryData?.client_response_on_ppa}
                        </h5>
                        <hr />
                        <h5> <span className='h4 text-muted'>Client's document: </span> <a href='https://www.google.co.in/' target='_blank'>download</a>  </h5>

                    </Col>
                </Row>
            </div>




        </Container>
    )
}

export default AdminQueryById

