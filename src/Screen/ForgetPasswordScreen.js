import Button from 'react-bootstrap/Button';
import { Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function ForgetPasswordScreen() {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [enteredOtp, setEnteredOtp] = useState(null);

    const sendOtpHandler = async () => {
        
        const { data } = await axios.post('http://localhost:3300/sendotp', {
            userMail: email
        });
        localStorage.setItem('email', email);
        setOtp(data);
    }

    const varifyOtpHandler = async () =>{
        const isValid = otp===enteredOtp?true:false;
        if(isValid){
            navigate('/renterpassword ')
        }else{
            console.log('invalid otp')
        }
    }
    return (
        <Container className='signIn-container align-item-end'>
            <Form>
                <h2 className='text-center my-3'>Forget Password</h2>
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
                </Form.Group>:''}

                <div className="d-grid gap-2 mt-4">
                    <Button variant="primary" size="md" onClick={() => { sendOtpHandler() }}>
                        Send otp
                    </Button>
                </div>

            </Form>

            <h4 className='text-center text-danger' onClick={() => { navigate('/login') }} style={{ cursor: 'pointer' }}>Back to Login Page</h4>
         </Container>
    );
}

export default ForgetPasswordScreen;