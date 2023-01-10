import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Container, Row, Col, InputGroup, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import ProjectsCard from '../Components/ProjectsCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ScheduleMeeting from '../Components/ScheduleMeeting';
import { PopupWidget } from 'react-calendly';
import './organizationDashboard.css'
// import { useNavigate } from "react-router-dom";
// import Footer from './Footer';

const OrganizerDashboard = () => {
    const [type, setType] = useState("");
    const navigate = useNavigate();
    const [queryData, setQueryData] = useState([]);
    const [workOrderFile,setWorkOrderFile] = useState(null);


    const userType = useSelector(state => state.type) || localStorage.getItem('type');

    useEffect(() => {
        async function getQueryData() {
            const response = await axios.post('http://localhost:3300/clientProjectbuyingQueries', {
                id: localStorage.getItem('id'),
                token: localStorage.getItem('token')
            })
            setQueryData(response.data.result[0])
            setType(userType);
        }

        getQueryData();
    }, [])


    console.log(queryData)

    // Proposal response sending to database
    const changeProposalHandler = async (val) => {
        console.log(val)
        const response = await axios.patch('http://localhost:3300/getClientQueries', {
            id: localStorage.getItem('id'),
            token: localStorage.getItem('token'),
            proposalResponse: val
        })
        console.log('response', response)
    }

    // PPA response sending to database
    const changePpaHandler = async (val) => {
        console.log(val)
        const response = await axios.patch('http://localhost:3300/getClientQueries', {
            id: localStorage.getItem('id'),
            token: localStorage.getItem('token'),
            ppaResponse: val
        })
        console.log('response', response)
    }

    const workOrderFileUploadSubmit = async () =>{
        console.log(workOrderFile);
        const formData = new FormData();
        formData.append("file", workOrderFile);

        const {data} = await axios.post('http://localhost:3300/workorderupload',{
            formData
        })
        console.log(data);

    }

    return (
        <>
            <div className='text-center my-2 m-auto ' id='organizationDashboard' style={{ width: '85%' }} >
                <h3 className='text-light text-start py-2'>Welcome {localStorage.getItem('userName')} <b>({type} : {localStorage.getItem('organization')})</b> </h3>

                <hr className='w-75' />

                {queryData?.id ? <Row id='queryData' className='border bg-body border-light shadow-lg rounded-2 p-3' >
                    <Col sm={5} className='text-start border-end border-1 '>
                        <h3 className='text-warning'>Your Query Details</h3><hr />
                        <h4><span className='h3 text-muted'> Name of Client: </span>{queryData?.organization} </h4>
                        <h4><span className='h3 text-muted'> Type of Client: </span>{queryData?.organization_type} </h4>
                        <h4><span className='h3 text-muted'> Project Type: </span> Rooftop </h4>
                        <h4><span className='h3 text-muted'> Client Email: </span>{queryData?.email} </h4>
                        <h4><span className='h3 text-muted'> Client Website: </span>{queryData?.website} </h4>
                        <h4><span className='h3 text-muted'> Approx Area: </span>{queryData?.approx_area} </h4>
                        <h4><span className='h3 text-muted'> Average Consume: </span>{queryData?.avg_consume} </h4>
                        <h4><span className='h3 text-muted'> Floor of Roof: </span>{queryData?.floor_roop} </h4>
                        <h4><span className='h3 text-muted'> Last Electricity Bill in Rupees: </span>{queryData?.last_electricity_bill} </h4>
                    </Col> 

                    <Col sm={7} className='text-start border-start border-1 '>
                        <h3 className='text-danger'>Buying Process Started</h3><hr />
                        <h5 ><span className='h4 text-muted'>Proposal status: </span> {queryData.admin_approximate_proposal_send_time ? queryData.admin_approximate_proposal_send_time : 'To be send very soon'}</h5>
                        <h4><span className='text-muted'>Download proposal: </span> <Button disabled={queryData.proposal_file_name ? false : true} href='https://drive.google.com/file/d/1BAQ-y4LEp5YYNCzBHc66KaqSEOlEp_tt/view?usp=sharing' target='__blank' size='sm'>Download Proposel</Button></h4>

                        {queryData.proposal_file_name && <Row className='my-2'>
                            <Col className='my-1'>
                                <Button variant='success' className='mx-auto'
                                    size='md'
                                    // style={{ minHeight: '63px', overflow: 'hidden', width: '100%' }}
                                    onClick={() => { changeProposalHandler('Accepted the offer') }}

                                >Accept the offer, Please send the Offer
                                </Button>
                            </Col>

                            <Col className='my-1'>
                                <Button
                                    size='md'
                                    variant='warning'
                                    className='mx-auto'
                                    // style={{ minHeight: '63px', overflow: 'hidden', width: '100%' }}
                                    onClick={() => { changeProposalHandler('Want to negotiate'); navigate('/negotiation') }}
                                >Accept the offer but want to negotiate
                                </Button>
                            </Col>

                            <Col className='my-1'>
                                <Button
                                    size='md'
                                    variant='danger'
                                    className='mx-auto '
                                    // style={{ minHeight: '63px', overflow: 'hidden', width: '100%' }}
                                    onClick={() => { changeProposalHandler("do not want to continue with this offer") }}
                                >Don't Want to Continue with this Offer
                                </Button>
                            </Col>





                        </Row>}

                        <h4><span className='text-muted'>Download PPA sample: </span> <Button variant='primary' disabled={queryData.ppa_file_name ? false : true} href='https://drive.google.com/file/d/1ol_LAeMpnnvf8Fdmh4C7p8_uot4Fd4Qb/view?usp=sharing' target='__blank' size='sm'>PPA Sample</Button></h4>
                        {/* PPA response Section */}
                        {queryData.ppa_file_name && <>
                            <div>
                                <div className='d-flex'>
                                    <h4 className='mx-2'>
                                        {/* <span className='text-muted'>Accept PPA: </span> */}
                                        <Button variant='success' size='sm' onClick={() => { changePpaHandler('Accepted Ppa') }}>
                                            Accept PPA <i className="fa-solid fa-check"></i>
                                        </Button>
                                    </h4>
                                    <h4 className='mx-2'>
                                        {/* <span className='text-muted'>Want to negotiate: </span> */}
                                        <Button variant='warning' size='sm' onClick={() => { changePpaHandler('Want to negotiate') }}>
                                            Want to Negotiate <i className="fa-sharp fa-solid fa-comment"></i>
                                        </Button>
                                    </h4>
                                    <h4 className='mx-2'>
                                        {/* <span className='text-muted'>Don't Want to continue: </span> */}
                                        <Button variant='danger' size='sm' onClick={() => { changePpaHandler('Rejected Ppa') }}>
                                            Don't Want to Continue <i className="fa-sharp fa-solid fa-xmark"></i>
                                        </Button>
                                    </h4>
                                </div>
                            </div>

                            <div className='d-flex mt-4'>
                                <h4 className='px-2'><span className='text-muted'>Please Upload the Work Order: </span> <Form.Group controlId="formFile" className="mb-3">
                                    <Row className='mt-2 '>
                                        <Col>
                                            <Form.Control type="file" onChange={(e)=>{setWorkOrderFile(e.target.files[0])}}/>
                                        </Col>
                                        <Col>
                                            <Button variant='warning' size='sm' onClick={()=>{workOrderFileUploadSubmit()}}>Upload</Button>
                                        </Col>
                                    </Row>
                                </Form.Group> </h4>
                            </div>
                        </>
                        }



                    </Col>
                </Row> : <h3>Please Submit your project query  <Button size='sm' variant='success' onClick={()=>{navigate('/query')}}>Submit a query</Button></h3>}

                <div className='m-1 end-0 text-end '>
                    {/* Want to send any file :<input type='file'/> */}
                    {/* <Button variant='primary' className='m-2'>Send a Message</Button> */}
                    {/* <span className='m-1'><ScheduleMeeting /></span> */}
                    <div className="App">
                        <PopupWidget
                            url="https://calendly.com/dev-ashimkr/30min"
                            rootElement={document.getElementById("root")}
                            text="Click here to schedule a meeting"
                            textColor="#ffffff"
                            color="#00a2ff"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrganizerDashboard;

