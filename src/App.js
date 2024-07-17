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
          <li><Link to="/bhavesh-bio/">Home</Link></li>
          <li><Link to="/bhavesh-bio/education">Education</Link></li>
          <li><Link to="/bhavesh-bio/experience">Experience</Link></li>
          <li><Link to="/bhavesh-bio/resume">Resume</Link></li>
          <li><Link to="/bhavesh-bio/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/bhavesh-bio/" element={<Header />} />
        <Route path="/bhavesh-bio/contact" element={<Contact />} />
        <Route path="/bhavesh-bio/experience" element={<Experience />} />
        <Route path="/bhavesh-bio/education" element={<Education />} />
        <Route path="/bhavesh-bio/resume" element={<ResumeDownload />} />
      </Routes>
    </div>
  );
}

export default App;