import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Row, Table, Col, Button, Container } from 'react-bootstrap';

const QuerieTable = () => {
  const navigate = useNavigate();
  const [queryData, setQueryData] = useState([]);
  useEffect(() => {
    async function getQueryData() {
      const response = await axios.post('http://localhost:3300/getClientQueries', {
        id: localStorage.getItem('id'),
        token: localStorage.getItem('token')
      })
      console.log(response.data)
      setQueryData(response.data.result)
    }

    getQueryData();
  }, [])

  return (
    <Container className='my-3'>


      <Table className='table table-striped ' bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Organization(Place)</th>
            <th>Meeting Request</th>
            <th>Phone</th>
            <th>Send Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {queryData.map((data) => {
            return ( 
              <tr key={data.id} className={data.status === 'accept' ? 'bg-success bg-opacity-75' : data.status === 'reshedule' ? 'bg-info' : 'bg-warning'} onClick={() => { if (data.status === 'accept') { navigate(`/query/${data.id}`) } }}>
                <td>{data.id}</td>
                <td>{data.organization}</td>
                <td>{data.meeting_date_time}</td>
                <td>{data.phone}</td>
                <td>{data.meeting_date_time}</td>
                {/* <td>16-08-22 10:30 AM</td> */}
                <td>{data.status}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default QuerieTable
