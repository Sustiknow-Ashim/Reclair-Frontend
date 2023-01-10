import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'

function LoginOptionModel() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span variant="primary" onClick={handleShow}>
                Trouble in login?
            </span>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Trouble in login?</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>Choose an option to login.</Modal.Body> */}
                <Modal.Body className='mx-auto'>
                    <Button variant="primary" className='mx-3' onClick={() => { navigate('/signinusingotp') }}>
                        Sign in using otp
                    </Button>
                    <Button variant="primary" className='mx-3' onClick={() => { navigate('/forgetpassword') }} >
                    Forget Password 
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginOptionModel;