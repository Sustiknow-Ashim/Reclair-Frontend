import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
// import { Country, State } from 'country-state-iso';
import { useEffect, useState } from 'react';
import worldMapData from 'city-state-country';
import axios from 'axios';
import { InlineWidget, PopupButton, PopupWidget } from 'react-calendly';

function AddNewProjectQueryScreen() {
    const navigate = useNavigate();

    //all below states used for form fields
    const [org, setOrgName] = useState('');
    // const [org_type, setOrgType] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [pin, setPin] = useState('');
    const [website, setWebsite] = useState('');
    // const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    // const [projectType, setprojectType] = useState('');
    // const [approxArea, setApproxArea] = useState('');
    const [floorOfRoof, setFloorOfRoof] = useState('');
    // const [meetingDate, setMeetingDate] = useState('');
    const [monthlyConsume, setMonthlyConsume] = useState('');
    const [lastPaymentAmmount, setLastPaymentAmmount] = useState('');
    // variable for form display(for selected dropdown)
    const [dropdownSelected, setDropdownSelected] = useState(false);
    const [userInterest, setUserInterest] = useState('')


    // for country list worldMapData library
    const [countryList, setCountryList] = useState([]);
    const [stateList, setStateList] = useState([]);
    useEffect(() => {
        setCountryList(worldMapData.getAllCountries());
    }, [])

    const FormSaveHandler = async () => {
        // console.log( org, country, state, city, address, pin, website, email, floorOfRoof, monthlyConsume, lastPaymentAmmount, userInterest)
        const response = await axios.post('http://localhost:3300/addquery', {
            org, country, state, city, address, pin, website, email, floorOfRoof, monthlyConsume, lastPaymentAmmount, userInterest,
            token: localStorage.getItem('token'),
            id: localStorage.getItem('id')
        });
        response.data.success ? alert(response.data.message) : alert(response.data.message)
        navigate('/allquery')
    }

    return (
        <Container className='text-start my-4 shadow rounded-4 p-3 bg-body' style={{ maxWidth: '800px' }} >
            <Button className='text-center' onClick={() => { navigate('/allquery') }}>View all queries</Button>
            <h2 className='text-center text-muted text-decoration-underline mb-4'>Submit a New Project Query</h2>
            <Form className=''>
                {/* Dropdown menu */}
                <Form.Group className="mb-3">
                    <Form.Label>I'm Intrested to put a Solar Project on</Form.Label>
                    <Form.Select onChange={(e) => { setUserInterest(e.target.value); setDropdownSelected(true) }}>
                        <option></option>
                        <option value='Rooftop or Ground based'>Rooftop based</option>
                        <option value='Commercial'>Ground based</option>
                    </Form.Select>
                </Form.Group>

                {/* All query form field */}
                {dropdownSelected && <>
                    <Form.Group className="mb-3 ">
                        <Form.Control type="text" value={org} onChange={(e) => { setOrgName(e.target.value) }} placeholder="Organization Name"/>
                    </Form.Group>
                    {/* <Form.Group className="mb-3">
                        <Form.Control type="text" value={org_type} onChange={(e) => { setOrgType(e.target.value) }} placeholder="Organization Type" />
                    </Form.Group> */}
                    <Form.Group className="mb-3">
                        <Form.Select value={country} onChange={(e) => { setStateList(worldMapData.getAllStatesFromCountry(e.target.value)); setCountry(e.target.value) }}>

                            <option value={''}>Select Country</option>
                            {
                                countryList.map((data) => {
                                    return (
                                        <option value={data.name} key={data.name}>{data.name}</option>
                                    )
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Select value={state} onChange={(e) => { setState(e.target.value)}}>
                            <option value={''}>Select State</option>
                            {
                                stateList.map((data) => {
                                    return (
                                        <option value={data.name} key={data.name}>{data.name}</option>
                                    )
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Control type="text" value={city} onChange={(e) => { setCity(e.target.value) }} placeholder="city" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Control type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder="Address" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="number" value={pin} onChange={(e) => { setPin(e.target.value) }} placeholder="Pin" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" value={website} onChange={(e) => { setWebsite(e.target.value) }} placeholder="Website" />
                        <Form.Text>Optional field</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    </Form.Group>

                    {/* <Form.Group className="mb-3">
                        <Form.Control type="email" value={approxArea} onChange={(e) => { setApproxArea(e.target.value) }} placeholder="Approximate Area" />
                    </Form.Group> */}

                    <Form.Group className="mb-3">
                        <Form.Control type="number" value={floorOfRoof} onChange={(e) => { setFloorOfRoof(e.target.value) }} placeholder="Floor of Roof" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        {/* <Form.Label>Meeting Date</Form.Label>
                        <Form.Control type="datetime-local" value={meetingDate} onChange={(e) => { setMeetingDate(e.target.value); console.log(e.target.value) }} placeholder="Meeting Date" /> */}
                            <PopupButton
                                url="https://calendly.com/dev-ashimkr/30min"
                                rootElement={document.getElementById("root")}
                                text="Select Time and Date to Discuss about the Project with Reclair"
                                // textColor="#ffffff"
                                // color="#00a2ff"
                                className='bg-secondary border-0 p-2 rounded-2 text-light w-100 '
                            />
                            <Form.Text>You can also suhedule a meeting after submitted the query</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" value={monthlyConsume} onChange={(e) => { setMonthlyConsume(e.target.value) }} placeholder="Average Monthly Electricity Bill Consume" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" value={lastPaymentAmmount} onChange={(e) => { setLastPaymentAmmount(e.target.value) }} placeholder="Last Electricity Bill Payment Amount" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Button className='m-3 h-75' onClick={() => { FormSaveHandler() }}>Save and next</Button>
                        {/* <Button className='m-3 h-75' onClick={() => { saveDraftHandler() }}>Save as draft</Button> */}
                    </Form.Group> </>}
            </Form>
        </Container>
    );
}

export default AddNewProjectQueryScreen;