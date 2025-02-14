import { useState } from 'react';
import './App.css';
import Service from '../src/Service/Service';
import TimelineComponent from './components/TimelineComponent';
import Contactus from './Contactus/Contactus';
import Project from './Project/Project'; // Import the Project component
import Navbar from './Navbar/Navbar'; // Ensure correct path

function App() {
  const [page, setPage] = useState("home"); // Default page state

  return (
    <>
      <Navbar setPage={setPage} /> {/* Pass setPage to Navbar */}

      {/* Conditionally render pages */}
      {page === "services" && <Service />}
      {page === "about" && <TimelineComponent />}
      {page === "contact" && <Contactus />}
      {page === "projects" && <Project />} {/* Here we add the Project component */}
    </>
  );
}

export default App;
