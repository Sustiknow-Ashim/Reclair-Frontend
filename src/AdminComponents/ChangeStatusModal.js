import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import RescheduleMeetingModal from './RescheduleMeetingModal';

function ChangeStatusModal({queryData }) {
    const [show, setShow] = useState(false);
    // console.log(queryData)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeStatus = async (status) => {

        const response = await axios.patch('http://localhost:3300/changeQueryStatus', {
            status, queryData, adminId: localStorage.getItem('adminId'), adminToken: localStorage.getItem('adminToken')
        })

        // console.log(response)

    }



    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Change Status
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Query Status Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>Choose status</Modal.Body>
                <Modal.Footer className=' m-auto'>
                    <Button variant="success" onClick={() => { handleClose(); changeStatus('accept') }}>
                        Accept
                    </Button>
                    <Button variant="danger" onClick={() => { handleClose(); changeStatus('reject') }}>
                        Reject
                    </Button>
                        <RescheduleMeetingModal id={queryData?.id} email={queryData?.email} />
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ChangeStatusModal;