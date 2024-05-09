import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light Mode is enabled');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#0b3764eb';
      showAlert('Dark mode is enabled');
    }
  };

  return (
    <Router>
      <Navbar title="Text Utile" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alertmessage={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm header="Enter the text" mode={mode} alert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
