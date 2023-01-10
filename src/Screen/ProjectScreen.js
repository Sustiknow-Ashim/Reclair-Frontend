import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Row, Col, Container, ListGroup, ListGroupItem, Button, Carousel } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { PopupButton, PopupWidget } from 'react-calendly';
import './ProjectScreen.css'

const ProductScreen = (props) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [applyForInvestment, setApplyForInvestment] = useState(false);

  const [project, setProject] = useState([]);
  const param = useParams();

  useEffect(() => {
    const getProjectData = async () => {
      const { data } = await axios.post('http://localhost:3300/getProjectDataById', {
        id: param.id
      })
      setProject(data[0])
    }
    getProjectData();

  }, [])


  // console.log(project)

  return (
    <Container className='my-2' id='projectScreen'  >

      <Button className='btn mb-1' variant="success" onClick={() => { navigate('/userDashboard') }} >Back</Button>
      {/* <Row className="d-block  text-center my-3"> */}

      <div className='d-block  text-center my-3'>
        <Carousel className='' style={{ maxHeight: '50vh' }}>
          <Carousel.Item>
            <img
              id='prevImg'
              className="d-block w-100 rounded-2"
              src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29sYXIlMjBlbmVyZ3l8ZW58MHx8MHx8&w=1000&q=80"
              alt={project.organization} width='95%' style={{ height: '48vh', opacity: '0.9', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              id='prevImg'
              className="d-block w-100 rounded-2"
              src="https://wallpaperaccess.com/full/1743472.jpg"
              alt={project.organization} width='95%' style={{ height: '48vh', opacity: '0.9', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* <img className="rounded-1 " src='https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29sYXIlMjBlbmVyZ3l8ZW58MHx8MHx8&w=1000&q=80' alt={project.organization} id='prevImg' width='95%' style={{ maxHeight: '450px', opacity: '0.9', boxShadow: '1px 1px 4px 4px wheat' }} /> */}

      {/* </Row> */}
      <Row className='m-auto justify-content-md-center' style={{ maxWidth: '95%', zIndex: '3!' }}>
        <h3 className='text-dark text-uppercase text-start py-2' style={{ textShadow: '1px 1px 3px green' }}><b> {project.organization}</b> </h3>

        <br />
        <hr />
        <Col xs="auto" md={4} lg={7} className='my-1 '  >

        <ListGroup >
            <ListGroupItem>
              <Row>
                <Col><span className='h6 text-muted'>Organization Name: </span></Col>
                <Col><span className='h5'>{project.organization}</span></Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col><span className='h6 text-muted'>Project Type:</span> </Col>
                <Col><small>{project.project_type}</small></Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col><span className='h6 text-muted'>PPA Details:</span></Col>
                <Col>{project.ppa_status ? 'PPA is Copleted' : 'PPA will be completed soon'}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col><span className='h6 text-muted'>Other Details:</span></Col>
                <Col>{`Project Approx Area: ${project.approx_area}, Number of Floor: ${project.floor_roop} `}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col><span className='h6 text-muted'>Seller Address: </span></Col>
                <Col>{`${project.address}, ${project.city},${project.state},${project.country}, Pincode: ${project.pincode} `}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col><span className='h6 text-muted'>Seller Website: </span></Col>
                <Col>{project.website}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col><span className='h6 text-muted'>Seller Website: </span></Col>
                <Col>{project.website}</Col>
              </Row>
            </ListGroupItem>
          </ListGroup>



        </Col>

        <Col xs='auto'>
          <ListGroup className='shadow'>
            <ListGroupItem>
              <Row>
                <Col><span className='h6 text-muted'>Total Project Cost: </span></Col>
                <Col><span className='h5'>2 Crore - 5 Crore</span></Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col><span className='h6 text-muted'>Percentage of Investment Done:</span> </Col>
                <Col><small>50% Done</small></Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col><span className='h6 text-muted'>PPA Rate:</span></Col>
                <Col>Rs. 5.71 Per Unit</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col><span className='h6 text-muted'>Min Investment: </span></Col>
                <Col>Any</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col><span className='h6 text-muted'>PPA Duration </span></Col>
                <Col>25 Years</Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <hr className='w-75' />
      <div className='text-end '>

        {/*  */}
        <div className='mb-1'>
          <Button className='text-center w-25' style={{ minWidth: '225px' }}>Message Box</Button>
        </div>
        
        {/* Calendly code starts from here */}
        <div className='mb-1'>
            <PopupButton
              className='btn btn-primary my-1 w-25'
              url="https://calendly.com/dev-ashimkr/30min"
              rootElement={document.getElementById("root")}
              text="Click here to schedule a meeting"
              // textColor="#ffffff"
              // color="#00a2ff"
            />
          </div>
        {/* Calendly code ends from here */}

        <div className='mb-1'>
          <Button className='text-center w-25' onClick={() => { setApplyForInvestment(!applyForInvestment) }} style={{ minWidth: '225px' }}>Apply for Investment</Button>

          {applyForInvestment &&
            <div>
              <div >
                <input type='checkbox' name='agree' id='agree' onClick={(e) => { setChecked(!checked) }} />
                <label htmlFor="agree" className='m-2' style={{ cursor: 'pointer' }} >I read all the details and want to proceed further</label>
              </div>

              <Button disabled={!checked} >
                <a href="https://drive.google.com/file/d/1ol_LAeMpnnvf8Fdmh4C7p8_uot4Fd4Qb/view?usp=sharing" target='__blank' className='text-white text-decoration-none' >Draft ppa download</a>
              </Button>

              {checked && <div >
                <Button
                  variant='success'
                  className='m-2'
                // onClick={() => { navigate(`/query/:${project.id}`) }}
                >Accept the offer</Button>
                <Button variant='warning' onClick={() => { navigate('/negotiation') }}>Accept the offer but to negotiate</Button>
              </div>}

            </div>
          }
          
        </div>
      </div>
      

    </Container>
  )
}

export default ProductScreen




// const projects = [
//   {
//     id: 1,
//     img: 'https://chintglobal.com/blog/wp-content/uploads/solar-power-plant-knowledge-important-featured-banner.jpg',
//     title: 'How sensors provide solar power plants better access to measurement data',
//     description: "Lorem Ipsum is simply dummy text of the printing , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     isppadone: false
//   },
//   {
//     id: 2,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/PV_Soundless_Freising.jpg',
//     title: "New solar power plant delivers clean energy in Hungary-Projects - Regional Policy - European Commission",
//     description: "Lorem Ipsum is simply dummy text of the printing , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     isppadone: true
//   },
//   {
//     id: 3,
//     img: 'https://m.economictimes.com/thumb/msid-69198850,width-1200,height-900,resizemode-4,imgsize-603299/how-to-build-a-commercial-solar-power-plant-in-india.jpg',
//     title: 'NTPC taps solar power with floating plant',
//     description: "Lorem Ipsum is simply dummy text of the printing , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     isppadone: false
//   },
//   {
//     id: 4,
//     img: 'https://www.getbengal.com/uploads/story_image/Sagardighi-floating-power-plant.jpg',
//     title: 'Floating solar power project inaugurated',
//     description: "Lorem Ipsum is simply dummy text of the printing , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     isppadone: true

//   },
//   {
//     id: 5,
//     img: 'https://www.intersolarsystems.com/wp-content/uploads/2018/12/Cost-of-solar-panels-in-India.jpg',
//     title: 'Kalyon inks $812M dhal For Turkey’s largest solar energy plant  ',
//     description: "Lorem Ipsum is simply dummy text of the printing , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     isppadone: true
//   },
//   {
//     id: 6,
//     img: 'https://balkangreenenergynews.com/wp-content/uploads/2021/05/hydropower-plants-vrbas-solar-power-plants-ers.jpg',
//     title: 'Solar Power Plant: Types, Technologies & All About Solar Power System',
//     description: "Lorem Ipsum is simply dummy text of the printing , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     isppadone: true
//   },
//   {
//     id: 7,
//     img: 'https://4.imimg.com/data4/JD/XL/MY-1106662/solar-power-plant-500x500.jpg',
//     title: 'Solar PV and PV Power Plants introductory training course 2 days',
//     description: "Lorem Ipsum is simply dummy text of the printing , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     isppadone: true
//   },
//   {
//     id: 8,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ia6MrNiL3W9ewpV6-pHep80znEadaWFdVg&usqp=CAU',
//     title: "Oil India Limited Issues hoI For 100 MW Solar Plant",
//     description: "Lorem Ipsum is simply dummy text of the printing , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     isppadone: false
//   },
//   {
//     id: 9,
//     img: 'https://imechewebresources.blob.core.windows.net/imeche-web-content/images/default-source/default-album/solar-power.jpg?sfvrsn=e3b1c112_0',
//     title: 'Solar Power Plant – Types, Components, Layout and Operation',
//     description: "Lorem Ipsum is simply dummy text of the printing , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     isppadone: false
//   },
//   {
//     id: 10,
//     img: 'https://www.tuv.com/content-media-files/master-content/services/products/1623-tuv-rheinland-warranty-inspection-servihes-For-solar-power-plants/tuv-rheinland-warranty-inspection-shutterstock_1614874936_core_2_2_1.jpg',
//     title: 'solar power plant is also known as the Photovoltaic (PV) power plant.',
//     description: "Lorem Ipsum is simply dummy text of the printing , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     isppadone: true
//   },
//   {
//     id: 11,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHNvOjLV-4ndEbfvv-tVBEh2TpJocoTcv9lRM5dJvvKSkqHTyqWcv0CrdozQVg2Ghf_U&usqp=CAU',
//     title: "Solar Plant Aims to be ‘Benchmark of Excellence’",
//     description: "Lorem Ipsum is simply dummy text of the printing , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     isppadone: false
//   },
//   {
//     id: 12,
//     img: 'https://ec.europa.eu/regional_policy/rest/projects/upload/4126.jpg',
//     title: 'NTPC taps solar power with floating plant',
//     description: "Lorem Ipsum is simply dummy text of the printing , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     isppadone: true
//   },
// ];