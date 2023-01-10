import Button from 'react-bootstrap/Button';
import { Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToken, userType } from '../Actions/authToken';
import LoginOptionModel from '../Components/LoginOptionModel';

function LoginScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userN = useRef('');
    const password = useRef(null);

    const loginHandler = async () => {
        const userName = userN.current.value;
        const userPassword = password.current.value;
        const response = await axios.post('http://localhost:3300/login', {
            userName: userName,
            password: userPassword
        });

        if (response.data.success) {
            localStorage.setItem('token', response.data.token);  
            localStorage.setItem('userName', response.data.name);
            localStorage.setItem('type', response.data.type);
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('organization', response.data.organization);


            //Storing jwt token and user type in redux
            dispatch(addToken(response.data.token));
            dispatch(userType(response.data.type));
        } else {
            alert(response.data.message)
        }

    }

// console.log(id)
    return (
        <Container className='d-flex justify-content-center  p-3 my-4 '>
            <Container className='shadow-lg p-4  mb-5 bg-body rounded-3' style={{maxWidth:'450px', minHeight:'500px'}}>
                <Form>
                    <h2 className='text-center my-3 text-muted'>Log In to Your Account</h2>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="text" ref={userN} placeholder="Enter email or phone" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control type="password" ref={password} placeholder="Password" />
                    </Form.Group>
                    <div className="d-grid gap-2 mt-4">
                        <Button variant="primary" size="md" onClick={() => { loginHandler() }}>
                            Log In
                        </Button>
                    </div>
                    <p className='text-end mx-3 mt-1' ><LoginOptionModel /></p>

                </Form>
                <Container className='align-item-center text-center text-dark'>
                    <h4 >Login Using</h4>
                    <Row className='my-4 m-0 w-50 m-auto'>
                        <Col className=''>
                            <i className="fa-brands fa-google fa-2xl" style={{ color: 'brown' }}></i>
                        </Col>
                        <Col>
                            <i className="fa-solid fa-envelope fa-2xl" style={{ color: 'brown' }}></i>
                        </Col>
                    </Row>
                </Container>
                <h4 className='text-center text-danger' onClick={() => { navigate('/register') }} style={{ cursor: 'pointer' }}>Don't have an account? Sign up now</h4>
            </Container>
        </Container>
    );
}

export default LoginScreen;