import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Frame from "./components/Frame";
import Layout from "./components/Layout";

import About from "./sections/About";
import Resume from "./sections/Resume";
import Experience from "./sections/Experience";
import Blog from "./sections/Blog";

import MobileContainer from './MobileContainer';


function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 900);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Frame />
      <Router>
        <Routes>
          <Route path="/" element={<Layout> {isMobile ? <MobileContainer /> : <About />}</Layout>} />
          <Route path="/resume" element={<Layout>{isMobile ? <MobileContainer /> : <Resume />}</Layout>} />
          <Route path="/work" element={<Layout>{isMobile ? <MobileContainer /> : <Experience />}</Layout>} />
          <Route path="/Blog" element={<Layout>{isMobile ? <MobileContainer /> : <Blog />}</Layout>} />
          <Route path="*" element={<Layout>{isMobile ? <MobileContainer /> : <About />}</Layout>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
