import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Contact from './Contact';
import NavBar from "./NavBar";
import Menu from './Menu';
import HomePage from './HomePage';
import CV from './CV';
import Footer from './Footer';
import ProjectDetails from './ProjectDetails';
import ContactPhone from '../ContactPhone';

export const ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
  CV: "/cv"
};

function App() {

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 576;

  useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className="App">    
      <Router>
      { width < breakpoint ? <ContactPhone /> : <Contact />}
        { width < breakpoint ? <Menu /> : <NavBar />}
        <Routes>
          <Route exact path="/"
                 element={<HomePage width={width} 
                                    breakpoint={breakpoint}                                   
                                    setIndex={setIndex} />} />             
          <Route path={ROUTES.HOME}
                 element={<HomePage width={width} 
                                    breakpoint={breakpoint}                                 
                                    setIndex={setIndex} />} /> 
          <Route exact path={ROUTES.PROJECTS}
                 element={<ProjectDetails width={width} 
                                          breakpoint={breakpoint}
                                          index={index}
                                          setIndex={setIndex} />} />
          <Route exact path={ROUTES.CV}
                 element={<CV />} />
          <Route path={ROUTES.PROJECTS}
                 element={<ProjectDetails width={width} 
                                          breakpoint={breakpoint}
                                          index={index}
                                          setIndex={setIndex} />} />
          <Route path={ROUTES.CV}
                 element={<CV />} />
        </Routes>
        <Footer width={width} breakpoint={breakpoint}/>
      </Router>           
    </div>
  );
}

export default App;
