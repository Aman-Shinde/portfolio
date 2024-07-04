import React, { useState, useEffect } from 'react';

import Frame from "./components/Frame";
import Layout from "./components/Layout";

import MobileContainer from './MobileContainer';


function App() {

  return (
    <>
      <Frame />
      <Layout>
        <MobileContainer />
      </Layout>

    </>
  )
}

export default App
