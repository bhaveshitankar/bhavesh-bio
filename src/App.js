// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Education from './components/education';
import Contact from './components/contact';
import Experience from './components/experience';
import { Routes, Route, Link } from 'react-router-dom';
import ResumeDownload from './components/resume';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={`App ${isNightMode ? 'night' : 'day'}`}>
      <button onClick={toggleTheme} className="theme-toggle">
        {isNightMode ? 'Switch to Day Mode' : 'Switch to Night Mode'}
      </button>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<ResumeDownload />} />
      </Routes>
    </div>
  );
}

export default App;