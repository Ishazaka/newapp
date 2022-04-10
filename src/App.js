
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

      </>
    </Router>

  );
}

export default App;
