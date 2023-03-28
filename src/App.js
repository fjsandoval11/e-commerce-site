import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      
      <Routes path='/' />
      <Routes path='/cart' />
     </Router>
    </div>
  );
}

export default App;
