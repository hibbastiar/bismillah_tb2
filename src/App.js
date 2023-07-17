import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Viewingroom from './components/Viewingroom';
import Ticket from './home/Ticket';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/viewingroom' element={<Viewingroom />} />
        <Route path='/ticket' element={<Ticket />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
