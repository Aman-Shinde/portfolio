import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Frame from './components/Frame';
import SinglePage from './pages/SinglePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <>
      <Frame pageType="blogPage"/>
      <SinglePage/>
    </> */}
  </React.StrictMode>,
);
