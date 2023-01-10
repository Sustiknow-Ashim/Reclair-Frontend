import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Container, InputGroup, Form } from 'react-bootstrap'
import axios from 'axios'
import NegotiationPopup from '../Components/NegotiationPopup';
import { render } from '@testing-library/react';

const NegotiationScreen = () => {
    const [userInput, setUserInput] = useState('');
    // const [clientData, setClientData] = useState([]);
    const [adminData, setAdminData] = useState('6');
    const [chances, setChances] = useState(5);
    const [offeredPrice, setOfferedPrice] = useState(null);

    const [accepted, setAccepted] = useState(false);


    const submitHandler = () => {
        console.log(userInput)
        // Negotiation Algorithm starts from here
        if (userInput < 0 || userInput == '') {
            alert('Invalid Input!! Please Enter a correct value')
            // render(<NegotiationPopup />)
        } else {


            const originalRate = 6;
            const maxLowerRate = Number((originalRate - originalRate / 10).toFixed(2));
            const minMaxDifference = originalRate - maxLowerRate;
            const step = (minMaxDifference / 10).toFixed(2);

            const rates = new Array(11);
            rates[0] = maxLowerRate;

            for (let i = 1; i < rates.length; i++) {
                rates[i] = Number((Number(rates[i - 1]) + Number(step)).toFixed(2));
            }
            // Algorithm ends here



            console.log(rates)
            console.log('chances length', chances)


            // Generate next output code
            if (chances === 5) {
                if (userInput < rates[0]) {
                    setAdminData(rates[9]);
                    setChances(chances - 1);
                } else if (userInput >= rates[0] && userInput < rates[1]) {
                    setChances(chances - 1);
                    setAdminData(rates[2]);
                } else if (userInput >= rates[1] && userInput < rates[2]) {
                    setChances(chances - 1);
                    setAdminData(rates[3]);
                } else if (userInput >= rates[2] && userInput < rates[3]) {
                    setChances(chances - 1);
                    setAdminData(rates[4]);
                }else if (userInput >= rates[3] && userInput < rates[4]) {
                    setChances(chances - 1);
                    setAdminData(rates[5]);
                } else if (userInput >= rates[4] && userInput < rates[5]) {
                    setChances(chances - 1);
                    setAdminData(rates[6]);
                } else if (userInput >= rates[5] && userInput < rates[6]) {
                    setChances(chances - 1);
                    setAdminData(rates[7]);
                } else if (userInput >= rates[6] && userInput < rates[7]) {
                    setChances(chances - 1);
                    setAdminData(rates[8]);
                }else if (userInput >= rates[7] && userInput < rates[8]) {
                    setChances(chances - 1);
                    setAdminData(rates[8]);
                } else if (userInput >= rates[8] && userInput < (rates[10] * 2)) {
                    setChances(chances - 1);
                    setAdminData(userInput);
                    alert('price Accepted')
                } else{
                    alert('please enter a valid input')
                }
            }


            if (chances === 4) {
                if (userInput < rates[0]) {
                    setAdminData(rates[8]);
                    setChances(chances - 1);
                } else if (userInput >= rates[0] && userInput < rates[1]) {
                    setChances(chances - 1);
                    setAdminData(rates[2]);
                } else if (userInput >= rates[1] && userInput < rates[2]) {
                    setChances(chances - 1);
                    setAdminData(rates[3]);
                } else if (userInput >= rates[2] && userInput < rates[3]) {
                    setChances(chances - 1);
                    setAdminData(rates[4]);
                }else if (userInput >= rates[3] && userInput < rates[4]) {
                    setChances(chances - 1);
                    setAdminData(rates[5]);
                } else if (userInput >= rates[4] && userInput < rates[5]) {
                    setChances(chances - 1);
                    setAdminData(rates[6]);
                } else if (userInput >= rates[5] && userInput < rates[6]) {
                    setChances(chances - 1);
                    setAdminData(rates[7]);
                } else if (userInput >= rates[6] && userInput < rates[7]) {
                    setChances(chances - 1);
                    setAdminData(rates[8]);
                }else if (userInput >= rates[7] && userInput < rates[8]) {
                    setChances(chances - 1);
                    setAdminData(rates[8]);
                } else if (userInput >= rates[8] && userInput < (rates[10] * 2)) {
                    setChances(chances - 1);
                    setAdminData(userInput);
                    alert('price Accepted')
                } else{
                    alert('please enter a valid input')
                }
            }

            if (chances === 3) {
                if (userInput < rates[0]) {
                    setAdminData(rates[7]);
                    setChances(chances - 1);
                } else if (userInput >= rates[0] && userInput < rates[1]) {
                    setChances(chances - 1);
                    setAdminData(rates[2]);
                } else if (userInput >= rates[1] && userInput < rates[2]) {
                    setChances(chances - 1);
                    setAdminData(rates[3]);
                } else if (userInput >= rates[2] && userInput < rates[3]) {
                    setChances(chances - 1);
                    setAdminData(rates[4]);
                }else if (userInput >= rates[3] && userInput < rates[4]) {
                    setChances(chances - 1);
                    setAdminData(rates[5]);
                } else if (userInput >= rates[4] && userInput < rates[5]) {
                    setChances(chances - 1);
                    setAdminData(rates[6]);
                } else if (userInput >= rates[5] && userInput < rates[6]) {
                    setChances(chances - 1);
                    setAdminData(rates[7]);
                } else if (userInput >= rates[6] && userInput < rates[7]) {
                    setChances(chances - 1);
                    setAdminData(rates[8]);
                }else if (userInput >= rates[7] && userInput < rates[8]) {
                    setChances(chances - 1);
                    setAdminData(rates[8]);
                } else if (userInput >= rates[8] && userInput < (rates[10] * 2)) {
                    setChances(chances - 1);
                    setAdminData(userInput);
                    alert('price Accepted')
                } else{
                    alert('please enter a valid input')
                }
            }

            if (chances === 2) {
                if (userInput < rates[0]) {
                    setAdminData(rates[7]);
                    setChances(chances - 1);
                } else if (userInput >= rates[0] && userInput < rates[1]) {
                    setChances(chances - 1);
                    setAdminData(rates[2]);
                } else if (userInput >= rates[1] && userInput < rates[2]) {
                    setChances(chances - 1);
                    setAdminData(rates[3]);
                } else if (userInput >= rates[2] && userInput < rates[3]) {
                    setChances(chances - 1);
                    setAdminData(rates[4]);
                }else if (userInput >= rates[3] && userInput < rates[4]) {
                    setChances(chances - 1);
                    setAdminData(rates[5]);
                } else if (userInput >= rates[4] && userInput < rates[5]) {
                    setChances(chances - 1);
                    setAdminData(rates[6]);
                } else if (userInput >= rates[5] && userInput < rates[6]) {
                    setChances(chances - 1);
                    setAdminData(rates[7]);
                } else if (userInput >= rates[6] && userInput < rates[7]) {
                    setChances(chances - 1);
                    setAdminData(rates[8]);
                }else if (userInput >= rates[7] && userInput < rates[8]) {
                    setChances(chances - 1);
                    setAdminData(rates[8]);
                } else if (userInput >= rates[8] && userInput < (rates[10] * 2)) {
                    setChances(chances - 1);
                    setAdminData(userInput);
                    alert('price Accepted')
                } else{
                    alert('please enter a valid input')
                }
            }

            if (chances === 1) {
                if (userInput < rates[0]) {
                    setAdminData(rates[7]);
                    setChances(chances - 1);
                } else if (userInput >= rates[0] && userInput < rates[1]) {
                    setChances(chances - 1);
                    setAdminData(rates[2]);
                } else if (userInput >= rates[1] && userInput < rates[2]) {
                    setChances(chances - 1);
                    setAdminData(rates[3]);
                } else if (userInput >= rates[2] && userInput < rates[3]) {
                    setChances(chances - 1);
                    setAdminData(rates[4]);
                }else if (userInput >= rates[3] && userInput < rates[4]) {
                    setChances(chances - 1);
                    setAdminData(rates[5]);
                } else if (userInput >= rates[4] && userInput < rates[5]) {
                    setChances(chances - 1);
                    setAdminData(rates[6]);
                } else if (userInput >= rates[5] && userInput < rates[6]) {
                    setChances(chances - 1);
                    setAdminData(rates[7]);
                } else if (userInput >= rates[6] && userInput < rates[7]) {
                    setChances(chances - 1);
                    setAdminData(rates[8]);
                }else if (userInput >= rates[7] && userInput < rates[8]) {
                    setChances(chances - 1);
                    setAdminData(rates[8]);
                } else if (userInput >= rates[8] && userInput < (rates[10] * 2)) {
                    setChances(chances - 1);
                    setAdminData(userInput);
                    alert('price Accepted')
                } else{
                    alert('please enter a valid input')
                }
            }


        }
    }

    console.log('chances length outside the function', chances)
    return (
        <Container className='my-3'>
            <h3 className=' text-start my-4'>Original Price Per Unit : 6rs</h3>

            <Row >
                <Col>
                    <h3>Your offer</h3>
                    <div className='w-75 my-4 bg-light text-center rounded-3 shadow-sm' style={{ height: '15vh', overflow: 'auto' }}>
                        <h4>{userInput}</h4>
                    </div>
                    <InputGroup className="mb-3 w-75">
                        <Form.Control
                            placeholder="Your's amount"
                            type='number'
                            step='0.1'
                            value={userInput}
                            onChange={(e) => { setUserInput(e.target.value) }}
                        // onKeyDown={(e) => { if(e.code == 'Enter')setUserInput(e.target.value)  }}
                        />
                        <Button variant="primary" onClick={() => { submitHandler() }}>
                            Submit
                        </Button>
                    </InputGroup>
                </Col>

                <Col>
                    <h3>Reclair's offer</h3>
                    <div className='w-75 my-4 bg-light text-center p-3 rounded-3 shadow-sm' style={{ height: '15vh', overflow: 'auto' }}><h3>{adminData}</h3></div>
                </Col>
            </Row>
            {
                accepted ? <h1 className='text-center text-danger'>Deal closed at rate 5.5rs/unit</h1> : <div className='text-center'>
                    <h3 className='text-muted'>Chances Remain: {chances}</h3>
                    {/* <Button size='lg' variant='success' className='m-2' onClick={() => { setAccepted(true) }}  >Accept these price</Button>
                    <Button size='lg' variant='danger' className='m-2'  >Don't accept these price</Button> */}
                </div>
            }


            <div className='mt-4'>
                <h4 >Rules</h4>
                <ul>
                    <li className='pt-2 pe-1 text-muted'>You have only 5 chance to bargain</li>
                </ul>

            </div>
        </Container>
    )
}

export default NegotiationScreen
