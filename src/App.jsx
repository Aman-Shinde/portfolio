import React, { useState, useEffect } from 'react';

import Frame from "./components/Frame";
import Layout from "./components/Layout";
import Loader from './components/Loader';

import MobileContainer from './MobileContainer';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Frame />
          <Layout>
            <MobileContainer />
          </Layout>
        </>
      )
      }
    </>
  )
}

export default App
