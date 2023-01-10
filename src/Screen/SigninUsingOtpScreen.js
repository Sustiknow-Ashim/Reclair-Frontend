import Button from 'react-bootstrap/Button';
import { Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToken, userType } from '../Actions/authToken';

function SigninUsingOtpScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [enteredOtp, setEnteredOtp] = useState(null);

    const sendOtpHandler = async () => {
        
        const { data } = await axios.post('http://localhost:3300/sendotp', {
            userMail: email
        })
        setOtp(data);
    }

    const varifyOtpHandler = async () =>{
        const isValid = otp===enteredOtp?true:false;
        if(isValid){
            const {data} = await axios.post('http://localhost:3300/loginusingotp',{
                email : email,
            });
            // console.log(data)
            localStorage.setItem('token', data.token);
            localStorage.setItem('type', data.type);
            dispatch(addToken(data.token));
            dispatch(userType(data.type));
        }else{
            console.log('Wrong otp')
        }
    }
    return (
        <Container className='w-50 border border-2 shadow-lg mt-4 align-item-end'>
            <Form>
                <h2 className='text-center my-3'>Signin using otp</h2>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className='text-muted'>We'll send otp to</Form.Label>
                    <Form.Control type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
                </Form.Group>

                {otp?<Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className='text-muted'>Enter Your otp </Form.Label>
                    <Row >
                        <Col>
                            <Form.Control onChange={(e)=>{setEnteredOtp(e.target.value)}} type="text" placeholder="Enter otp" />
                        </Col>
                        <Col>
                            <Button onClick={()=>{varifyOtpHandler()}}>Verify otp</Button>
                        </Col>
                    </Row>



                </Form.Group>: ''}

                <div className="d-grid gap-2 mt-4">
                    <Button variant="primary" size="md" onClick={() => { sendOtpHandler() }}>
                        Send otp
                    </Button>
                </div>

            </Form>

            <h4 className='text-center text-danger my-3' onClick={() => { navigate('/login') }} style={{ cursor: 'pointer' }}>Back to Login Page</h4>
        </Container>
    );
}

export default SigninUsingOtpScreen;