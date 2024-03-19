import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Home' 
import Resume from './Resume' 
import Projects from './Projects' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/"         element= {<Home />} />
          <Route path="/projects" element= {<Projects />} />
          <Route path="/resume"   element= {<Resume />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
