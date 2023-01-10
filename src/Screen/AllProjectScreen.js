import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, ButtonGroup, Button, Row } from 'react-bootstrap'
import ProjectsCard from '../Components/ProjectsCard';
// import { useNavigate } from "react-router-dom";
// import Footer from './Footer';

const AllProjectScreen = () => {

  const [projects, setProjects] = useState([]);


  useEffect(() => {
    async function getQueryData() {
      const response = await axios.post('http://localhost:3300/getAllProjectsData', {
        token: localStorage.getItem('token'),
        id: localStorage.getItem('id')
      })
      if (response.data.success) {
        console.log(response.data.result)
        setProjects(response.data.result)
      } else {
        alert(response.data.message)
        
      }
    }

    getQueryData();
  }, [])


  console.log(projects)


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

      <Container className='text-center my-2 ' >
        <h2 className='py-2  text-start'>All Projects</h2>
        {/* <ButtonGroup aria-label="Basic example" className="m-auto my-2" >
          <Button variant="secondary" onClick={() => { filterArray('ALL') }}>ALL</Button>
          <Button variant="secondary" onClick={() => { filterArray('PPADONE') }}>PPA Done</Button>
          <Button variant="secondary" onClick={() => { filterArray('PPANOTDONE') }}>PPA Yet to be Done</Button>
        </ButtonGroup> */}
        <Row >
          {
            projects.map((project, i) => {
              return (
                <ProjectsCard project={project} key={i} />
              )
            })
          }
        </Row>
        {/* <Footer /> */}
      </Container>
    </>
  )
}

export default AllProjectScreen;


const itemData = [
  {
    id: 1,
    img: 'https://chintglobal.com/blog/wp-content/uploads/solar-power-plant-knowledge-important-featured-banner.jpg',
    title: 'Ramakrishna Solar Project - One',
    sub_title: 'Ramakrishna Solar Project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    isppadone: false
  },
  {
    id: 2,
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/PV_Soundless_Freising.jpg',
    title: 'ADAMAS Solar',
    sub_title: 'ADAMAS Solar One',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    isppadone: false
  },
  {
    id: 3,
    img: 'https://m.economictimes.com/thumb/msid-69198850,width-1200,height-900,resizemode-4,imgsize-603299/how-to-build-a-commercial-solar-power-plant-in-india.jpg',
    title: 'DOWNTOWN Solar Project - One',
    sub_title: 'DOWNTOWN One',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    isppadone: true
  },
  {
    id: 4,
    img: 'https://chintglobal.com/blog/wp-content/uploads/solar-power-plant-knowledge-important-featured-banner.jpg',
    title: 'Ramakrishna Solar Project - One',
    sub_title: 'Ramakrishna Solar Project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    isppadone: false
  },
  {
    id: 5,
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/PV_Soundless_Freising.jpg',
    title: 'ADAMAS Solar',
    sub_title: 'ADAMAS Solar One',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    isppadone: true
  },
  {
    id: 6,
    img: 'https://m.economictimes.com/thumb/msid-69198850,width-1200,height-900,resizemode-4,imgsize-603299/how-to-build-a-commercial-solar-power-plant-in-india.jpg',
    title: 'DOWNTOWN',
    sub_title: 'DOWNTOWN One',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    isppadone: false
  }
];