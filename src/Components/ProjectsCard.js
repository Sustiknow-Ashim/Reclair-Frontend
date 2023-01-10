import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const ProjectsCard = ({ project }) => {
    // console.log(project)
    return (
        <LinkContainer to={`/project/${project.id}`} >
            <Col xs={12} md={4} className='my-2 ' key={project.id}  >
                <Card className='py-3' style={{ width: '100%', height:'100%', boxShadow:'2px 2px 5px grey' }}>
                    <Card.Body>
                        <Card.Title>{project.organization}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{project.project_type}</Card.Subtitle>
                        <Card.Text>
                            PPA status : <b>{project.ppa_status?'Done':'To be Done'}</b><br/>
                            {/* {project.description}  */}
                            Place: {project.state}
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* <Card style={{ width: '100%', height: '100%' }}>
                    <Card.Img variant='top' src={`${project.img}`} style={{height:'240px', width:'100%',cursor:'pointer'}}/>
                    <Card.Body>
                        <Card.Title className='px-1' style={{cursor:'pointer'}}>{project.title}</Card.Title>
                    </Card.Body>
                    <Card.Text className='px-3'>
                        {project.description}
                    </Card.Text>
                </Card> */}
            </Col>
        </LinkContainer>
    )
}

export default ProjectsCard