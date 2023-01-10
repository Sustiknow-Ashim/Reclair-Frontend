import React, { useRef, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Col, Container, Form, InputGroup, Row, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { queryTable } from '../Actions/authToken'

const AdminLoginScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(true);

    const myRef = useRef();

    const loginHandler = async () => {
       const {data} =  await axios.post('http://localhost:3300/adminlogin',{
        email, password
       });
       
       if(data.success){
        localStorage.setItem('adminId', data.id)
        localStorage.setItem('adminToken', data.token)
        navigate('/adminDashboard')
       }else{
        alert(data.message)
       }
       console.log(data)
    }

    const showPassword = () =>{
        show?myRef.current.type='text':myRef.current.type='password';
        setShow(x => !x)
    }
    return (
        <Container className='my-5 shadow-lg p-3 rounded-4 bg-light' style={{maxWidth:'600px', minHeight:'300px'}}>
            <Form>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type='mail' placeholder='Admin Email' onChange={(e) => { setEmail(e.target.value) }} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" ref={myRef} onChange={(e) => { setPassword(e.target.value) }} placeholder="Admin Password" />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    <Form.Check className=' d-inline' onClick={()=>{showPassword()}}/> Show Password
                </Form.Group>



                <Form.Group className='text-center'>
                    <Button variant="outline-primary" onClick={() => { loginHandler() }}>Admin Login</Button>
                </Form.Group>


            </Form>
        </Container>
    )
}

export default AdminLoginScreen
