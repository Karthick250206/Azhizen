import React from 'react'
import './Main.css';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Partners from './Partners/Partners';
import Footer from './Footer/Footer';

const Main = () => {
  return (
    <div className='main'>
        <img src="./logo.jpg" alt=""  className='image'/>
    <div className="wording">
    <h1 className='wording-1'>"First, think.Second, believe.Third, dream</h1>
    <h1 className='wording-2'>And finally, dare."</h1>
    </div>
    <button className='join'>Join us</button>
    <About/>
    <Services/>
    <Projects/>
    <Partners/>
    <Footer/>
    </div>
  )
}

export default Main