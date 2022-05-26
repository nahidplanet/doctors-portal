
import './App.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Appointment from './components/Appointment/Appointment';
import Reviews from './components/Reviews/Reviews';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/appointment' element={<Appointment></Appointment>}></Route>
      <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      <Route path='/contacts' element={<ContactUs></ContactUs>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
