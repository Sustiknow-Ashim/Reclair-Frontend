import Header from './Components/Header'
import Main from './Components/Main'
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProjectScreen from './Screen/ProjectScreen'
import RegisterScreen from './Screen/RegisterScreen';
import AboutUsScreen from './Screen/AboutUsScreen';
import ProjectList from './Screen/UserDashboard';
import LoginScreen from './Screen/LoginScreen';
import MyProjectScreen from './Screen/MyProjectScreen';
import AllProjectScreen from './Screen/AllProjectScreen';
import VisitorHeader from './Components/VisitorHeader';
import { useDispatch, useSelector } from 'react-redux';
import ProjectQueryScreen from './Screen/AddNewProjectQueryScreen';
import QuerieTable from './Screen/QuerieTable';
import SubmitProjectQuery from './Screen/SubmitProjectQuery';
import SigninUsingOtpScreen from './Screen/SigninUsingOtpScreen';
import ForgetPasswordScreen from './Screen/ForgetPasswordScreen';
import ReEnterPasswordScreen from './Screen/ReEnterPasswordScreen';
import AdminLoginScreen from './AdminScreen/AdminLoginScreen';
import AdminDashboard from './AdminScreen/AdminDashboard';
import QueryById from './Screen/QueryById';
import NegotiationScreen from './Screen/NegotiationScreen';
import AdminNegotiationScreen from './AdminScreen/AdminNegotiationScreen';
import AdminQueryById from './AdminScreen/AdminQueryById';
import AdminAddNewProject from './AdminScreen/AdminAddNewProject';
import UserDashboard from './Screen/UserDashboard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddNewProjectQueryScreen from './Screen/AddNewProjectQueryScreen';
import OrganizerDashboard from './Screen/OrganizerDashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  //getting token from redux
  const getTokenFromRedux = useSelector(state => { return state.token });
  const authToken = getTokenFromRedux || localStorage.getItem('token');


  // useEffect(() => {
  //   console.log('app component useEffect render')

  //   //function to check jwt token authtication
  //   const authTokenCheck = async () => {
  //     console.log('authTokenCheck')
  //     const response = await axios.post('http://localhost:3300/authUserToken', {
  //       token: authToken, id: localStorage.getItem('id')
  //     })
  //     response.data.isAuthenticated ? setIsLoggedIn(true) : setIsLoggedIn(false);

  //   }
    
  //   if (authToken) authTokenCheck()

  // }, [authToken])

  //getting the type bcz different page views for investor, organizor and visitor
  const type = localStorage.getItem('type');


  //creating a function for logout by toggling isLoggedIn state from Header component
  // const toggleLoginStatus = () => { setIsLoggedIn(!isLoggedIn) }


  return (
    <div className="App">
      {true ? <Header  /> : <VisitorHeader />}
      <Routes>
        <Route path="/" element={<Main /> } exact />
        <Route path='/register' element={isLoggedIn ? <Main /> : <RegisterScreen />} />
        <Route path='/login' element={isLoggedIn ? <ProjectList /> : <LoginScreen />} exact/>
        <Route path='/userDashboard' element={isLoggedIn && type == 'investor' ? <UserDashboard /> : isLoggedIn && type == 'organizer' ? <OrganizerDashboard /> : <LoginScreen />} exact/>
        <Route path="/project/:id" element={isLoggedIn ? <ProjectScreen /> : <LoginScreen />} />
        <Route path="/aboutus" element={isLoggedIn ? <AboutUsScreen /> : <LoginScreen />} />
        <Route path='/myProjects' element={isLoggedIn ? <MyProjectScreen /> : <LoginScreen />} />
        <Route path='/allProjects' element={isLoggedIn ? <AllProjectScreen /> : <LoginScreen />} />
        <Route path='/signinusingotp' element={isLoggedIn ? <AllProjectScreen /> : <SigninUsingOtpScreen />} />
        <Route path='/forgetpassword' element={isLoggedIn ? <AllProjectScreen /> : <ForgetPasswordScreen />} />
        <Route path='/renterpassword' element={<ReEnterPasswordScreen />} />
        <Route path='/query' element={isLoggedIn && type == 'organizer' ? <AddNewProjectQueryScreen /> : <LoginScreen />} />
        <Route path='/query/:id' element={isLoggedIn && type == 'organizer' ? <QueryById /> : <LoginScreen />} />
        <Route path='/negotiation' element={isLoggedIn ? <NegotiationScreen /> : <LoginScreen />} />
        <Route path='/allquery' element={isLoggedIn && type == 'organizer' ? <QuerieTable /> : <LoginScreen />} />

        <Route path='/adminQueryById/:id' element={<AdminQueryById />} />
        <Route path='/adminDashboard' element={<AdminDashboard />} />

        <Route path='/admin' element={<AdminLoginScreen />} />
        <Route path='/adminNegotiation' element={<AdminNegotiationScreen />} />
        <Route path='/adminAddNewProject' element={<AdminAddNewProject />} />

        <Route path='*' element={<h1>not found</h1>} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;


