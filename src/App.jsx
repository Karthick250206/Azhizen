
import React from "react";
import Navbar from "./Navbar/Navbar";
import Project from './components/Project/Project';
import './App.css';
import Member from "./components/Member/Member";
import Main from "./Main/Main";
import './App.css'
import Service from '../src/Service/Service'
import TimelineComponent from './components/TimelineComponent'
import { Routes ,Route} from "react-router-dom";
import ContactFormWithImage from "./components/ContactUs/ContactUs";

function App() {

  return (
    <div className="App">
      <div className="Navbar"> <Navbar/></div>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path="/about-us" element={<TimelineComponent/>}></Route>
          <Route path="/projects" element={<Project/>}></Route>
          <Route path="/members" element={<Member/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/contact-us" element={<ContactFormWithImage/>}></Route>
        </Routes>
      {/* <Project/> */}
      {/* <Member/> */}
      {/* <Main/>  */}
    
    </div>
  );
    
}

export default App
