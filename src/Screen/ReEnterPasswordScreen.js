import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReEnterPasswordScreen = () => {
    const navigate = useNavigate(); 
    const [Password, setPassword] = useState("");
    const [repeatePassword, setRepeatePassword] = useState("");
    

    const resetPAsswordHandler = async () =>{
        if(Password===repeatePassword){
            const { data } = await axios.post('http://localhost:3300/resetpassword', {
            password: Password,
            email: localStorage.getItem('email')
        })
        console.log(data)
        }else{
            console.log("Password doesn't match");
        }
    }
  return (
    <Container className='signIn-container align-item-end'>
            <Form>
                {/* <h2 className='text-center my-3'>Reset Password</h2> */}
                <Form.Group className="mb-4">
                    <Form.Control type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" />
                </Form.Group>

                <Form.Group className="mb-4" >
                    <Form.Control onChange={(e)=>{setRepeatePassword(e.target.value)}} type="password" placeholder="Repeate Password" />
                </Form.Group>

                <div className="d-grid gap-2 mt-4">
                    <Button variant="primary" size="md" onClick={() => { resetPAsswordHandler() }}>
                       Reset Password
                    </Button>
                </div>

            </Form>

            <h4 className='text-center text-danger' onClick={() => { navigate('/login') }} style={{ cursor: 'pointer' }}>Back to Login Page</h4>
        </Container>
  )
}

export default ReEnterPasswordScreen
