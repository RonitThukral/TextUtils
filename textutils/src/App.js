import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/AboutUs';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }

  }
  return (

    <>

      <Navbar title="TextUtilss" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Text Here to Analyze below" mode={mode} />
          } />

          <Route path="about" element={<About mode={mode} />} />
        </Routes>


      </div>

    </>

  );
}

export default App;
