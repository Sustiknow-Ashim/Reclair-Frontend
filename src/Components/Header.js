import { Image, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { deleteToken } from '../Actions/authToken';
import logo from '../images/logo.png'

function Header({toggleLoginStatus}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () =>{
    dispatch(deleteToken());
    toggleLoginStatus();
    localStorage.clear()
  }
  const type = localStorage.getItem('type');
  const showQueryButton = type =='organizer'?true:false;
  // console.log(showQueryButton)
  return (
    <Navbar collapseOnSelect expand="lg"  variant="light" style={{height:'83px',backgroundColor:'#ffffff' , boxShadow:' 0px 7px 37px 3px rgba(166,154,166,1)'}}>
      <Container>
        <Navbar.Brand className='px-2' onClick={() => { navigate('/') }}><Image src={logo} alt='Reclair Energy' width='160px' height='50px' style={{cursor:'pointer'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            {/* <Nav.Link onClick={()=>{navigate('/aboutus')}}>About us</Nav.Link> */}
            <Nav.Link className='fw-bold' onClick={() => { navigate('/userDashboard') }}>Dashboard</Nav.Link>
            
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Projects"
              className='fw-bold'
            >
              <NavDropdown.Item className='fw-semibold' onClick={() => { navigate('/myProjects') }}>My Projects</NavDropdown.Item>
              <NavDropdown.Item className='fw-semibold' onClick={() => { navigate('/allProjects') }}>All Projects</NavDropdown.Item>
              
            </NavDropdown>

          </Nav>
          {showQueryButton ? <Nav.Link onClick={()=>{navigate('/query')}} className='btn btn-primary mx-5 text-light p-1'>Submit A Query</Nav.Link>: <Nav.Link className='btn btn-primary mx-5 text-light p-1'>Invesment</Nav.Link>}
          <Nav.Link className=' mx-1 p-1'><i className="fa-solid fa-xl fa-circle-question mx-2"></i></Nav.Link>
          <Nav.Link className=' mx-1 p-1'><i className="fa-solid fa-bell fa-xl mx-2"></i></Nav.Link>
          {/* User Avatar Dropdown */}
          <NavDropdown title={
            <i className="fa-solid fa-user fa-xl mx-2" ></i>
          }  id="collasible-nav-dropdown" style={{minWidth:'100px'}}>
            <NavDropdown.Item className='bg-info ' >{localStorage.getItem('type')}</NavDropdown.Item>
            <hr />
            <NavDropdown.Item  onClick={()=>{logoutHandler()}}>Log out</NavDropdown.Item>


            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}

          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;