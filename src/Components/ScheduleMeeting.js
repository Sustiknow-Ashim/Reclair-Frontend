import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function ScheduleMeeting() {
  const [show, setShow] = useState(false);
  const [time, setTime] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const meetingScheduleHandler =async ()=>{
    console.log(time)
    const response = await axios.post('http://localhost:3300/clientRequestedForMeeting', {
            id: localStorage.getItem('id'),
            token: localStorage.getItem('token'),
            time
        })
        console.log('response', response)
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Schedule a Meeting
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Select your meeting date : <input type='datetime-local' className='mx-4' onChange={(e)=>{setTime(e.target.value)}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={meetingScheduleHandler}>Schedule</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ScheduleMeeting;