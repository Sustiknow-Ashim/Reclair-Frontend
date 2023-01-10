import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import ProjectsCard from '../Components/ProjectsCard';
// import { useNavigate } from "react-router-dom";
// import Footer from './Footer';

const MyProjectScreen = () => {

  const [projects, setProjects] = useState(itemData);


  return (
    <>

      <Container className='text-center my-2 ' >
        <h2 className='py-2  text-start'>My Projects</h2>
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

export default MyProjectScreen;


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
    title: 'DOWNTOWN',
    sub_title: 'DOWNTOWN One',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    isppadone: false
  }
];