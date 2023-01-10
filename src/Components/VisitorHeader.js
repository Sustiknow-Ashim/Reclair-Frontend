import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'
import { useNavigate } from "react-router-dom";
import { Button, Image } from 'react-bootstrap';

function VisitorHeader() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar variant="light" className='' style={{height:'83px',backgroundColor:'#ffffff' , boxShadow:' 0px 7px 37px 3px rgba(166,154,166,1)'}}>
                <Container>
                <Navbar.Brand className='px-2' onClick={() => { navigate('/') }} style={{cursor:'pointer'}}><Image src={logo} alt='Reclair Energy' width='160px' height='50px' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Navbar.Text>
                            <Button variant='success' onClick={()=>{ navigate('/login') }} >SignIn</Button>
                            {/* <Button variant='success' className='mx-1'>SignUp</Button> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default VisitorHeader;