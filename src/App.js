import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AllCart from './components/Allcart';
import Cartt from './components/Cartt';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<AllCart />} />
          <Route path="/cartt" element={<Cartt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
