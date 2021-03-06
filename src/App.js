
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Appointment from './components/Appointment/Appointment';
import Reviews from './components/Reviews/Reviews';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import MyAppointment from './components/Dashboard/MyAppointment';
import MyReview from './components/Dashboard/MyReview';
import History from './components/Dashboard/History';
import Users from './components/Dashboard/Users';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contacts' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/forget' element={<ForgetPassword />}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index path="myappointment" element={<MyAppointment></MyAppointment>}></Route>
          <Route index path="myreview" element={<MyReview></MyReview>}></Route>
          <Route index path="history" element={<History></History>}></Route>
          <Route index path="users" element={<Users></Users>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      <ToastContainer />
    </>
  );
}

export default App;
