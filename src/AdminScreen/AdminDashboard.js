import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Row, Table, Col, Button } from 'react-bootstrap';
import ChangeStatusModal from '../AdminComponents/ChangeStatusModal';
import RescheduleMeetingModal from '../AdminComponents/RescheduleMeetingModal';
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [queryData, setQueryData] = useState([]);


  useEffect(() => {
    async function getQueryData() {
      const response = await axios.post('http://localhost:3300/getAdminQuery', {
        token: localStorage.getItem('adminToken'),
        adminId: localStorage.getItem('adminId')
      })
      if (response.data.success) {
        setQueryData(response.data.result)
      } else {
        alert(response.data.message)
        navigate('/admin')
      }
    }

    getQueryData();
  }, [])
  console.log(queryData)
  return (
    <div>

      <Row className='my-4 text-center'>
        <Col><Button variant='info'>New Queries</Button></Col>
        <Col><Button variant='warning'>In Process</Button></Col>
        <Col><Button variant='success'>Complete</Button></Col>
        <Col><Button variant='danger'>Cancel Queries</Button></Col>
        <Col><Button variant='danger'>All projects</Button></Col>
        <Col><Button variant='primary' onClick={() => { navigate('/adminAddNewProject') }}>Add a new project</Button></Col>
      </Row>

      <br />
      <Table className='table table-striped m-auto' style={{maxWidth:'95vw'}}  responsive='md' bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>Organization(Place)</th>
            <th>Project Type</th>
            <th>Meeting Request</th>
            <th>Phone</th>
            <th>Send Date</th>
            <th>Status</th>
            <th>Full Info</th>
          </tr>
        </thead>
        <tbody>
          {queryData?.map((data) => {
            // console.log(data)
            return (
              <tr key={data?.id} className={data?.status === 'accept' ? 'bg-success bg-opacity-75' : data?.status === 'reshedule' ? 'bg-info' : 'bg-warning'} >
                <td>{data?.id}</td>
                <td>{data?.organization}({data?.city})</td>
                <td>{data?.project_type}</td>
                <td>
                  <Row className='text-center'>
                    <Col>{`${new Date(data?.meeting_date_time).toLocaleDateString()} - ${new Date(data?.meeting_date_time).toLocaleTimeString()}`}</Col>

                  </Row>
                </td>
                <td>{data?.phone}</td>
                <td>{data?.meeting_date_time}</td>
                {/* <td>16-08-22 10:30 AM</td> */}
                <td>{data?.status}</td>
                <td><Button onClick={()=>{navigate(`/adminQueryById/${data.id}`)}}>All details</Button> </td>
                <td><ChangeStatusModal queryData={data} /> </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default AdminDashboard
