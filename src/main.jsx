import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

import Profile from './Profile.jsx'
import Email from './Email.jsx'
import Projects from './Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/email" element={<Email/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
