import React, { useState, useEffect } from 'react';

import MobileContainer from './MobileContainer';

import NewLayout from "./components/NewLayout";

import SinglePage from './pages/SinglePage';

import { Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>

        <>
          <NewLayout>
            <Routes>
              <Route path="/" element={<MobileContainer/>} />
              <Route path="/page/:id" element={<SinglePage/>} />
              <Route path="*" element={<MobileContainer/>} />
            </Routes>
          </NewLayout>
        </>

    </>
  )
}

export default App
