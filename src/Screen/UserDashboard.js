import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import ProjectsCard from '../Components/ProjectsCard';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import Footer from './Footer';

const UserDashboard = () => {
  const [type, setType] = useState("");
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);


  const userType = useSelector(state => state.type) || localStorage.getItem('type');

  useEffect(() => {
    const getProjectData = async () => {
      const { data } = await axios.post('http://localhost:3300/getUserProjectData', {
        id: localStorage.getItem('id'),
        token: localStorage.getItem('token')
      })
      // console.log(data)
      setProjects(data.result)
    }
    getProjectData();

    setType(userType);

    // Getting all projects list using new api call (have to optimize it leter)
    const getAllProjectsData = async () => {
      const { data } = await axios.post('http://localhost:3300/getAllProjectsData', {
        id: localStorage.getItem('id'),
        token: localStorage.getItem('token')
      })
      // console.log('all projects data',data)
      setAllProjects(data.result)
    }
    getAllProjectsData();
  }, [userType])


  // const filterArray = (type) => {
  //   switch (type) {
  //     case 'PPADONE':
  //       const ppaDone = itemData.filter((data) => data.isppadone === true)
  //       setProjects(ppaDone)
  //       break;
  //     case 'PPANOTDONE':
  //       const ppaNotDone = itemData.filter((data) => data.isppadone === false)
  //       setProjects(ppaNotDone)
  //       break;
  //     case 'ALL':
  //       setProjects(itemData)
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return (
    <>
      <Container className='text-center my-2 '>
        <h3 className='text-secondary text-start py-2'>Welcome {localStorage.getItem('userName')} <b>({type} : {localStorage.getItem('organization')})</b> </h3>
        <hr className='w-25' />
        {/* user's Project */}
        <h3 className='py-2  text-start'>My Projects</h3>
        {projects.length !== 0 ? <Row >
          {
            projects.map((project, i) => {
              return (
                <ProjectsCard project={project} key={i} />
              )
            })
          }
        </Row> : <p className='py-3 text-info'>Please add some project to view</p>}

        {/* Have to show all projects */}
        <h2 className='py-3  text-start'>All Projects</h2>
        {/* <ButtonGroup aria-label="Basic example" className="m-auto my-2" >
          <Button variant="secondary" >ALL</Button>
          <Button variant="secondary" >PPA Done</Button>
          <Button variant="secondary" >PPA Yet to be Done</Button>
        </ButtonGroup> */}
        <Row >
          {
            allProjects.map((project, i) => {
              return (
                <ProjectsCard project={project} key={i} />
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default UserDashboard;

