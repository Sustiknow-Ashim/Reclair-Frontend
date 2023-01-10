import React, { useState } from 'react'
import { Button, Container, Dropdown, Form, InputGroup } from 'react-bootstrap'

const AdminAddNewProject = () => {
  const [projectData, setProjectData] = useState({
    projectTitle: '',
    projectSubTitle: '',
    projectDescription: '',
    projectPhotos: '',
    projectAddedBy: '',
    projectStatus: '',
  })

  console.log(projectData)
  return (
    <Container className='py-3 shadow mt-3' style={{maxWidth:'50rem'}}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Project Title"
          onChange={(e)=>{setProjectData({...projectData ,projectTitle: e.target.value})}}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Project sub-title"
          onChange={(e)=>{setProjectData({...projectData ,projectSubTitle: e.target.value})}}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Project description"
          onChange={(e)=>{setProjectData({...projectData ,projectDescription: e.target.value})}}
        />
      </InputGroup>


      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload image of the project</Form.Label>
        <Form.Control type="file" onChange={(e)=>{setProjectData({...projectData ,projectPhotos: e.target.value})}}/>
      </Form.Group>


      <InputGroup className="mb-3">
        <InputGroup.Text>Project added by</InputGroup.Text>
        <Form.Control
          placeholder="Your Name"
          onChange={(e)=>{setProjectData({...projectData, projectAddedBy:e.target.value})}}
        />
      </InputGroup>


      <InputGroup className="mb-3">
        <InputGroup.Text>Project Status</InputGroup.Text>
        <Dropdown onSelect={(e)=>{console.log(e)}}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" onChange={e=>{console.log('object',e)}}>
            Select Status
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item value='PPA Done'>PPA Done</Dropdown.Item>
            <Dropdown.Item value='PPA Yet To Be Done'>PPA yet to be Done</Dropdown.Item>
            <Dropdown.Item value='Construction Start'>Construction Start</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </InputGroup>


      {/* <InputGroup className="mb-3">
        <InputGroup.Text>PPA Status</InputGroup.Text>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Select Status
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">PPA Done</Dropdown.Item>
            <Dropdown.Item href="#/action-2">PPA yet to be Done</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Construction Done</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </InputGroup> */}

      <div className="d-grid gap-2">
        <Button variant="warning my-3" >
          Add Project
        </Button>
      </div>

    </Container>
  )
}

export default AdminAddNewProject
