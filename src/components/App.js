import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import NavBar from "./NavBar";
import Menu from './Menu';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import CV from './CV';
import Footer from './Footer';
import ProjectDetails from './ProjectDetails';

export const ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
  CONTACT: "/contact",
  CV: "/cv"
};

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
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
        { width < breakpoint ? <Menu /> : <NavBar />}
        <Routes>
          <Route exactpath="/"
                 element={<HomePage width={width} breakpoint={breakpoint}/>} />             
          <Route path={ROUTES.HOME}
                 element={<HomePage width={width} breakpoint={breakpoint}/>} />  
          <Route path={ROUTES.PROJECTS}
                 element={<ProjectDetails width={width} breakpoint={breakpoint} />} />
          <Route path={ROUTES.CONTACT}
                 element={<ContactPage />} />
          <Route path={ROUTES.CV}
                 element={<CV />} />
        </Routes>
        <Footer width={width} breakpoint={breakpoint}/>
      </Router>           
    </div>
  );
}

export default App;
