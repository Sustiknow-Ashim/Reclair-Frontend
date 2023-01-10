import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function RescheduleMeetingModal({ id, email }) {
    const [show, setShow] = useState(false);
    const [dateTime, setdateTime] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeTimeHandler = async () => {
        await axios.patch('http://localhost:3300/changeQueryMeetingtime',{
            id, email, dateTime
        })
    }

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Reschedule
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select date time</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center '>
                    <input type='datetime-local' onChange={(e) => { setdateTime(e.target.value) }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { changeTimeHandler(); handleClose();  }}>
                        Reschedule
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RescheduleMeetingModal;