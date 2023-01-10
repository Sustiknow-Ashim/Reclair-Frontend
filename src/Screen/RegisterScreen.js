import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { Auth, LoginCredentials } from 'two-step-auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { passwordStrength } from 'check-password-strength';
import { validate } from 'email-validator';

const RegisterScreen = () => {
    const navigate = useNavigate();


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');
    const [organization, setOrganization] = useState('');


    const [passStrength, setPassStrength] = useState('');
    const [repeatePassword, setRepeatePassword] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState('');


    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [userEnteredOtp, setUserEnteredOtp] = useState('');


    // Code start here to check password strength
    useEffect(() => {
        const strength = passwordStrength(password).value;
        setPassStrength(strength);
    }, [password])
    // Code end here to check password strength

    useEffect(() => {
        setIsEmailValid(validate(email));
    }, [email])


    const onSubmitHandler = () => {

        password !== repeatePassword ? alert("password doesn't match") : (firstName.length >= 2 && lastName.length >= 2 && isEmailValid && phone.length > 9 && category.length > 3 && organization.length > 3) ? varifyUser() : alert('Please enter valid input')

        async function varifyUser() {
            setOtpSent(true);

            const { data } = await axios.post('http://localhost:3300/verifyUserEmail', {
                email: email
            });

            data.success ? setOtp(data.otp) : setOtp(false);

            console.log(data);
            // data.success ? navigate('/login') : alert(data.message);
        }
    }


    const addUserAfterVerifingOtp = async () => {
        
        if (userEnteredOtp === otp) {

            const { data } = await axios.post('http://localhost:3300/adduser', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phone,
                category: category,
                organization: organization,
                password: password,
            });

            data.success ? navigate('/login') : alert(data.message);

            console.log(data);

        } else {
            alert("Otp didn't matched")
        }
    }


    return (
        <Container className='my-3 justify-content-start'>
            {otpSent ? <Form.Group className="mb-4 justify-content-center shadow-lg rounded-3 p-3 bg-light" controlId="formBasicEmail">
                <Form.Label className='text-muted'>Enter Your otp </Form.Label>
                <Row className='mx-auto'>
                    <Col>
                        <Form.Control onChange={(e) => { setUserEnteredOtp(e.target.value) }} value={userEnteredOtp} type="number" placeholder="Enter otp" />
                    </Col>
                    <Col>
                        <Button onClick={() => { addUserAfterVerifingOtp() }}>Verify otp</Button>
                    </Col>
                    <h5 className='text-center text-danger my-4' style={{ cursor: 'pointer' }} onClick={() => { navigate('/login') }}>Already have account? login here</h5>
                </Row>

            </Form.Group> :

                <Container className='text-start shadow-lg rounded-3 p-3 bg-light' style={{ maxWidth: '750px' }} >
                    <Form>
                        <h1 className='text-center text-success'>Welcome to Reclair</h1>
                        <h3 className='text-start text-dark my-2 text-muted'>Create an account</h3>
                        <Row >
                            <Col className="my-3" xs='12' lg='6'>
                                <Form.Group >
                                    <Form.Control type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder="First Name" />
                                </Form.Group>
                            </Col>
                            <Col xs='12' lg='6' className="my-3">
                                <Form.Group >
                                    <Form.Control type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} placeholder="Last Name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row >
                            <Col xs='12' lg='6' className="my-3">
                                <Form.Group>
                                    <Form.Control type="mail" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email id" />
                                    <Form.Text className='text-danger'>{isEmailValid ? "" : "Please enter a valid email"}</Form.Text>

                                </Form.Group>
                            </Col>

                            <Col xs='12' lg='6' className="my-3">
                                <Form.Group as={Col} >
                                    <Form.Control type="number" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Phone Number" />
                                </Form.Group>
                            </Col>
                        </Row>


                        <Row >
                            <Col xs='12' lg='6' className="my-3">
                                <Form.Group as={Col}>
                                    <Form.Select value={category} onChange={(e) => { setCategory(e.target.value); console.log(e.target.value) }}>
                                        <option>Select Category</option>

                                        <option value='visitor'>Visitor</option>
                                        <option value='investor'>Investor</option>
                                        <option value='organizer'>Organization</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col xs='12' lg='6' className="my-3">
                                <Form.Group as={Col} >
                                    <Form.Control type="text" value={organization} onChange={(e) => { setOrganization(e.target.value) }} placeholder="Organization Name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row >
                            <Col xs='12' lg='6' className="my-3">
                                <Form.Group as={Col}>
                                    <Form.Control type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='enter a password' />
                                    <Form.Text style={{ color: passStrength === 'Too weak' ? 'red' : passStrength === 'Weak' ? '#cc5200' : passStrength === 'Medium' ? '#b38600' : 'green' }}>
                                        {password ? passStrength : ''}</Form.Text>
                                </Form.Group>
                            </Col>

                            <Col xs='12' lg='6' className="my-3">
                                <Form.Group as={Col}>
                                    <Form.Control type='password' value={repeatePassword} onChange={(e) => { setRepeatePassword(e.target.value) }} placeholder='repete password' />
                                </Form.Group>
                            </Col>
                        </Row>


                        {/* Create Account button code */}
                        <Button variant="primary" onClick={() => { onSubmitHandler() }} className='my-3 align-start ' size='lg' >
                            Create Account
                        </Button>
                        <h5 className='text-center text-danger' style={{ cursor: 'pointer' }} onClick={() => { navigate('/login') }}>Already have account? login here</h5>


                    </Form>
                </Container >}
        </Container>
    );
}

export default RegisterScreen;