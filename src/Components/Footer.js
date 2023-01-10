import React from 'react'
import { Container,Row,Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import './Style.css'

const Footer = () => {
  return (
    <>
        <div className=' footer mt-4' varient='light' >
            <Row style={{height:'65vh', width:'100%'}}>
                <Col xs={12} md={6} className='footer bg-info text-light text-start'  >
                    <h1>About The Company</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc</p>
                </Col>
                <Col xs={12} md={6} >
                    <h2>Contact Us</h2>
                    
                            <Row className='my-1'>
                                <Col><i className="fa-solid fa-envelope px-1"></i>Email</Col>
                                <Col> <strong><a href="mailto:rabin@reclairenergy.com" className='text-decoration-none text-warning'>rabin@reclairenergy.com</a></strong></Col>
                                <hr />
                            </Row>
                            <Row className='py-1'>
                                <Col><i className="fa-solid fa-phone px-1"></i>Phone</Col>
                                <Col> <strong><a href="tel:08902656796" className='text-decoration-none text-warning'>+91-8902656796</a></strong></Col>
                                <hr />
                            </Row>
                            <Row className='py-1'>
                                <Col><i className="fa-solid fa-location-dot px-1"></i>Registered Office:</Col>
                                <Col><strong>369, Shantipally, Purba Sree Pally, Kasba, Kolkata, West Bengal 700107</strong></Col>
                                <hr />
                            </Row>
                            <Row className='py-1'>
                                <Col><i className="fa-solid fa-location-dot px-1"></i>Corporate Office:</Col>
                                <Col><strong>369, Shantipally, Purba Sree Pally, Kasba, Kolkata, West Bengal 700107</strong></Col>
                            </Row>
                </Col>
            </Row>
            <div className='bg-warning p-2 text-center'> Copyright &#169; Reclair</div>
        </div>
    </>
  )
}

export default Footer