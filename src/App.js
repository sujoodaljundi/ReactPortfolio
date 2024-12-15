import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Services from './components/Services';
import Skills from './components/Skills';
import Tools from './components/Tools'; 
import Projects from './components/Projects'; 
import Resume from './components/Resume'; 




function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={
            <>
              <Skills />
              <Tools />
            </>
          } />
          <Route path="/tools" element={
            <>
              <Tools />
              <Skills />

            </>
          } />

          
          <Route path="/projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
